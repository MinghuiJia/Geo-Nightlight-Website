import React, { memo } from 'react';
import { Row, Col, Button, List, Card } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';

import styles from './index.module.less';

const Contact: React.FC<BrowserRouterProps> = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={12} lg={12} xl={9}>
          <Card className={styles.welcome} bordered={false}>
            <Row justify='space-between'>
              <Col className={styles.name}>
                GEO Night Light welcomes global experts, institutes and organizations who are interested in this
                project, please be free to contact Prof. Xi Li from Wuhan University.
              </Col>
            </Row>
          </Card>
          {/*<Card*/}
          {/*  className={styles.userinfo}*/}
          {/*  title='个人信息'*/}
          {/*  bordered={false}*/}
          {/*  actions={*/}
          {/*    <Button shape='square' theme='default' variant='text'>*/}
          {/*      <IconFont name='edit' />*/}
          {/*    </Button>*/}
          {/*  }*/}
          {/*  header*/}
          {/*>*/}
          {/*  <Row gutter={[16, 16]}>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>手机</div>*/}
          {/*      <div className={styles.value}>+86 13923734567</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>座机</div>*/}
          {/*      <div className={styles.value}>734567</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>办公室邮箱</div>*/}
          {/*      <div className={styles.value}>Account@qq.com</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>座位</div>*/}
          {/*      <div className={styles.value}>T32F 012</div>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*  <Row gutter={[16, 16]}>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>管理主体</div>*/}
          {/*      <div className={styles.value}>腾讯集团</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>直属上级</div>*/}
          {/*      <div className={styles.value}>Michael Wang</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>职称</div>*/}
          {/*      <div className={styles.value}>高级 UI 设计师</div>*/}
          {/*    </Col>*/}
          {/*    <Col span={3}>*/}
          {/*      <div className={styles.label}>入职时间</div>*/}
          {/*      <div className={styles.value}>2021-07-01</div>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*  <Row>*/}
          {/*    <Col span={12}>*/}
          {/*      <div className={styles.label}>所属团队</div>*/}
          {/*      <div className={styles.value}>腾讯/腾讯公司/某事业群/某产品部/某运营中心/商户服务组</div>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*</Card>*/}
        </Col>
        <Col xs={12} lg={12} xl={3}>
          <Card className={styles.postmsg}>
            <div className={styles.avatar}>
              <span>Li</span>
            </div>
            <div className={styles.name}>Prof. Xi Li</div>
            <div className={styles.position}>Wuhan University</div>
          </Card>
          <Card className={styles.teams} bordered={false} title='Email'>
            li_rs@163.com
          </Card>
          <Card className={styles.teams} bordered={false} title='Email'>
            lixi@whu.edu.cn
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Contact);
