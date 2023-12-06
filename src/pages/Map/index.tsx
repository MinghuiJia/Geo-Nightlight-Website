// import React, { useState } from 'react';
// import DataSource from '../Data/Source/DataSource';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromIconfontCN } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { Menu } from 'antd';

// type MenuItem = Required<MenuProps>['items'][number];
// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/c/font_3451964_fnbkt7y0qcn.js',
// });

// const keyToCard: Record<string, JSX.Element> = {
//   sub1: <DataSource />,
// };

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Data Source', 'sub1', <IconFont type='icon-laiyuanfenxi' />),
//   getItem('Data Products', 'sub2', <IconFont type='icon-chanpin' />),
// ];

// // submenu keys of first level
// const rootSubmenuKeys = ['sub1', 'sub2'];

import React, { useState, useEffect } from 'react';

import { GaodeMap } from '@antv/l7-maps';
import { Scene, PolygonLayer, LineLayer, Popup } from '@antv/l7';

// const scene = new Scene({
//   id: 'map',
//   map: new GaodeMap({
//     style: 'dark',
//     center: [110.770672, 34.159869],
//     pitch: 45,
//   }),
// });

const App: React.FC = () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        // style: 'light',
        // center: [22, 4.8],
        // zoom: 2,
        style: 'dark',
        pitch: 0,
        center: [-96, 37.8],
        zoom: 3,
        token: '3de8b0156585dd306f5f0f1d0cf7f620',
      }),
    });

    scene.on('loaded', () => {
      fetch('https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json')
        .then((res) => res.json())
        .then((data) => {
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
    });
  }, []);

  return <div style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }} id='map'></div>;
};

export default App;
