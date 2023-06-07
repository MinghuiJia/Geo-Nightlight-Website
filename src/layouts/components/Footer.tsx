import React from 'react';
import { Layout, Row } from 'tdesign-react';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';

const { Footer: TFooter } = Layout;

const Footer = () => {
  const globalState = useAppSelector(selectGlobal);
  if (!globalState.showFooter) {
    return null;
  }

  return (
    <TFooter>
      <Row justify='center'>
        Copyright © 2022-{new Date().getFullYear()} 武汉大学测绘信息工程国家重点实验室版权所有 (Whu LIESMARS). All
        Rights Reserved
      </Row>
    </TFooter>
  );
};

export default React.memo(Footer);
