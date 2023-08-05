import { lazy } from 'react';
import { withKeepAlive } from 'keepalive-react-component';
import Home from '@/pages/Home';

export interface IRouterType {
  path: string;
  name: string;
  component: any;
  meta: { title: string };
}

const routes: IRouterType[] = [
  {
    path: '/',
    name: 'home',
    component: withKeepAlive(Home, { cacheId: 'home', scroll: true }),
    meta: {
      title: '知乎日报',
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('@/pages/Detail')),
    meta: {
      title: '新闻详情-知乎日报',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('@/pages/Personal')),
    meta: {
      title: '个人中心-知乎日报',
    },
  },
  {
    path: '/store',
    name: 'store',
    component: lazy(() => import('@/pages/Store')),
    meta: {
      title: '我的收藏-知乎日报',
    },
  },
  {
    path: '/update',
    name: 'update',
    component: lazy(() => import('@/pages/Update')),
    meta: {
      title: '修改个人信息-知乎日报',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('@/pages/Login')),
    meta: {
      title: '登录/注册-知乎日报',
    },
  },
  {
    path: '*',
    name: '404',
    component: lazy(() => import('@/pages/NotFound')),
    meta: {
      title: '404页面-知乎日报',
    },
  },
];

export default routes;
