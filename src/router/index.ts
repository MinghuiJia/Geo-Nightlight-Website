import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import otherRoutes from './modules/others';
import introduction from './modules/introduction';
import data from './modules/data';
import paper from './modules/paper';
import cases from './modules/cases';
import learn from './modules/learn';
import contact from './modules/contact';
import map from './modules/map';
import method from './modules/method';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/',
    redirect: '/introduction',
  },
];

const allRoutes = [
  ...routes,
  ...introduction,
  ...data,
  ...method,
  ...map,
  ...cases,
  ...paper,
  ...learn,
  ...contact,
  ...otherRoutes,
];

export default allRoutes;
