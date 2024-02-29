import React, { memo } from 'react';
import { Row, Col, Link, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
// import image1 from 'assets/image/Background_1-ntl satellites.jpg';
import image1 from 'assets/image/ElectrificationFlow.png';
import image2 from 'assets/image/ElectrificationFormat1.png';
import image3 from 'assets/image/ElectrificationFormat2.png';

import styles from './index.module.less';

const Electrification: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Electrification rate estimation' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            Electrification is important to measure regional economy, as electric popularization supports better lives
            of human beings. The United Nations Sustainable Development Goal 7 (SDG 7) aims to ensure that all people
            have access to affordable, reliable, sustainable, and modern energy by 2030. Over the next decade, global
            energy demand will grow exponentially. Power outages occur frequently in underdeveloped countries when
            demand for electricity exceeds supply. Lack of access to reliable and stable energy will be a severe
            constraint on the achievement of SDG 7.
          </p>
          <p>
            However, existing electrification rate data are only commonly available at national level in underdeveloped
            countries. Therefore, we proposed a Power Stability Method to estimate sub-national electrification rate
            using nighttime light data. The essence of this method is constructing a power stability index viewed as a
            key parameter which is derived from daily nighttime light data, and the method considers both reliability of
            electricity supply and the average power supply which is represented by the annual nighttime light
            luminosity.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            The purpose of this method is to estimate the electrification rate (EA), that is, the percentage of the
            number of people with stable electricity access in a region (Pelectrified) to the total number of people in
            the region (Ptotal). The formula is as follows:
          </p>
          <Image
            alt=''
            src={image2}
            fit='contain'
            style={{ width: '150px', height: '70px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <p>
            We proposed a method to estimate the electrification rate based on power stability index. The way our method
            to estimate electrification rate consisted of two principles. First, we considered the brighter areas in
            nighttime light images as likely to have power supply. Second, if the power supply was stable enough, the
            area was considered to be electrified. In other words, the electrified area should not only have electricity
            supply but also with stability. Therefore, we introduced a key index into our method, named power stability
            index (PSI). We defined it as the proportion of the number of days in a year with light emissions (Nbright)
            to the total valid days in that year (N_total). The calculation formula is as follows:
          </p>
          <Image
            alt=''
            src={image3}
            fit='contain'
            style={{ width: '150px', height: '60px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <p>
            If brightness of a pixel is larger than a threshold, we view the pixel in that day emit light at night, and
            the Nbright is summation of all the days with light emission for that pixel. Therefore, each pixel in each
            year has a PSI value.
          </p>
          <p>The Power Stability Method contains four steps:</p>
          <p>
            1) The radiance threshold for the EOG annual composite was set. We used 0.1 nW/cm²/sr as the radiance
            threshold to detect bright region at night. This threshold was used to pre-screen areas without electricity
            access.
          </p>
          <p>
            2) Power stability index in each pixel was generated. Before calculating the power stability index at each
            pixel, a screening step was required: the number of valid days of VNP46A2 product in a year needed to exceed
            15. The pixels did not meet the requirement will be screened out. Then, we calculated the power stability
            index based on the daily data of VNP46A2, and the threshold was also 0.1 nW/cm²/sr.
          </p>
          <p>
            3) An electrification map was generated. We set 0.85 as the threshold for power stability index. For each
            pixel, the pixel was considered to have reliable power supply if the power stability index was larger than
            the threshold.
          </p>
          <p>
            4) Finally, the electrification rates were estimated. The above generated electrification map was overlaid
            with Landscan population map. Based on the electrified population from electrification map in step 3 and the
            total population from Landscan population map, the electrification rates of different regions (i.e.
            provinces and districts) were estimated.
          </p>
          <p>A flowchart of Power Stability Method is shown as follows.</p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '750px', height: '620px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>
              Figure 1. Flowchart of Power Stability Method to estimate electrification rate.
            </div>
          </div>
          <span>
            <b>Data</b>
          </span>
          <p>
            The critical data of this method is nighttime light data, including the annual average nighttime light data
            Annual VNL V2 product provided by Earth Observation Group and the daily nighttime light data VNP46A2
            provided by the National Aeronautics and Space Administration. In addition, this method also requires the
            LandScan population distribution data, the province-level electrification rate statistics obtained from the
            Demographic and Health Surveys (DHS) program, and the national scale electrification rate statistics
            obtained from the World Bank.
          </p>
          <span>
            <b>Summary</b>
          </span>
          <p>
            We used the method to estimate the electrification rates in thirteen countries in sub-Saharan Africa. We
            validated the estimated province-level electrification rates using the statistical data. The overall
            accuracy was over 85%, indicating that the method is accurate for estimating electrification rate.
          </p>
          <p>
            In summary, we proposed a Power Stability Method to estimate electrification rate using night-time light
            data. This method highlights the potential of using multi-source night-time light imagery to locate
            population without stable electricity supply.
          </p>
          <span>
            <b>References</b>
          </span>
          <p>
            M. He, Q. Xu, W. Wang, Z. Shao and X. Li, &quot;Multiscale Estimation of Electrification Rate Using
            Night-Time Light Imagery,&quot; in IEEE Journal of Selected Topics in Applied Earth Observations and Remote
            Sensing, vol. 16, pp. 8960-8968, 2023, doi: 10.1109/JSTARS.2023.3316310.
          </p>
          <span>
            Download Paper:{' '}
            <Link
              theme='primary'
              href='http://43.154.234.176/json/Electrification.pdf'
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

export default memo(Electrification);
