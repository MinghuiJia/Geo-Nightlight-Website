import React, { useState, useEffect } from 'react';

import { Mapbox } from '@antv/l7-maps';
import { Scene, PolygonLayer, Popup, MouseLocation, Control } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { SouthAfricaColors } from '../utils/legendColor';
import { sliderMarks } from '../utils/sliderMarks';
import { southAfricaLegendAdd } from '../utils/getLegendAddFunction';

import povertyJson2012 from '../Data/SouthAfrica/2012Poverty.json';
import povertyJson2013 from '../Data/SouthAfrica/2013Poverty.json';
import povertyJson2014 from '../Data/SouthAfrica/2014Poverty.json';
import povertyJson2015 from '../Data/SouthAfrica/2015Poverty.json';
import povertyJson2016 from '../Data/SouthAfrica/2016Poverty.json';
import povertyJson2017 from '../Data/SouthAfrica/2017Poverty.json';
import povertyJson2018 from '../Data/SouthAfrica/2018Poverty.json';
import povertyJson2019 from '../Data/SouthAfrica/2019Poverty.json';
import povertyJson2020 from '../Data/SouthAfrica/2020Poverty.json';
import povertyJson2021 from '../Data/SouthAfrica/2021Poverty.json';
import povertyJson2022 from '../Data/SouthAfrica/2022Poverty.json';

const marks: SliderMarks = sliderMarks;

const App: React.FC = () => {
  const [data, setData] = useState<typeof povertyJson2012>({} as typeof povertyJson2012);
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        style: 'light',
        center: [22, -15.8],
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

      const layer = new PolygonLayer({})
        .source(data)
        .scale('density', {
          type: 'linear',
        })
        .color('density', SouthAfricaColors)
        .shape('fill')
        .active(true);

      scene.addLayer(layer);

      layer.on('mousemove', (e) => {
        const popup = new Popup({
          offsets: [0, 0],
          closeButton: true,
        })
          .setLnglat(e.lngLat)
          .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties.density}</span>`);
        scene.addPopup(popup);
      });

      const legend = new Control({ position: 'bottomleft' });
      legend.onAdd = southAfricaLegendAdd;

      scene.addControl(legend);
    });
    return () => {
      scene.destroy();
    };
  }, [data]);

  // 组件挂载时初始化数据
  useEffect(() => {
    setData(povertyJson2012);
  }, []);

  const handleSliderChange = (value: number) => {
    if (value === 2012) setData(povertyJson2012);
    else if (value === 2013) setData(povertyJson2013);
    else if (value === 2014) setData(povertyJson2014);
    else if (value === 2015) setData(povertyJson2015);
    else if (value === 2016) setData(povertyJson2016);
    else if (value === 2017) setData(povertyJson2017);
    else if (value === 2018) setData(povertyJson2018);
    else if (value === 2019) setData(povertyJson2019);
    else if (value === 2020) setData(povertyJson2020);
    else if (value === 2021) setData(povertyJson2021);
    else if (value === 2022) setData(povertyJson2022);
    else setData({} as typeof povertyJson2012);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 5px 3px', width: '100%' }}>
      <Slider min={2012} max={2022} step={1} defaultValue={2012} onChange={handleSliderChange} marks={marks} />
      <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>
    </div>
  );
};

export default App;
