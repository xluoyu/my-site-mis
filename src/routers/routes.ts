import { lazy } from 'react';
import {FundOutlined, ReadOutlined, SettingOutlined } from '@ant-design/icons'

export interface IRoute {
  name: string;
  icon?: any;
  path?: string;
  component?: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
  children?: IRoute[]
}

const routes:IRoute[] = [
  {path: 'index', icon: FundOutlined, name: '仪表盘', component: lazy(() => import('../views/Index'))},
  {
    name: '系统管理',
    icon: SettingOutlined,
    path: 'system',
    children: [
      { name: '权限配置', path: 'power' },
      { name: '账号管理', path: 'account' },
      { name: '数据统计', path: 'statistics' },
    ]
  },
  {
    name: '文章管理',
    icon: ReadOutlined,
    path: 'docs',
    children: [
      { name: '线上文章', path: 'online', component: lazy(() => import('../views/docs/Online'))},
      { name: '草稿箱', path: 'drafts', component: lazy(() => import('../views/docs/Drafts'))},
      { name: '标签管理', path: 'tags', component: lazy(() => import('../views/docs/Tags'))},
    ]
  },
];

export default routes