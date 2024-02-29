import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/method',
    meta: {
      title: 'METHOD',
    },
    Component: lazy(() => import('pages/Method')),
  },
];

export default result;
