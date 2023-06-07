import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/research',
    meta: {
      title: 'Research Papers',
    },
    Component: lazy(() => import('pages/Paper')),
  },
];

export default result;
