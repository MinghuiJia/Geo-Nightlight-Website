import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/cases',
    meta: {
      title: 'Use Cases',
    },
    Component: lazy(() => import('pages/Cases')),
    // children: [
    //   {
    //     path: 'earthquake',
    //     Component: lazy(() => import('pages/Cases/Earthquake')),
    //     meta: {
    //       title: 'Türkiye/Syria Earthquake',
    //     },
    //   },
    //   {
    //     path: 'mongolia',
    //     Component: lazy(() => import('pages/Cases/Mongolia')),
    //     meta: {
    //       title: 'Analysis of Mining Industry in Mongolia',
    //     },
    //   },
    //   {
    //     path: 'conflict',
    //     Component: lazy(() => import('pages/Cases/Conflict')),
    //     meta: {
    //       title: 'Sudan Conflict',
    //     },
    //   },
    // ],
  },
];

export default result;
