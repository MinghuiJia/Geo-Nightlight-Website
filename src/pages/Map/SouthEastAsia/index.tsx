import React, { useState, useEffect } from 'react';

import { Mapbox } from '@antv/l7-maps';
import { Scene, PointLayer, Popup, MouseLocation, Control } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { SouthEastAsiaColors } from '../utils/legendColor';
import { sliderMarks } from '../utils/sliderMarks';
import { southEastAsiaLegendAdd } from '../utils/getLegendAddFunction';

import southEastAsiaData from '../Data/SouthEastAsia/southEastAsia.json';

const marks: SliderMarks = sliderMarks;

const App: React.FC = () => {
  const [year, setYear] = useState(2013);
  const [data, setData] = useState<string>('');
  useEffect(() => {
    console.log(data);
    console.log(southEastAsiaData);
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        style: 'light',
        center: [111.52, 7.37],
        // style: 'dark',
        pitch: 0,
        zoom: 3,
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

      const pointLayer = new PointLayer({})
        .source(southEastAsiaData)
        .scale('value', {
          type: 'threshold',
          domain: [10, 20, 30, 40, 50],
        })
        .shape('circle')
        .active(true)
        .animate(true)
        .size(40)
        .color('value', SouthEastAsiaColors);

      scene.addLayer(pointLayer);

      pointLayer.on('mousemove', (e) => {
        const popup = new Popup({
          offsets: [0, 0],
          closeButton: true,
        })
          .setLnglat(e.lngLat)
          .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties.value}</span>`);
        scene.addPopup(popup);
      });

      const legend = new Control({ position: 'bottomleft' });
      legend.onAdd = southEastAsiaLegendAdd;

      scene.addControl(legend);
    });
    return () => {
      scene.destroy();
    };
  }, [data]);

  // 组件挂载时初始化数据
  useEffect(() => {
    fetch('csv/launch_sites.csv').then(async (res) => {
      setData(await res.text());
    });
  }, []);

  const handleSliderChange = (value: number) => {
    setYear(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 5px 3px', width: '100%' }}>
      <Slider min={2012} max={2022} step={1} defaultValue={year} onChange={handleSliderChange} marks={marks} />
      <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>
    </div>
  );
};

export default App;
