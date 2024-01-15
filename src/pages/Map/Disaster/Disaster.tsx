import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScene } from '@antv/larkmap';
import { PointLayer, Popup, MouseLocation, Control } from '@antv/l7';

import { southEastAsiaLegendAdd } from '../utils/getLegendAddFunction';

import { SouthEastAsiaColors } from '../utils/legendColor';
import { getDisasterJson } from '../../../services/map';

interface Props {
  showKey: string;
}

const App: React.FC<Props> = ({ showKey }) => {
  const [disasterJson, setDisasterJson] = useState<any>();

  const scene = useScene();
  useEffect(() => {
    const mouseLocation = new MouseLocation({
      position: 'bottomright',
    });
    scene.addControl(mouseLocation);

    const legend = new Control({ position: 'bottomleft' });
    legend.onAdd = southEastAsiaLegendAdd;

    // 异步加载数据
    getDisasterJson().then((data) => {
      setDisasterJson(data);
    });

    scene.addControl(legend);
    return () => {
      scene.destroy();
    };
  }, []);

  useEffect(() => {
    scene.removeAllLayer();
    const pointLayer = new PointLayer({
      zIndex: 2,
    })
      .source(disasterJson)
      .scale(showKey, {
        type: 'threshold',
        // type: 'linear',
        domain: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      })
      .color(showKey, SouthEastAsiaColors)
      .shape('circle')
      .active(true)
      .animate(true)
      .size(30);

    scene.addLayer(pointLayer);

    pointLayer.on('mousemove', (e) => {
      const popup = new Popup({
        offsets: [0, 0],
        closeButton: true,
        closeOnClick: true,
        closeOnEsc: true,
      })
        .setLnglat(e.lngLat)
        .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties[showKey]}亿</span>`);
      scene.addPopup(popup);
    });
  }, [showKey, disasterJson]);
  return null;
};

export default App;
