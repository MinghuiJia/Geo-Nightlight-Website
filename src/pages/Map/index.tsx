import React, { useState } from 'react';
import PovertyMap from './Poverty';
import ProductComponent from './Disaster/Product';
import ElectrificationMap from './Electrification';
import GDPMap from './GDP';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createFromIconfontCN } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3451964_thuipwrzm7.js',
});

const keyToCard: Record<string, JSX.Element> = {
  sub1: <PovertyMap />,
  sub2: <ElectrificationMap />,
  sub3: <GDPMap />,
  sub4: <ProductComponent />,
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
  getItem('Poverty', 'sub1', <IconFont type='icon-pinkuncun-' />),
  getItem('Electrification', 'sub2', <IconFont type='icon-dianli' />),
  getItem('Per Capita GDP Growth Rate', 'sub3', <IconFont type='icon-meiyuan' />),
  getItem('Disaster', 'sub4', <IconFont type='icon-dizhizaihai' />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

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
    // const clickKey = keyPath[0];
    const clickKey = key;
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
        style={{ width: 250, minWidth: 250, maxWidth: 250, marginRight: 10 }}
        items={items}
        onClick={itemClicked}
      />
      {keyToCard[currKey]}
    </div>
  );
};

export default App;
