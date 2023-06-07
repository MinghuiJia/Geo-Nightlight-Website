import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/data',
    meta: {
      title: 'Data',
    },
    Component: lazy(() => import('pages/Data')),
    // children: [
    //   {
    //     path: 'product',
    //     Component: lazy(() => import('pages/Data/Product')),
    //     meta: {
    //       title: 'NOAA DMSP/OLS Product',
    //     },
    //   },
    //   {
    //     path: 'datasets',
    //     Component: lazy(() => import('pages/Data/Datasets')),
    //     meta: {
    //       title: '30 m-scale Annual Global Normalized Difference Urban Index Earthquake Datasets',
    //     },
    //   },
    //   {
    //     path: 'marble',
    //     Component: lazy(() => import('pages/Data/Marble')),
    //     meta: {
    //       title: 'NASA Black Marble Product',
    //     },
    //   },
    //   {
    //     path: 'qimingxing',
    //     Component: lazy(() => import('pages/Data/Datasets')),
    //     meta: {
    //       title: 'Qimingxing-1 Night-time Light Earthquake',
    //     },
    //   },
    //   {
    //     path: 'sdgsat',
    //     Component: lazy(() => import('pages/Data/Datasets')),
    //     meta: {
    //       title: 'SDGSAT-1 Satellite’s Glimmer Imager Product',
    //     },
    //   },
    //   {
    //     path: 'yangwang',
    //     Component: lazy(() => import('pages/Data/Datasets')),
    //     meta: {
    //       title: 'Yangwang-1 Night-time Light Product',
    //     },
    //   },
    // ],
  },
];

export default result;
