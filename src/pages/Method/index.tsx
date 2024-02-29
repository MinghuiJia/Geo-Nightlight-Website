import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createFromIconfontCN } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from 'antd';
import FireDetection from './FireDetection';
import Stabilization from './Stabilization';
import Poverty from './Poverty';
import Electrification from './Electrification';
import GDP from './GDP';
import Disaster from './Disaster';

type MenuItem = Required<MenuProps>['items'][number];
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3451964_4oaljgy5our.js',
});

const keyToCard: Record<string, JSX.Element> = {
  sub1: <FireDetection />,
  sub2: <Stabilization />,
  sub3: <Poverty />,
  sub4: <Electrification />,
  sub5: <GDP />,
  sub6: <Disaster />,
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
  getItem('Fire detection', 'sub1', <IconFont type='icon-huodian' />),
  getItem('Time series data stabilization', 'sub2', <IconFont type='icon-shijianxulie' />),
  getItem('Poverty rate estimation', 'sub3', <IconFont type='icon-pinkuncun-' />),
  getItem('Electrification rate estimation', 'sub4', <IconFont type='icon-dianli' />),
  getItem('Per Capita GDP growth rate estimation', 'sub5', <IconFont type='icon-meiyuan' />),
  getItem('Natural disaster economic loss estimation', 'sub6', <IconFont type='icon-dizhizaihai' />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

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
        style={{ width: 330, minWidth: 330, maxWidth: 330, marginRight: 10 }}
        items={items}
        onClick={itemClicked}
      />
      <div>{keyToCard[currKey]}</div>
    </div>
  );
};

export default App;
