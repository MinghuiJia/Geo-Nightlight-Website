import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScene } from '@antv/larkmap';
import { PolygonLayer, LineLayer, Popup, MouseLocation, Control, ILayer } from '@antv/l7';

import { SouthAfricaColors } from '../utils/legendColor';
import { electrificationLegendAdd } from '../utils/getLegendAddFunction';
import { getSouthAfricaBoundry, getElectrificationJson } from '../../../services/map';

interface Props {
  showKey: string;
}

const App: React.FC<Props> = ({ showKey }) => {
  const [polygonLayer, setPolygonLayer] = useState<ILayer>(new PolygonLayer({}));
  const [electrificationJson, setElectrificationJson] = useState<any>();

  const scene = useScene();

  useEffect(() => {
    const mouseLocation = new MouseLocation({
      position: 'bottomright',
    });
    scene.addControl(mouseLocation);

    const legend = new Control({ position: 'bottomleft' });
    legend.onAdd = electrificationLegendAdd;

    // 数据异步获取
    getSouthAfricaBoundry().then((data) => {
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

    getElectrificationJson().then((data) => {
      setElectrificationJson(data);
    });

    scene.addControl(legend);
    return () => {
      scene.destroy();
    };
  }, []);

  useEffect(() => {
    scene.removeLayer(polygonLayer);
    const layer = new PolygonLayer({})
      .source(electrificationJson)
      .scale(showKey, {
        type: 'linear',
      })
      .color(showKey, SouthAfricaColors)
      .shape('fill')
      .active(true);

    layer.on('mousemove', (e) => {
      const popup = new Popup({
        offsets: [0, 0],
        title: `${e.feature.properties.name}, ${e.feature.properties.COUNTRY}`,
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
  }, [showKey, electrificationJson]);

  return null;
};

export default App;
