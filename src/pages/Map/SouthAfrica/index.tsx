import React, { useState, useEffect } from 'react';

import { Mapbox } from '@antv/l7-maps';
import { Scene, PolygonLayer, Popup, MouseLocation, Control, DOM } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

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

const marks: SliderMarks = {
  2012: '2012',
  2013: '2013',
  2014: '2014',
  2015: '2015',
  2016: '2016',
  2017: '2017',
  2018: '2018',
  2019: '2019',
  2020: '2020',
  2021: '2021',
  2022: '2022',
  // 2022: {
  //   style: {
  //     color: '#000',
  //   },
  //   label: <strong>2022</strong>,
  // },
};
const colors = [
  'rgb(255,255,217)',
  'rgb(237,248,177)',
  'rgb(199,233,180)',
  'rgb(127,205,187)',
  'rgb(65,182,196)',
  'rgb(29,145,192)',
  'rgb(34,94,168)',
  'rgb(12,44,132)',
];
// const colors = ['rgb(8, 225, 8)', 'rgb(179, 236, 10)', 'rgb(225, 193, 12)', 'rgb(243, 115, 10)', 'rgb(237, 52, 28)'];

const styleElement = document.createElement('style');
styleElement.textContent = `
            .info {
                padding: 6px 8px;
                font: 14px/16px Arial, Helvetica, sans-serif;
                background: white;
                background: rgba(255,255,255,0.8);
                box-shadow: 0 0 15px rgba(0,0,0,0.2);
                border-radius: 5px;
            }
            .info h4 {
                margin: 0 0 5px;
                color: #777;
            }
              .legend {
                line-height: 18px;
                color: #555;
            }
            .legend i {
                width: 40px;
                height: 20px;
                float: left;
                margin-top: 5px;
                margin-right: 0px;
                opacity: 1;
                color: #000;
                font-weight: bold;
            }
            `;
// 将<style>元素添加到<head>元素中，实现样式注入
document.head.appendChild(styleElement);

function getColor(d: number, color: string[]) {
  if (d > 40) return color[4];
  if (d > 30) return color[3];
  if (d > 20) return color[2];
  if (d > 10) return color[1];
  if (d > 0) return color[0];
  return 'rgba(0,0,0,0)';
}

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
        .color('density', colors)
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
      legend.onAdd = () => {
        const div = DOM.create('div', 'info legend');
        const grades = [0, 10, 20, 30, 40, -999];
        const grades2 = [0, '10', '20', '30', '40', '50'];

        for (let i = 0; i < grades.length; i++) {
          if (i < grades.length - 1) {
            div.innerHTML += `<i style="background: ${getColor(grades[i] + 1, colors)}"></i>`;
          } else {
            div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: ${getColor(
              grades[i] + 1,
              colors,
            )} ">Economic Losses</i>`;
          }
        }
        div.innerHTML += '<br>';
        for (let i = 0; i < grades2.length; i++) {
          if (i < grades.length - 1) {
            div.innerHTML += `<i>${grades2[i]}</>`;
          } else {
            div.innerHTML += `<i style=" width: 110px;">${grades2[i]}</>`;
          }
        }
        return div;
      };

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
