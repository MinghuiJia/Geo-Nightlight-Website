import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScene } from '@antv/larkmap';
import { PolygonLayer, LineLayer, Popup, MouseLocation, Control, ILayer } from '@antv/l7';

import povertyJson from '../Data/SouthAfrica/allYearsPoverty.json';
import countriesBoundryJson from '../Data/SouthAfrica/countriesBoundry.json';
import { SouthAfricaColors } from '../utils/legendColor';
import { povertyLegendAdd } from '../utils/getLegendAddFunction';

interface Props {
  showKey: string;
}

const App: React.FC<Props> = ({ showKey }) => {
  const [polygonLayer, setPolygonLayer] = useState<ILayer>(new PolygonLayer({}));

  const scene = useScene();

  const boundryLayer = new LineLayer({})
    .source(countriesBoundryJson)
    .color('#f10c0c')
    .active(true)
    .size(1)
    .style({
      lineType: 'dash',
      dashArray: [2, 2],
    });
  scene.addLayer(boundryLayer);

  useEffect(() => {
    const mouseLocation = new MouseLocation({
      position: 'bottomright',
    });
    scene.addControl(mouseLocation);

    const legend = new Control({ position: 'bottomleft' });
    legend.onAdd = povertyLegendAdd;

    scene.addControl(legend);
    return () => {
      scene.destroy();
    };
  }, []);

  useEffect(() => {
    scene.removeLayer(polygonLayer);
    const layer = new PolygonLayer({})
      .source(povertyJson)
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
  }, [showKey]);

  return null;
};

export default App;
