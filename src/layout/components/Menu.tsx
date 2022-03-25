import { Menu } from 'antd';
import routes, { IRoute } from '@/routers/routes'
import { createElement } from "react";
import { Link } from 'react-router-dom';

const {SubMenu, Item} = Menu

function MenuComponent(list: IRoute[], basePath: string) {
  return (
    list.map(item => {
      return item.children ? (
        <SubMenu key={item.path} icon={item.icon && createElement(item.icon)} title={item.name}>
          {MenuComponent(item.children, basePath + '/' + item.path)}
        </SubMenu>
      ) : (
        <Item key={item.path} icon={item.icon && createElement(item.icon)}>
          <Link to={basePath + '/' + item.path}>{item.name}</Link>
        </Item>
      )
    })
  );
}

function MenuContainer() {
  const handleClick = (e: any) => {

  }
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['index']} onClick={handleClick}>
      {MenuComponent(routes, '')}
    </Menu>
  )
}

export default MenuContainer;