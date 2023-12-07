import React, { useState, useEffect } from 'react';

import { GaodeMap, Mapbox } from '@antv/l7-maps';
import { Scene, PolygonLayer, LineLayer, Popup, MouseLocation } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import myJson from './Data/world.json';
import southAfricaJson from './Data/southAfrica.json';
import southEastAsiaJson from './Data/southEastAsia.json';

const marks: SliderMarks = {
  2013: '2013',
  2014: '2014',
  2015: '2015',
  2016: '2016',
  2017: '2017',
  2018: '2018',
  2019: '2019',
  2020: '2020',
  2021: '2021',
  // 100: {
  //   style: {
  //     color: '#f50',
  //   },
  //   label: <strong>100°C</strong>,
  // },
};

interface dataItem {
  type: string;
  id: string;
  properties: object;
  geometry: object;
}

interface dataJson {
  type: string;
  features: dataItem[];
}

const App: React.FC = () => {
  const [year, setYear] = useState(2013);
  const [data, setData] = useState<dataJson>({} as dataJson);
  useEffect(() => {
    console.log(data);
    // const scene = new Scene({
    //   id: 'map',
    //   map: new GaodeMap({
    //     // style: 'light',
    //     // center: [22, 4.8],
    //     // zoom: 2,
    //     style: 'dark',
    //     pitch: 0,
    //     center: [-96, 37.8],
    //     zoom: 3,
    //     token: '3de8b0156585dd306f5f0f1d0cf7f620',
    //   }),
    //   logoVisible: false,
    // });
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        style: 'light',
        center: [22, -15.8],
        // zoom: 2,
        // style: 'dark',
        pitch: 0,
        // center: [-96, 37.8],
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

      const color = [
        'rgb(255,255,217)',
        'rgb(237,248,177)',
        'rgb(199,233,180)',
        'rgb(127,205,187)',
        'rgb(65,182,196)',
        'rgb(29,145,192)',
        'rgb(34,94,168)',
        'rgb(12,44,132)',
      ];
      const layer = new PolygonLayer({})
        .source(data)
        .scale('density', {
          type: 'quantile',
        })
        .color('density', color)
        .shape('fill')
        .active(true);

      const layer2 = new LineLayer({
        zIndex: 2,
      })
        .source(data)
        .color('#fff')
        .active(true)
        .size(1)
        .style({
          lineType: 'dash',
          dashArray: [2, 2],
        });

      scene.addLayer(layer);
      scene.addLayer(layer2);

      layer.on('mousemove', (e) => {
        const popup = new Popup({
          offsets: [0, 0],
          closeButton: false,
        })
          .setLnglat(e.lngLat)
          .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties.density}</span>`);
        scene.addPopup(popup);
      });
    });
    return () => {
      scene.destroy();
    };
  }, [data]);

  // 组件挂载时初始化数据
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json').then(
      async (res) => {
        setData(await res.json());
      },
    );
  }, []);

  const handleSliderChange = (value: number) => {
    setYear(value);
    if (value === 2013) setData(myJson);
    else if (value === 2014) setData(southAfricaJson);
    else if (value === 2015) setData(southEastAsiaJson);
    else setData({} as dataJson);
    // // TODO: 在这里根据年份更新地图数据
    // // 请根据自己的需求来实现数据的更新逻辑
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding:'0 50px 5px 50px' }}>
      <Slider min={2013} max={2021} step={1} defaultValue={year} onChange={handleSliderChange} marks={marks} />
      {/* <div style={{ minHeight: '500px' }} id='map'></div> */}
      <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>
    </div>
  );
};

export default App;
