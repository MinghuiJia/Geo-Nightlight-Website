import React, { memo } from 'react';
import { Card, Col, Row, Image, Link } from 'tdesign-react';
import { Table } from 'antd';

import styles from '../index.module.less';

import image1 from 'assets/image/ShortTermEconomicLoss.png';
import image2 from 'assets/image/LongTermEconomicLoss1.png';
import image3 from 'assets/image/LongTermEconomicLoss2.png';

const DisasterProduct = () => {
  const columnsShort = [
    {
      title: 'Dis No',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: 'Disaster Type',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: 'ISO',
      dataIndex: 'iso',
      align: 'center',
    },
    {
      title: 'Total Deaths',
      dataIndex: 'deaths',
      align: 'center',
    },
    {
      title: (
        <div>
          <div>Economic Loss</div>
          <div></div>(Billion dollars)
        </div>
      ),
      dataIndex: 'loss',
      align: 'center',
    },
  ] as any;

  const dataShort = [
    {
      no: '2013-0235-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '48',
      loss: '15.1',
    },
    {
      no: '2012-0417-MMR',
      type: 'Earthquake',
      iso: 'MMR',
      deaths: '38',
      loss: '9.8',
    },
    {
      no: '2014-0159-THA',
      type: 'Earthquake',
      iso: 'THA',
      deaths: '1',
      loss: '2.21',
    },
    {
      no: '2015-0216-MYS',
      type: 'Earthquake',
      iso: 'MYS',
      deaths: '24',
      loss: '10.7',
    },
    {
      no: '2016-0475-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '104',
      loss: '14.3',
    },
    {
      no: '2016-0383-MMR',
      type: 'Earthquake',
      iso: 'MMR',
      deaths: '4',
      loss: '3.69',
    },
    {
      no: '2013-0020-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '1',
      loss: '2.24',
    },
    {
      no: '2017-0247-PHL',
      type: 'Earthquake',
      iso: 'PHL',
      deaths: '3',
      loss: '3.08',
    },
    {
      no: '2018-0352-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '4340',
      loss: '110',
    },
    {
      no: '2013-0395-PHL',
      type: 'Earthquake',
      iso: 'PHL',
      deaths: '230',
      loss: '33',
    },
    {
      no: '2014-0227-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '111',
      loss: '30.4',
    },
    {
      no: '2018-0455-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '182',
      loss: '30.3',
    },
    {
      no: '2017-0422-VNM',
      type: 'Storm',
      iso: 'VNM',
      deaths: '123',
      loss: '26.9',
    },
    {
      no: '2020-0411-VNM',
      type: 'Storm',
      iso: 'VNM',
      deaths: '243',
      loss: '24.3',
    },
    {
      no: '2021-0173-IDN',
      type: 'Storm',
      iso: 'IDN',
      deaths: '226',
      loss: '36.4',
    },
    {
      no: '2021-0670-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '59',
      loss: '14.7',
    },
    {
      no: '2021-0813-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '457',
      loss: '45.4',
    },
    {
      no: '2022-0204-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '346',
      loss: '38.1',
    },
    {
      no: '2022-0707-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '158',
      loss: '23.8',
    },
    {
      no: '2013-0380-KHM',
      type: 'Flood',
      iso: 'KHM',
      deaths: '200',
      loss: '24.7',
    },
    {
      no: '2021-0821-MYS',
      type: 'Flood',
      iso: 'MYS',
      deaths: '56',
      loss: '17.3',
    },
    {
      no: '2022-0832-PHL',
      type: 'Flood',
      iso: 'PHL',
      deaths: '70',
      loss: '17',
    },
    {
      no: '2019-0111-IND',
      type: 'Flood',
      iso: 'IDN',
      deaths: '206',
      loss: '19.5',
    },
    {
      no: '2015-0308-MMR',
      type: 'Flood',
      iso: 'MMR',
      deaths: '149',
      loss: '14.6',
    },
  ] as any;

  const columnsLong = [
    {
      title: 'Dis No',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: 'Disaster Type',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: 'ISO',
      dataIndex: 'iso',
      align: 'center',
    },
    {
      title: 'Total Deaths',
      dataIndex: 'deaths',
      align: 'center',
    },
    {
      title: (
        <div>
          <div>Economic Loss in Country Level</div>
          <div></div>(Billion dollars)
        </div>
      ),
      dataIndex: 'countryLoss',
      align: 'center',
    },
    {
      title: (
        <div>
          <div>Economic Loss in Affected Area Level</div>
          <div></div>(Billion dollars)
        </div>
      ),
      dataIndex: 'affectedAreaLoss',
      align: 'center',
    },
  ] as any;

  const dataLong = [
    {
      no: '2013-0235-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '48',
      countryLoss: '291.5',
      affectedAreaLoss: '2870.01',
    },
    {
      no: '2012-0417-MMR',
      type: 'Earthquake',
      iso: 'MMR',
      deaths: '38',
      countryLoss: '10.7',
      affectedAreaLoss: '332.08',
    },
    {
      no: '2015-0216-MYS',
      type: 'Earthquake',
      iso: 'MYS',
      deaths: '24',
      countryLoss: '10.87',
      affectedAreaLoss: '1165680',
    },
    {
      no: '2015-0608-TLS',
      type: 'Earthquake',
      iso: 'TLS',
      deaths: '',
      countryLoss: '2.05',
      affectedAreaLoss: '3183199',
    },
    {
      no: '2016-0475-IDN',
      type: 'Earthquake',
      iso: 'IDN',
      deaths: '104',
      countryLoss: '8.63',
      affectedAreaLoss: '62394.21',
    },
    {
      no: '2016-0383-MMR',
      type: 'Earthquake',
      iso: 'MMR',
      deaths: '4',
      countryLoss: '-40.32',
      affectedAreaLoss: '-1201.43',
    },
    {
      no: '2016-0537-PHL',
      type: 'Earthquake',
      iso: 'PHL',
      deaths: '8',
      countryLoss: '25.31',
      affectedAreaLoss: 'Can not estimate',
    },
    {
      no: '2013-0380-KHM',
      type: 'Flood',
      iso: 'KHM',
      deaths: '200',
      countryLoss: '1.47',
      affectedAreaLoss: '317.61',
    },
    {
      no: '2014-0227-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '111',
      countryLoss: '32.01',
      affectedAreaLoss: '23444',
    },
    {
      no: '2018-0455-PHL',
      type: 'Storm',
      iso: 'PHL',
      deaths: '182',
      countryLoss: '1.4',
      affectedAreaLoss: '293.94',
    },
    {
      no: '2018-0222-LAO',
      type: 'Flood',
      iso: 'LAO',
      deaths: '136',
      countryLoss: '0.91',
      affectedAreaLoss: 'Can not estimate',
    },
    {
      no: '2017-0422-VNM',
      type: 'Storm',
      iso: 'VNM',
      deaths: '123',
      countryLoss: '-57.2',
      affectedAreaLoss: '-2645.87',
    },
    {
      no: '2019-0385-MMR',
      type: 'Flood',
      iso: 'MMR',
      deaths: '115',
      countryLoss: '0.12',
      affectedAreaLoss: 'Can not estimate',
    },
    {
      no: '2020-0411-VNM',
      type: 'Storm',
      iso: 'VNM',
      deaths: '243',
      countryLoss: '128.5',
      affectedAreaLoss: '460.45',
    },
  ] as any;

  return (
    <div>
      <Card title='1 Estimation of Short-term Economic Losses' className={styles.welcome}>
        <Row justify='space-between'>
          <Col>
            <p>
              A total of 24 natural disasters in the Southeast Asian region were selected to assess the short-term
              economic losses caused by natural disasters. Based on the estimation model for short-term economic losses
              due to natural disasters, the short-term economic losses caused by these 24 natural disasters were
              calculated. The results are shown in the table below.
            </p>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Table 1 Short-Term Economic Losses</div>
            <Table
              rowKey='key'
              columns={columnsShort}
              dataSource={dataShort}
              tableLayout='fixed'
              pagination={false}
              bordered
              scroll={{ y: 240 }}
            />
            <p>
              From the results, it can be seen that the majority of short-term economic losses caused by most natural
              disasters are in the range of billions of U.S. dollars (1 billion ≤ losses &lt; 10 billion). There are
              fewer natural disasters with short-term economic losses in the range of tens of millions and hundreds of
              billions of U.S. dollars.
            </p>
            <div>
              <Image
                alt=''
                src={image1}
                fit='contain'
                style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
              />
              <div style={{ textAlign: 'center' }}>Figure 1 Analysis of Short-term Economic Losses</div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title='2 Estimation of Long-term Economic Losses' className={styles.welcome}>
        <Row justify='space-between'>
          <Col>
            <p>
              Estimate the long-term economic losses caused by 14 natural disasters at both the national and actual
              disaster-affected area levels in Southeast Asian countries. The results are shown in the table below.
            </p>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Table 2 Long-Term Economic Losses</div>
            <Table
              rowKey='key'
              columns={columnsLong}
              dataSource={dataLong}
              tableLayout='fixed'
              pagination={false}
              bordered
              scroll={{ y: 240 }}
            />
            <p>
              In terms of the absolute scale of economic losses at the national level, there were only 2 disasters with
              economic losses in the tens of millions of dollars, 4 disasters with losses reaching one hundred million
              dollars, 4 disasters with losses in the billion-dollar range, and 2 disasters with losses in the tens of
              billion-dollar range.
            </p>
            <div>
              <Image
                alt=''
                src={image2}
                fit='contain'
                style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
              />
              <div style={{ textAlign: 'center' }}>Figure 2 Long-term Economic Losses at the National Level</div>
            </div>
            <p>
              For 2 natural disasters, the long-term economic losses in the affected areas were negative. This indicates
              that these natural disasters not only did not bring harm to the long-term economic losses in the affected
              areas but instead contributed to an improvement in the long-term economic development of the regions where
              the natural disasters occurred. The possible reason could be that rescue activities facilitated a rapid
              recovery and reconstruction of the actual affected areas, leading to faster growth.
            </p>
            <p>
              For 7 natural disasters, the degree of long-term economic losses in the affected areas was below ten
              million dollars. One natural disaster had long-term economic losses reaching the ten million dollars, and
              one natural disaster had long-term economic losses reaching hundred million dollars.
            </p>
            <div>
              <Image
                alt=''
                src={image3}
                fit='contain'
                style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
              />
              <div style={{ textAlign: 'center' }}>
                Figure 3 Long-term Economic Losses at the Level of Affected Areas
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title='3 Short-term and Long-term Economic Losses Data Download'>
        <Row justify='space-between'>
          <Col>
            <p>
              Combining relevant data to estimate short-term and long-term economic losses caused by natural disasters
              in Southeast Asian countries.
            </p>
            <Link theme='primary' style={{ fontWeight: 'bold' }} href='http://43.154.234.176:80/json/economicLoss.xlsx'>
              Download excel data
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default memo(DisasterProduct);
