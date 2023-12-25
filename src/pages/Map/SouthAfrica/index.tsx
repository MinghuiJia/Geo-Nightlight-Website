import React, { useState, useEffect } from 'react';

import { Mapbox } from '@antv/l7-maps';
import { Scene, PolygonLayer, Popup, MouseLocation, Control } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { SouthAfricaColors } from '../utils/legendColor';
import { sliderMarks } from '../utils/sliderMarks';
import { southAfricaLegendAdd } from '../utils/getLegendAddFunction';

import povertyJson2012 from '../Data/SouthAfrica/allYearsPoverty.json';

const marks: SliderMarks = sliderMarks;

const App: React.FC = () => {
  const [showKey, setShowKey] = useState<string>('density2012');

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        style: 'light',
        center: [22, -20.8],
        // style: 'dark',
        pitch: 0,
        zoom: 3.3,
        token: 'pk.eyJ1Ijoiam1oMTk5OCIsImEiOiJjbHB2NnN6dGswMjJnMmtvOTU5cGNwdDN0In0.-D8QreNtfeSeuBN92vQQ1w',
      }),
      logoVisible: false,
    });

    scene.on('loaded', () => {
      // 增加鼠标位置显示
      const mouseLocation = new MouseLocation({
        position: 'bottomright',
      });
      scene.addControl(mouseLocation);

      const layer = new PolygonLayer({})
        .source(povertyJson2012)
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
          .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties[showKey]}</span>`);
        scene.addPopup(popup);
      });

      scene.addLayer(layer);

      const legend = new Control({ position: 'bottomleft' });
      legend.onAdd = southAfricaLegendAdd;

      scene.addControl(legend);
    });
    return () => {
      scene.destroy();
    };
  }, [showKey]);

  // // 组件挂载时初始化数据
  // useEffect(() => {
  //   setData(povertyJson2012);
  // }, []);

  const handleSliderChange = (value: number) => {
    if (value === 2012) setShowKey('density2012');
    else if (value === 2013) setShowKey('density2013');
    else if (value === 2014) setShowKey('density2014');
    else if (value === 2015) setShowKey('density2015');
    else if (value === 2016) setShowKey('density2016');
    else if (value === 2017) setShowKey('density2017');
    else if (value === 2018) setShowKey('density2018');
    else if (value === 2019) setShowKey('density2019');
    else if (value === 2020) setShowKey('density2020');
    else if (value === 2021) setShowKey('density2021');
    else if (value === 2022) setShowKey('density2022');
    else setShowKey('density2012');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 5px 3px', width: '100%' }}>
      <Slider min={2012} max={2022} step={1} defaultValue={2012} onChange={handleSliderChange} marks={marks} />
      <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>
    </div>
  );
};

export default App;
