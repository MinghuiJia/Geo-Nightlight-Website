import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/introduction',
    meta: {
      title: 'INTRODUCTION',
    },
    Component: lazy(() => import('pages/Introduction')),
  },
];

export default result;
