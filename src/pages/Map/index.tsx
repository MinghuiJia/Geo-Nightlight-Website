import React, { useState } from 'react';
import DataSource from '../Data/source/DataSource';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createFromIconfontCN } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3451964_fnbkt7y0qcn.js',
});

const keyToCard: Record<string, JSX.Element> = {
  sub1: <DataSource />,
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Data Source', 'sub1', <IconFont type='icon-laiyuanfenxi' />),
  getItem('Data Products', 'sub2', <IconFont type='icon-chanpin' />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [currKey, setCurrKey] = useState('sub1');

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const itemClicked = ({
    item,
    key,
    keyPath,
    domEvent,
  }: {
    item: object;
    key: string;
    keyPath: string[];
    domEvent: object;
  }) => {
    const clickKey = keyPath[0];
    setCurrKey(clickKey);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Menu
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={['sub1']}
        defaultOpenKeys={['sub1']}
        style={{ width: 286, minWidth: 286, maxWidth: 286, marginRight: 10 }}
        items={items}
        onClick={itemClicked}
      />
      <div>{keyToCard[currKey]}</div>
    </div>
  );
};

export default App;
