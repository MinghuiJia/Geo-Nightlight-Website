import React, { memo, useMemo } from 'react';
import { Row, Col, Button, List, Card, Table } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';

import styles from './index.module.less';

const Learn: React.FC<BrowserRouterProps> = () => {
  const columns = [
    {
      title: 'Course',
      colKey: 'course',
      align: 'center',
    },
    {
      title: 'Lecturer',
      colKey: 'lecturer',
      align: 'center',
    },
    {
      title: 'Training platform',
      colKey: 'training',
      align: 'center',
    },
    {
      title: 'Number of trainees',
      colKey: 'trainees',
      align: 'center',
    },
    {
      title: 'Dates',
      colKey: 'dates',
      align: 'center',
    },
  ] as any;

  const data = [
    {
      lecturer: 'Xi Li & Ziying Fan',
      course: 'night-time light and its application in sustainable development (online)',
      training: 'Belt Road Geospatial Training Centre',
      trainees: '100',
      dates: '27 Nov 2022, 29 Nov 2022, 2 Dec 2022',
    },
    {
      lecturer: 'Xi Li',
      course: 'Remote Sensing of Night-time Light and Its Applications (online)',
      training: 'CIFAL Shanghai International Training Centre',
      trainees: '49',
      dates: '24 Sep 2021',
    },
    {
      lecturer: 'Xi Li',
      course: 'Remote Sensing of Night-time Light (online)',
      training: 'Wuhan Research Institute of Posts and Telecommunications; Ministry of Commerce of China',
      trainees: '10',
      dates: '1 Mar 2023',
    },
  ] as any;

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={12} lg={12} xl={9}>
          <Card className={styles.welcome} bordered={false}>
            <Row justify='space-between'>
              <Col className={styles.name}>
                Recently, there is fast growing need for knowledge from potential users of night-time light remote
                sensing, while experts and scientist in this domain may not know them sufficiently. GEO Night Light
                attempts to fill this gap by capacity development. Recent activities of capacity development from GEO
                Night Light are followings.
              </Col>
            </Row>
          </Card>
          <Card
            className={styles.userinfo}
            bordered={false}
            actions={
              <Button shape='square' theme='default' variant='text'>
                <IconFont name='edit' />
              </Button>
            }
            header
          >
            <Table rowKey='key' columns={columns} data={data} bordered />
          </Card>
        </Col>
        <Col xs={12} lg={12} xl={3}>
          <Card className={styles.postmsg}>
            <div className={styles.avatar}>
              <span>Li</span>
            </div>
            <div className={styles.name}>Prof. Xi Li</div>
            <div className={styles.position}>Contact Email (li_rs@163.com)</div>
            <div className={styles.position}>Need training courses?</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Learn);
