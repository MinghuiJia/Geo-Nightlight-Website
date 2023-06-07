import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/contact',
    meta: {
      title: 'Contact',
    },
    Component: lazy(() => import('pages/Contact')),
  },
];

export default result;
