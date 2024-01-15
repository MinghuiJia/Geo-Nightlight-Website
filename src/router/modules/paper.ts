import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/research',
    meta: {
      title: 'PUBLICATION',
    },
    Component: lazy(() => import('pages/Paper')),
  },
];

export default result;
