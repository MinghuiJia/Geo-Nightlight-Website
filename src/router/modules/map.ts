import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/map',
    meta: {
      title: 'MAP',
    },
    Component: lazy(() => import('pages/Map')),
  },
];

export default result;
