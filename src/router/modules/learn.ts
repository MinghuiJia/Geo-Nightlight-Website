import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/learn',
    meta: {
      title: 'LEARN',
    },
    Component: lazy(() => import('pages/Learn')),
  },
];

export default result;
