import React, { memo } from 'react';
import { Card, Image, Link } from 'tdesign-react';
import styles from '../index.module.less';

import image1 from 'assets/image/Case_Turkey_1.VIIRS.png';
import image2 from 'assets/image/Case_Turkey_2.SDGSAT.png';
import image3 from 'assets/image/Case_Turkey_3.VIIRS.png';
import image4 from 'assets/image/Case_Turkey_4.Antakya.png';

const TurkeySyriaEqCard = () => (
  <Card
    title='Türkiye/Syria Earthquake'
    className={styles.welcome}
    bordered={false}
    description={
      <>
        <p>
          Türkiye is located on the highly seismically active Anatolian plate. From 1900 to 2023, Türkiye has
          experienced 269 earthquakes which caused severe loss of lives and economic damage. On February 6, 2023,
          earthquakes struck Türkiye. The earthquakes hit Pazarcık(Mw 7.7) at 04:17 local time and hit (Mw 7.6) at local
          local time. On February 20 2023, the other earthquake with a magnitude of 6.4 struck Hatay again. It’s
          earthquakes in February greatly impacted 11 provinces in Türkiye which totally have a population of 14,013,196
          contributed by 16.4% to the national demographic in 2022.
        </p>
        <p>
          Wuhan University collaborated with the United Nations Satellite Centre and published two reports based
          night-time light data totally in responding to the earthquake. In the reports, the damage of the earthquake
          was examined by night-time light loss and the recovery of different cities after the earthquake was examined
          by night-time light recovery sector. The findings of this analysis have been published as part of the
          emergency response on the official UNOSAT website.
        </p>
        <p>
          <b style={{ color: '#c64751' }}>Light loss assessment</b>
        </p>
        <p>
          After the earthquake, Türkiye entered a state of emergency to enable expeditious search and rescue and
          post-disaster activities. It’s significant to find and map the earthquake hazard in Türkiye and Syria.
          night-time light, Wuhan University and the United Nations Satellite Centre worked together to assess the
          disaster damage in response to the emergency needs.
        </p>
        <p>
          Using VIIRS VNP46A1 data and high-resolution images, a visual comparison analysis of night-time light
          conditions before and after the earthquake was conducted. Employing VIIRS VNP46A2 data and high-resolution
          data, perform quantitative calculations to determine the percentage of light loss in cities potentially
          affected by the disaster.
        </p>
        <div>
          <Image
            alt=''
            src={image1}
            fit='contain'
            style={{ width: '630px', height: '210px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>VIIRS Imagery Before and After</div>
        </div>
        <div>
          <Image
            alt=''
            src={image2}
            fit='contain'
            style={{ width: '640px', height: '218px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>High-resolution Imagery Before and After</div>
        </div>
        <div>
          <Image
            alt=''
            src={image3}
            fit='contain'
            style={{ width: '540px', height: '268px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>Percentage of Light Loss</div>
        </div>
        <p>
          In the aftermath of a disaster period, it’s crucial to rapidly identify and map regions suffered severe
          disaster loss to support emergency relief. This report finds that Provinces with major light loss are
          Kahramanmaras and Adiyaman as observed on 8 February 2023; The power outage areas are mainly distributed along
          the plate junction of Kahramanmaras and Antakya; Many urban areas located in EQ affected areas became darker
          after the earthquake.
        </p>
        <span>
          <b>Users: UNHCR UNOCHA</b>
        </span>
        <br />
        <span>
          Access to the report is : <Link theme='primary'>https://www.unosat.org/products/3497</Link>
        </span>
        <p>
          <b style={{ color: '#c64751' }}>Power supply recovery assessment</b>
        </p>
        <p>
          After the earthquakes happened on February 6, another earthquake hit Hatay about 14 days later which
          additional challenges to the recovery process. The government and other organizations announced reconstruction
          plans based on the “leave no one behind” principle of the Sustainable Development Goals (SDGs). To evaluate
          the recovery process in some disaster affected cities, Wuhan University and United Nations Satellite Centre
          contributed together to finish the power supply recovery report.
        </p>
        <p>
          The power recovery analysis used both VIIRS and high-resolution night-time light data. Using high resolution
          data, a visual comparison analysis of night-time light before and after the earthquake was conducted, with
          particular emphasis on incorporating recovery maps. An important part of the analysis is the real recovery
          process of each city. A time-series analysis was performed using angle-corrected and gap-filled night-time
          data, capturing changes over time and providing valuable insights into post-earthquake recovery efforts. In
          Antakya, significant power outages and recovery were observed after two earthquakes on 6 Feb and 20 Feb, but
          the power had not returned to normal level by 5 April.
        </p>
        <div>
          <Image
            alt=''
            src={image4}
            fit='contain'
            style={{ width: '480px', height: '240px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>Changes of Night-time Light, Antakya</div>
        </div>
        <p>
          During the recovery phase, measures of recovery and reconstruction are needed to provide crucial support aid
          organizations and authorities involved in the relief efforts. Based on night-time light imagery after the
          earthquake, we found that the earthquake shock was more severe in Hatay province. Typical cities include
          Antakya, Kirikhan and Samandag; Recovery progress varies across different cities. Power supply in Antakya has
          not yet returned to pre-earthquake level by 5 April 2023; The power supply in Antakya, Samandag and Kirikhan
          has two noticeable drops after earthquakes hit on 6 February 6 and 20 February.
        </p>
        <>
          <span>
            <b>Users: UNHCR UNOCHA</b>
          </span>
          <br />
          <span>
            Access to the report is: <Link theme='primary'>https://www.unosat.org/products/3565</Link>
          </span>
        </>
      </>
    }
  ></Card>
);

export default memo(TurkeySyriaEqCard);
