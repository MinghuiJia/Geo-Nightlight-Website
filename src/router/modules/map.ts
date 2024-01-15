import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/map',
    meta: {
      title: 'SDG PRODUCTS',
    },
    Component: lazy(() => import('pages/Map')),
  },
];

export default result;
