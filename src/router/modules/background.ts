import { lazy } from 'react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/background',
    meta: {
      title: 'Background',
    },
    Component: lazy(() => import('pages/Background')),
  },
];

export default result;
