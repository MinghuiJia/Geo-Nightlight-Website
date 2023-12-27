import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScene } from '@antv/larkmap';
import { PolygonLayer, Popup, MouseLocation, Control } from '@antv/l7';

import electrificationJson from '../Data/SouthAfrica/allYearsElectrification.json';
import { SouthAfricaColors } from '../utils/legendColor';
import { electrificationLegendAdd } from '../utils/getLegendAddFunction';

interface Props {
  showKey: string;
}

const App: React.FC<Props> = ({ showKey }) => {
  const scene = useScene();
  useEffect(() => {
    const mouseLocation = new MouseLocation({
      position: 'bottomright',
    });
    scene.addControl(mouseLocation);

    const legend = new Control({ position: 'bottomleft' });
    legend.onAdd = electrificationLegendAdd;

    scene.addControl(legend);
    return () => {
      scene.destroy();
    };
  }, []);

  useEffect(() => {
    scene.removeAllLayer();
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
        closeButton: true,
      })
        .setLnglat(e.lngLat)
        .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties[showKey]}%</span>`);
      scene.addPopup(popup);
    });

    scene.addLayer(layer);
  }, [showKey]);

  return null;
};

export default App;
