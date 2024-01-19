import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScene } from '@antv/larkmap';
import { PolygonLayer, LineLayer, Popup, MouseLocation, Control, ILayer } from '@antv/l7';

import { GDPColors } from '../utils/legendColor';
import { gdpLegendAdd } from '../utils/getLegendAddFunction';
import { getGDPJson } from '../../../services/map';

interface Props {
  showKey: string;
}

const App: React.FC<Props> = ({ showKey }) => {
  const [polygonLayer, setPolygonLayer] = useState<ILayer>(new PolygonLayer({}));
  const [GDPJson, setGDPJson] = useState<any>();

  const scene = useScene();

  useEffect(() => {
    const mouseLocation = new MouseLocation({
      position: 'bottomright',
    });
    scene.addControl(mouseLocation);

    const legend = new Control({ position: 'bottomleft' });
    legend.onAdd = gdpLegendAdd;

    // 数据异步获取
    getGDPJson().then((data) => {
      const boundryLayer = new LineLayer({
        zIndex: 2,
      })
        .source(data)
        .color('#f10c0c')
        .active(true)
        .size(1)
        .style({
          lineType: 'dash',
          dashArray: [2, 2],
        });
      scene.addLayer(boundryLayer);
    });

    getGDPJson().then((data: any) => {
      setGDPJson(data);
    });

    scene.addControl(legend);
    return () => {
      scene.destroy();
    };
  }, []);

  useEffect(() => {
    scene.removeLayer(polygonLayer);
    const layer = new PolygonLayer({})
      .source(GDPJson)
      .scale(showKey, {
        type: 'threshold',
        // type: 'linear',
        domain: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
      })
      .color(showKey, GDPColors)
      .shape('fill')
      .active(true);

    layer.on('mousemove', (e) => {
      const popup = new Popup({
        offsets: [0, 0],
        title: `${e.feature.properties.NAME_ENG}`,
        closeButton: true,
        closeOnClick: true,
        closeOnEsc: true,
      })
        .setLnglat(e.lngLat)
        .setHTML(`<span>${e.feature.properties[showKey]}%</span>`);
      scene.addPopup(popup);
    });

    scene.addLayer(layer);

    setPolygonLayer(layer);
  }, [showKey, GDPJson]);

  return null;
};

export default App;
