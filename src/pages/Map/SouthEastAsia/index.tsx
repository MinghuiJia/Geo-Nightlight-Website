import React, { useState, useEffect } from 'react';

import { GaodeMap, Mapbox } from '@antv/l7-maps';
import { Scene, PointLayer, Popup, MouseLocation, Control, DOM } from '@antv/l7';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

import southEastAsiaData from '../Data/SouthEastAsia/southEastAsia.json';

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
};

// const colors = ['#0A1FB2', '#02BEFF', '#FFB02A', '#FF7412', '#FF3417'];
const colors = ['rgb(8, 225, 8)', 'rgb(179, 236, 10)', 'rgb(225, 193, 12)', 'rgb(243, 115, 10)', 'rgb(237, 52, 28)'];

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
        .color('value', colors);

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
    fetch('csv/launch_sites.csv').then(async (res) => {
      setData(await res.text());
    });
  }, []);

  const handleSliderChange = (value: number) => {
    setYear(value);
    // // TODO: 在这里根据年份更新地图数据
    // // 请根据自己的需求来实现数据的更新逻辑
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 5px 3px', width: '100%' }}>
      <Slider min={2013} max={2021} step={1} defaultValue={year} onChange={handleSliderChange} marks={marks} />
      <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>
    </div>
  );
};

export default App;
