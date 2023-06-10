import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/research',
    meta: {
      title: 'RESEARCH PAPERS',
    },
    Component: lazy(() => import('pages/Paper')),
  },
];

export default result;
