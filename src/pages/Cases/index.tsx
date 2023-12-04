import React, { useState } from 'react';
import SudanConfilctCard from './Conflict/SudanConflict';
import MiningIndustryCard from './Mongolia/MiningIndustry';
import TurkeySyriaEqCard from './Earthquake/TurkeySyriaEq';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createFromIconfontCN } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3451964_st9vlo26r7b.js',
});

const keyToCard: Record<string, JSX.Element> = {
  '1': <TurkeySyriaEqCard />,
  '2': <SudanConfilctCard />,
  '3': <MiningIndustryCard />,
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
  getItem('Earthquake', 'sub1', <IconFont type='icon-dizhen' />, [getItem('Türkiye/Syria Earthquake', '1')]),
  getItem('Conflict', 'sub2', <IconFont type='icon-chongtufenxi' />, [
    getItem('Sudan Conflict', '2'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Mongolia', 'sub3', <IconFont type='icon-mineral' />, [getItem('Mining Industry in Mongolia', '3')]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [currKey, setCurrKey] = useState('1');

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
    console.log(typeof item);
    console.log(typeof domEvent);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Menu
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={['1']}
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
