import React, { memo } from 'react';
import { Row, Col, Link, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import image1 from 'assets/image/StabilizationFlow.png';
import styles from './index.module.less';

const Stabilization: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Time series data stabilization' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            Although the high frequency of daily VIIRS night-time light has potential to reflect high dynamic
            characteristic of natural disaster impact, the daily data includes strong uncertainty which hinders good
            performance of time series analysis. Li et al (2019) revealed that satellite-observed radiance of artificial
            light at night has strong nonlinear relation to Viewing Zenith Angle (VZA), and this relation can explain ~
            50% of short-term fluctuation of satellite-observed night-time light, which was regarded as a major factor
            behind uncertainty of VIIRS night-time light data. Thereby, the satellite-observed night-time light dynamic
            during the disaster period is a mixture of the actual night-time light change due to the disaster and the
            anisotropy derived fluctuation in time series of night-time light. Further, satellite-acquired night-time
            light images often face data gaps due to cloud obstructions, particularly in low-latitude tropical regions,
            leading to temporal and spatial discontinuities in the data. This hinders accurate assessment of significant
            events. Hence, it&apos;s vital to eliminate angular effects and gap-filling missing data to enhance the
            quality quality quality of night-time light remote sensing data.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            The methodology includes three major parts: 1) Data preprocessing, 2) Generation of time series radiance
            data, which includes angular normalization for removing the angular effect, 3) Gap-filling for repairing the
            missed data in time series.
          </p>
          <p>
            1) Data preprocessing. To prepare the night-time light radiance time series and corresponding VZAs for
            correction, every pixel in study area extracts the radiance, QF cloud mask and mandatory quality flag from
            the VNP46A2, while viewing zenith angle, solar zenith angle and moon illumination fraction are extracted
            from the VNP46A1. Finally, these quality flags are used to remove the low-quality data.
          </p>
          <p>
            2) Angular normalization. The angular normalization algorithm is to remove the observed night-time light
            radiance derived from changes of Viewing Zenith Angle (VZA), and estimate the radiance time series assuming
            that VZA is equal to zero over time. This model decomposes the satellite-observed time series radiance
            dynamic into two components, the real light emission changes which are represented by the radiance at VZA of
            zero, and the VZA-change-derived radiance observation due to the anisotropy. Ultimately, this leads to
            acquiring the night-time light radiance time series after the elimination of the angular effects.
          </p>
          <p>
            3) Gap-filling the missed data. After obtaining the angle-normalized time series, the additive time series
            model named Prophet is used to gap-filling the missing data which makes the time series more complete. We
            use the real observation data to fit the time series, and only fill in the fitted values of night-time light
            radiance at the missing moments thereby completing the time series gap-filling.
          </p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '950px', height: '820px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>
              Figure 1. The flowchart of the time series data stabilization method.
            </div>
          </div>
          <span>
            <b>Data</b>
          </span>
          <p>
            We use the Black Marble product suite, which provides worldwide night-time light data, including daily
            at-sensor TOA night-time radiance (VNP46A1), daily moonlight adjusted NTL (VNP46A2), which has a wide range
            of applications in urban geography and power supply analysis. Since the VNP46A2 product has been cleaned
            from moonlight and atmospheric effects, the light sources in the images are mainly artificial light, so it
            can be used as night-time light data to meet the needs of modelling. Also, the corresponding VNP46A1 is also
            used to get the product quality tag and satellite VZA status.
          </p>
          <p>
            Besides, to remove non-artificial light from the images, the land cover dataset GlobeLand30 is employed. The
            dataset, at 30 m resolution, contains ten major land cover types, and artificial surface is considered to be
            urban built-up areas, where most of the population live.
          </p>
          <span>
            <b>Summary</b>
          </span>
          <p>
            By proposing an angular normalization and time series gap-filling algorithm, this module attempts to remove
            the angular effect from time series night-time light data and ensure data completeness. It utilizes the
            periodic basis vector metric and the relative error metric to evaluate the precision of the angular
            normalization algorithm and time series gap-filling, respectively. After angular normalization, the periodic
            fluctuation of time series is reduced by 81.03%, and the precision for the time series gap-filling is 85.5%.
          </p>
          <span>
            <b>References</b>
          </span>
          <p>
            Jia M, Li X, Gong Y, et al. Estimating natural disaster loss using improved daily night-time light data[J].
            International Journal of Applied Earth Observation and Geoinformation, 2023, 120: 103359.
          </p>
          <span>
            Download Paper:{' '}
            <Link
              theme='primary'
              href='http://43.154.234.176/json/Stabilization.pdf'
              style={{ fontWeight: 'bold' }}
              target='blank'
            >
              Link
            </Link>
          </span>
        </Col>
      </Row>
    </Card>
  </div>
);

export default memo(Stabilization);
