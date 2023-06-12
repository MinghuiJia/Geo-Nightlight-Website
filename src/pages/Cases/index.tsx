import React, { memo } from 'react';
import { Card, Col, Row, Image, Link } from 'tdesign-react';
import styles from './index.module.less';

import image1 from 'assets/image/Case_Turkey_1.VIIRS.png';
import image2 from 'assets/image/Case_Turkey_2.SDGSAT.png';
import image3 from 'assets/image/Case_Turkey_3.VIIRS.png';
import image4 from 'assets/image/Case_Turkey_4.Antakya.png';
import image5 from 'assets/image/Case_Menggu_1.TT矿夜光图.png';
import image6 from 'assets/image/Case_Menggu_2.TT矿谷歌地球影像.png';
import image7 from 'assets/image/Case_Menggu_3.OT矿夜光图.png';
import image8 from 'assets/image/Case_Menggu_4.OT矿谷歌地球影像.png';
import image9 from 'assets/image/Case_Sudan_1_Daytime image of Khartoum.jpg';
import image10 from 'assets/image/Case_Sudan_2_changes of the night-time light images of Khartoum.gif';

const UseCases = () => (
  <div>
    <Row gutter={[0, 0]}>
      <Col span={6} offset={2}></Col>
      <Col span={6} offset={3} xs={16} lg={16} xl={16}>
        <Card
          title='Türkiye/Syria Earthquake'
          className={styles.welcome}
          bordered={false}
          description={
            <>
              <p>
                Türkiye is located on the highly seismically active Anatolian plate. From 1900 to 2023, Türkiye has
                experienced 269 earthquakes which caused severe loss of lives and economic damage. On February 6, 2023,
                two major earthquakes struck Türkiye. The earthquakes hit Pazarcık(Mw 7.7) at 04:17 local time and hit
                Elbistan (Mw 7.6) at 13:24 local time. On February 20 2023, the other earthquake with a magnitude of 6.4
                struck Hatay again. It’s estimated that the earthquakes in February greatly impacted 11 provinces in
                Türkiye which totally have a population of 14,013,196 contributed by 16.4% to the national demographic
                in 2022.
              </p>
              <p>
                Wuhan University collaborated with the United Nations Satellite Centre and published two reports based
                on night-time light data totally in responding to the earthquake. In the reports, the damage of the
                earthquake was examined by night-time light loss and the recovery of different cities after the
                earthquake was examined by night-time light recovery sector. The findings of this analysis have been
                published as part of the emergency response on the official UNOSAT website.
              </p>
              <p>
                <b style={{ color: '#c64751' }}>Light loss assessment</b>
              </p>
              <p>
                After the earthquake, Türkiye entered a state of emergency to enable expeditious search and rescue and
                post-disaster activities. It’s significant to find and map the earthquake hazard in Türkiye and Syria.
                Based on night-time light, Wuhan University and the United Nations Satellite Centre worked together to
                assess the disaster damage in response to the emergency needs.
              </p>
              <p>
                Using VIIRS VNP46A1 data and high-resolution images, a visual comparison analysis of night-time light
                conditions before and after the earthquake was conducted. Employing VIIRS VNP46A2 data and
                high-resolution data, perform quantitative calculations to determine the percentage of light loss in
                cities potentially affected by the disaster.
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
                Hatay, Kahramanmaras and Adiyaman as observed on 8 February 2023; The power outage areas are mainly
                distributed along the plate junction of Kahramanmaras and Antakya; Many urban areas located in EQ
                affected areas became darker after the earthquake.
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
                caused additional challenges to the recovery process. The government and other organizations announced
                reconstruction plans based on the “leave no one behind” principle of the Sustainable Development Goals
                (SDGs). To evaluate the recovery process in some disaster affected cities, Wuhan University and United
                Nations Satellite Centre contributed together to finish the power supply recovery report.
              </p>
              <p>
                The power recovery analysis used both VIIRS and high-resolution night-time light data. Using high
                spatial resolution data, a visual comparison analysis of night-time light before and after the
                earthquake was conducted, with particular emphasis on incorporating recovery maps. An important part of
                the analysis is the real recovery process of each city. A time-series analysis was performed using
                angle-corrected and gap-filled night-time data, capturing changes over time and providing valuable
                insights into post-earthquake recovery efforts. In Antakya, significant power outages and recovery were
                observed after two earthquakes on 6 Feb and 20 Feb, but the power had not returned to normal level by 5
                April.
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
                During the recovery phase, measures of recovery and reconstruction are needed to provide crucial support
                to aid organizations and authorities involved in the relief efforts. Based on night-time light imagery
                after the earthquake, we found that the earthquake shock was more severe in Hatay province. Typical
                cities include Antakya, Kirikhan and Samandag; Recovery progress varies across different cities. Power
                supply in Antakya has not yet returned to pre-earthquake level by 5 April 2023; The power supply in
                Antakya, Samandag and Kirikhan has two noticeable drops after earthquakes hit on 6 February 6 and 20
                February.
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
        <Card
          title='Analysis of Mining Industry in Mongolia'
          className={styles.welcome}
          bordered={false}
          description={
            <>
              <p>
                Mongolia is one of the 29 resource-rich developing countries identified by International Monetary Fund.
                Mining is important to the national economy of Mongolia, and is the main industry of national fiscal
                revenue and foreign exchange export. Two of the largest-scale mining projects in Mongolia are the Tavan
                Tolgoi coal mine and the Oyu Tolgoi copper mine. The Tavan Tolgoi coal mine is the largest coal site in
                Mongolia. With high-grade coal deposits, it is expected to yield six billion tonnes of coal. The Oyu
                Tolgoi copper mine is regarded as the “biggest mining exploration project in the world.” When in fully
                production Oyu Tolgoi will account for more than 30% of Mongolia’s GDP, and it has the potential to
                boost the national economy by a third. Research of the mining industry in Mongolia is of great
                significance. By monitoring the night-time light brightness, night-time satellite imagery can help to
                evaluate the construction and production status of the mining industry in Mongolia.
              </p>
              <p>
                This study employed the all-angle snow-free layer in the Black Marble annual night-time light product
                (VNP46A4) from 2012 to 2021 (https://blackmarble.gsfc.nasa.gov/#product). We analyzed the night-time
                light of the Tavan Tolgoi coal mine and the Oyu Tolgoi copper mine in Mongolia.
              </p>
              <div>
                <Image
                  alt=''
                  src={image5}
                  fit='contain'
                  style={{ width: '600px', height: '200px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Night-time Light Imagery, Tavan Tolgoi Coal Mine</div>
              </div>
              <div>
                <Image
                  alt=''
                  src={image6}
                  fit='contain'
                  style={{ width: '480px', height: '240px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Daytime Satellite Imagery, Tavan Tolgoi Coal Mine</div>
              </div>
              <div>
                <Image
                  alt=''
                  src={image7}
                  fit='contain'
                  style={{ width: '480px', height: '240px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Night-time Light Imagery, Oyu Tolgoi Copper Mine</div>
              </div>
              <div>
                <Image
                  alt=''
                  src={image8}
                  fit='contain'
                  style={{ width: '480px', height: '240px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Daytime Satellite Imagery, Oyu Tolgoi Copper Mine</div>
              </div>
              <p>
                Since the night-time light emitted from the mine is often not a single lit area but many independent lit
                areas, this study separately analyzed the night-time light of each independent lit area. Through visual
                interpretation of the Tavan Tolgoi coal mine and the Oyu Tolgoi copper mine based on the satellite
                imagery provided in Google Earth, this study classified the independent lit areas into the following 3
                types: mining area, residential area, and industrial area. We calculated and tracked the temporal trend
                in the sum of light (SOL) of each type of area in Tavan Tolgoi coal mine and Oyu Tolgoi copper mine from
                2012 to 2021. The following findings were obtained from the results:
              </p>
              <p>
                The SOL of three types of areas in the Tavan Tolgoi coal mine shows a similar changing trend from 2012
                to 2021, which reflects that the development of residential areas and industrial areas has a certain
                correlation with the construction and production of the mining area; The SOL of the residential area in
                the Oyu Tolgoi Copper Mine shows an increasing trend after 2018, which indicates that the development of
                the Oyu Tolgoi copper mine attracts a large influx of people, leading to a rapid increase in night-time
                light of the surrounding residential area; The SOL of the industrial area in the Oyu Tolgoi Copper Mine
                decreases from 2012 to 2016, and increases from 2017 to 2021. After the construction of the underground
                mine of the Oyu Tolgoi copper mine started in 2016, the SOL of the industrial area increases, which
                indicates that the construction may lead to the significant increase in night-time light brightness.
              </p>
              <span>
                <b>Users: Mongolian Geospatial Association</b>
              </span>
            </>
          }
        ></Card>
        <Card
          title='Sudan Conflict'
          className={styles.welcome}
          bordered={false}
          description={
            <>
              <p>
                An armed conflict between rival factions of the military government of Sudan began on 15 April 2023,
                when clashes broke out in cities, with the fighting concentrated around the capital city of Khartoum and
                the Darfur region. As of 27 May 2023, at least 1,800 people had been killed and more than 5,100 others
                had been injured.
              </p>
              <div>
                <Image
                  alt=''
                  src={image9}
                  fit='contain'
                  style={{ width: '300px', height: '300px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Daytime Imagery, Khartoum</div>
              </div>
              <p>
                The Night-time Light Remote Sensing Group of Wuhan University use the high-resolution night-time light
                images acquired by SDGSAT-1 and Yangwang-1 satellites to continuously monitor Khartoum, the capital of
                Sudan. The images are comparable to each other after radiometric intercalibration. By comparing the
                intercalibrated night-time light images before and after the conflict, we find that the conflict causes
                serious damage to Khartoum's power facilities, nearly half of the region is out of power. The power
                outage on the east side of the Nile is more severe than that on the west side, especially the prolonged
                power outage near the airport. The work has been used by the UN Crisis Information and Operation Centre,
                and it was disseminated to other UN organizations.
              </p>
              <div>
                <Image
                  alt=''
                  src={image10}
                  fit='contain'
                  style={{ width: '300px', height: '300px', backgroundColor: '#fff', margin: '0 auto' }}
                />
                <div style={{ textAlign: 'center' }}>Changes of Night-time Light, Khartoum</div>
              </div>
              <span>
                <b>Users: UN Crisis Information and Operation Centre</b>
              </span>
            </>
          }
        ></Card>
      </Col>
      <Col span={6} offset={2}></Col>
    </Row>
  </div>
);

export default memo(UseCases);
