import React, { memo } from 'react';
import { Card, Col, Row } from 'tdesign-react';
import styles from '../index.module.less';
import { Table } from 'antd';

const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    align: 'center',
  },
  {
    title: 'Country Name',
    dataIndex: 'name',
    align: 'center',
    with: 500,
  },
  {
    title: 'Country Short Name',
    dataIndex: 'shortName',
    align: 'center',
  },
  {
    title: 'Total Night-time Light',
    dataIndex: 'sum',
    align: 'center',
  },
] as any;

const data = [
  { year: '2012', name: 'Brunei', shortName: 'BRN', sum: '467733.3991' },
  { year: '2013', name: 'Brunei', shortName: 'BRN', sum: '494075.7791' },
  { year: '2014', name: 'Brunei', shortName: 'BRN', sum: '512994.1355' },
  { year: '2015', name: 'Brunei', shortName: 'BRN', sum: '534858.8159' },
  { year: '2016', name: 'Brunei', shortName: 'BRN', sum: '496232.8946' },
  { year: '2017', name: 'Brunei', shortName: 'BRN', sum: '459139.7485' },
  { year: '2018', name: 'Brunei', shortName: 'BRN', sum: '454403.2759' },
  { year: '2019', name: 'Brunei', shortName: 'BRN', sum: '484283.6062' },
  { year: '2020', name: 'Brunei', shortName: 'BRN', sum: '493177.6018' },
  { year: '2021', name: 'Brunei', shortName: 'BRN', sum: '493169.7455' },
  { year: '2012', name: 'Indonesia', shortName: 'IDN', sum: '13319288.35' },
  { year: '2013', name: 'Indonesia', shortName: 'IDN', sum: '14345367.03' },
  { year: '2014', name: 'Indonesia', shortName: 'IDN', sum: '15203036.06' },
  { year: '2015', name: 'Indonesia', shortName: 'IDN', sum: '16017583.79' },
  { year: '2016', name: 'Indonesia', shortName: 'IDN', sum: '16299416.19' },
  { year: '2017', name: 'Indonesia', shortName: 'IDN', sum: '17711854.36' },
  { year: '2018', name: 'Indonesia', shortName: 'IDN', sum: '18929097.75' },
  { year: '2019', name: 'Indonesia', shortName: 'IDN', sum: '20062345.1' },
  { year: '2020', name: 'Indonesia', shortName: 'IDN', sum: '20661359.47' },
  { year: '2021', name: 'Indonesia', shortName: 'IDN', sum: '21908516.62' },
  { year: '2012', name: 'Cambodia', shortName: 'KHM', sum: '133555.8793' },
  { year: '2013', name: 'Cambodia', shortName: 'KHM', sum: '155965.7211' },
  { year: '2014', name: 'Cambodia', shortName: 'KHM', sum: '184451.9585' },
  { year: '2015', name: 'Cambodia', shortName: 'KHM', sum: '208448.8351' },
  { year: '2016', name: 'Cambodia', shortName: 'KHM', sum: '229150.7359' },
  { year: '2017', name: 'Cambodia', shortName: 'KHM', sum: '263193.247' },
  { year: '2018', name: 'Cambodia', shortName: 'KHM', sum: '306136.0786' },
  { year: '2019', name: 'Cambodia', shortName: 'KHM', sum: '372672.3665' },
  { year: '2020', name: 'Cambodia', shortName: 'KHM', sum: '420876.2111' },
  { year: '2021', name: 'Cambodia', shortName: 'KHM', sum: '452496.3578' },
  { year: '2012', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '156425.5688' },
  { year: '2013', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '185077.6329' },
  { year: '2014', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '204013.392' },
  { year: '2015', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '220028.3435' },
  { year: '2016', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '228331.831' },
  { year: '2017', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '236950.4184' },
  { year: '2018', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '236241.4137' },
  { year: '2019', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '231746.0002' },
  { year: '2020', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '234814.7756' },
  { year: '2021', name: "Lao People's Democratic Republic", shortName: 'LAO', sum: '242027.0667' },
  { year: '2012', name: 'Myanmar', shortName: 'MMR', sum: '781892.6281' },
  { year: '2013', name: 'Myanmar', shortName: 'MMR', sum: '818158.1899' },
  { year: '2014', name: 'Myanmar', shortName: 'MMR', sum: '871366.7583' },
  { year: '2015', name: 'Myanmar', shortName: 'MMR', sum: '908310.4402' },
  { year: '2016', name: 'Myanmar', shortName: 'MMR', sum: '939035.8106' },
  { year: '2017', name: 'Myanmar', shortName: 'MMR', sum: '1044251.819' },
  { year: '2018', name: 'Myanmar', shortName: 'MMR', sum: '1171379.929' },
  { year: '2019', name: 'Myanmar', shortName: 'MMR', sum: '1275186.278' },
  { year: '2020', name: 'Myanmar', shortName: 'MMR', sum: '1331396.644' },
  { year: '2021', name: 'Myanmar', shortName: 'MMR', sum: '1359930.201' },
  { year: '2012', name: 'Malaysia', shortName: 'MYS', sum: '10671940.43' },
  { year: '2013', name: 'Malaysia', shortName: 'MYS', sum: '11744912.42' },
  { year: '2014', name: 'Malaysia', shortName: 'MYS', sum: '12435796.46' },
  { year: '2015', name: 'Malaysia', shortName: 'MYS', sum: '12793526.86' },
  { year: '2016', name: 'Malaysia', shortName: 'MYS', sum: '13238644.24' },
  { year: '2017', name: 'Malaysia', shortName: 'MYS', sum: '13745245' },
  { year: '2018', name: 'Malaysia', shortName: 'MYS', sum: '14271440.1' },
  { year: '2019', name: 'Malaysia', shortName: 'MYS', sum: '14434787.66' },
  { year: '2020', name: 'Malaysia', shortName: 'MYS', sum: '14483566.74' },
  { year: '2021', name: 'Malaysia', shortName: 'MYS', sum: '14798149.85' },
  { year: '2012', name: 'Philippines', shortName: 'PHL', sum: '2130875.273' },
  { year: '2013', name: 'Philippines', shortName: 'PHL', sum: '2286638.279' },
  { year: '2014', name: 'Philippines', shortName: 'PHL', sum: '2381931.306' },
  { year: '2015', name: 'Philippines', shortName: 'PHL', sum: '2471551.506' },
  { year: '2016', name: 'Philippines', shortName: 'PHL', sum: '2574822.211' },
  { year: '2017', name: 'Philippines', shortName: 'PHL', sum: '2641299.609' },
  { year: '2018', name: 'Philippines', shortName: 'PHL', sum: '2813900.461' },
  { year: '2019', name: 'Philippines', shortName: 'PHL', sum: '2915850.722' },
  { year: '2020', name: 'Philippines', shortName: 'PHL', sum: '2847343.57' },
  { year: '2021', name: 'Philippines', shortName: 'PHL', sum: '2938461.661' },
  { year: '2012', name: 'Singapore', shortName: 'SGP', sum: '1322107.887' },
  { year: '2013', name: 'Singapore', shortName: 'SGP', sum: '1382634.229' },
  { year: '2014', name: 'Singapore', shortName: 'SGP', sum: '1405072.033' },
  { year: '2015', name: 'Singapore', shortName: 'SGP', sum: '1427527.561' },
  { year: '2016', name: 'Singapore', shortName: 'SGP', sum: '1389008.906' },
  { year: '2017', name: 'Singapore', shortName: 'SGP', sum: '1457401.694' },
  { year: '2018', name: 'Singapore', shortName: 'SGP', sum: '1541084.282' },
  { year: '2019', name: 'Singapore', shortName: 'SGP', sum: '1519709.006' },
  { year: '2020', name: 'Singapore', shortName: 'SGP', sum: '1387233.438' },
  { year: '2021', name: 'Singapore', shortName: 'SGP', sum: '1400841.355' },
  { year: '2012', name: 'Thailand', shortName: 'THA', sum: '8685307.944' },
  { year: '2013', name: 'Thailand', shortName: 'THA', sum: '9580447.493' },
  { year: '2014', name: 'Thailand', shortName: 'THA', sum: '10271873.34' },
  { year: '2015', name: 'Thailand', shortName: 'THA', sum: '10749900.33' },
  { year: '2016', name: 'Thailand', shortName: 'THA', sum: '11263175.87' },
  { year: '2017', name: 'Thailand', shortName: 'THA', sum: '12010004.35' },
  { year: '2018', name: 'Thailand', shortName: 'THA', sum: '12480985.09' },
  { year: '2019', name: 'Thailand', shortName: 'THA', sum: '12939505.15' },
  { year: '2020', name: 'Thailand', shortName: 'THA', sum: '13626182.07' },
  { year: '2021', name: 'Thailand', shortName: 'THA', sum: '14484485.52' },
  { year: '2012', name: 'Timor-Leste', shortName: 'TLS', sum: '45219.59701' },
  { year: '2013', name: 'Timor-Leste', shortName: 'TLS', sum: '49162.44002' },
  { year: '2014', name: 'Timor-Leste', shortName: 'TLS', sum: '49950.97259' },
  { year: '2015', name: 'Timor-Leste', shortName: 'TLS', sum: '46043.15823' },
  { year: '2016', name: 'Timor-Leste', shortName: 'TLS', sum: '41544.59128' },
  { year: '2017', name: 'Timor-Leste', shortName: 'TLS', sum: '39868.31491' },
  { year: '2018', name: 'Timor-Leste', shortName: 'TLS', sum: '39031.4972' },
  { year: '2019', name: 'Timor-Leste', shortName: 'TLS', sum: '37931.38693' },
  { year: '2020', name: 'Timor-Leste', shortName: 'TLS', sum: '38109.01769' },
  { year: '2021', name: 'Timor-Leste', shortName: 'TLS', sum: '36685.75334' },
  { year: '2012', name: 'Vietnam', shortName: 'VNM', sum: '5246148.182' },
  { year: '2013', name: 'Vietnam', shortName: 'VNM', sum: '6938843.602' },
  { year: '2014', name: 'Vietnam', shortName: 'VNM', sum: '8279792.767' },
  { year: '2015', name: 'Vietnam', shortName: 'VNM', sum: '9506506.459' },
  { year: '2016', name: 'Vietnam', shortName: 'VNM', sum: '9989757.293' },
  { year: '2017', name: 'Vietnam', shortName: 'VNM', sum: '11182753.42' },
  { year: '2018', name: 'Vietnam', shortName: 'VNM', sum: '12769274' },
  { year: '2019', name: 'Vietnam', shortName: 'VNM', sum: '13377289.85' },
  { year: '2020', name: 'Vietnam', shortName: 'VNM', sum: '13300057.25' },
  { year: '2021', name: 'Vietnam', shortName: 'VNM', sum: '13659483.45' },
] as any;
const DataProcessed = () => (
  <div>
    <Card title='Yearly Image Data for Southern Africa Countries' className={styles.welcome}>
      <Row justify='space-between'>
        <Col>
          <p>
            VNP46A4 is the short-name for the fourth nighttime lights (NTL) product in the Black Marble suite, which
            provides yearly composites generated from daily atmospherically- and lunar-BRDF-corrected NTL radiance to
            remove the influence of extraneous artifacts and biases. Known by its long-name, VIIRS/NPP Lunar
            BRDF-Adjusted Nighttime Lights Yearly L3 Global 15 arc-second Linear Lat Lon Grid, this product contains 28
            layers. We used the NTL composite (VNP46A4) in the snow-free state and combined it with GADM administrative
            division data to generate night-time light remote sensing data for 13 countries in Southern Africa from 2012
            to 2021.
          </p>
          <p>
            Download each country night-time light remote sensing data, please{' '}
            <a
              href='http://43.154.234.176:8088/folder/SouthAfrica'
              target='_blank'
              rel='noreferrer'
              style={{ fontWeight: 'bold' }}
            >
              click
            </a>{' '}
            here.
          </p>
        </Col>
      </Row>
    </Card>
    <Card title='Monthly Image Data for Southeast Asian Countries'>
      <Row justify='space-between'>
        <Col>
          <p>
            VNP46A3 is the short-name for the third nighttime lights (NTL) product in the Black Marble suite, which
            provides monthly composites generated from daily atmospherically- and lunar-BRDF-corrected NTL radiance to
            remove the influence of extraneous artifacts and biases. Known by its long-name, VIIRS/NPP Lunar
            BRDF-Adjusted Nighttime Lights Monthly L3 Global 15 arc-second Linear Lat Lon Grid, this product contains 28
            layers. We used the NTL composite (VNP46A3) in the snow-free state and combined it with GADM administrative
            division data to generate night-time light remote sensing data for 11 countries in Southeast Asian from 2012
            to 2021.
          </p>
          <p>
            Download each country night-time light remote sensing data, please{' '}
            <a
              href='http://43.154.234.176:8088/folder/SouthEastCountry'
              target='_blank'
              rel='noreferrer'
              style={{ fontWeight: 'bold' }}
            >
              click
            </a>{' '}
            here.
          </p>
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Table 1 Calculation results of the total night-time light of Southeast Asian countries
          </div>
          <Table
            rowKey='key'
            columns={columns}
            dataSource={data}
            tableLayout='fixed'
            pagination={false}
            bordered
            scroll={{ y: 240 }}
          />
        </Col>
      </Row>
    </Card>
  </div>
);

export default memo(DataProcessed);
