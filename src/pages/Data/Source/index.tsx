import React, { memo } from 'react';
import { Card, Col, Row, Image, Link } from 'tdesign-react';
import styles from '../index.module.less';

import image1 from 'assets/image/Data_1-Mexico_City.jpg';
import image2 from 'assets/image/Data_2-Cities_NDUI.jpg';
import image3 from 'assets/image/Data_3-BlackMarble_2016_3km.jpg';
import image4 from 'assets/image/Data_4-Washington.jpg';
import image5 from 'assets/image/Data_5-Athens.jpg';
import image6 from 'assets/image/Data_6-Algiers（P）.jpg';
import image7 from 'assets/image/Data_7-Algiers(RGB).jpg';
import image8 from 'assets/image/Data_8-Dubai.jpeg';

const DataSource = () => (
  <div>
    <Card
      title='NOAA DMSP/OLS Product'
      className={styles.welcome}
      description={
        <>
          Since the mid-1960's, when the Department of Defense (DoD) initiated the Defense Meteorological Satellite
          Program (DMSP), low, earth-orbiting satellites have provided the military with important environmental
          information. Each DMSP satellite has a 101 minute, sun-synchronous near-polar orbit at an altitude of 830 km
          km above the surface of the earth, and provides global coverage twice per day. The visible and infrared
          sensors (OLS) was originally designed to capture the faint moonlight reflected by night-time clouds, in order
          order to obtain information on the distribution of night-time clouds. However, scientists unexpectedly
          discovered that DMSP/OLS can capture the luminescence of night-time towns and other areas in the absence of
          clouds. The National Oceanic and Atmospheric Administration (NOAA) released the annual synthetic stable
          night-time light data from 1992 to 2013 with a 30 arc-second spatial resolution, which is still one of the
          most widely used night light remote sensing data.
        </>
      }
      cover={
        <div>
          <Image
            alt=''
            src={image1}
            fit='contain'
            style={{ width: '450px', height: '280px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>DMSP/OLS Imagery, Mexico</div>
        </div>
      }
      bordered={false}
      footer={
        <span>
          Download: <Link theme='primary'>https://eogdata.mines.edu/products/dmsp/</Link>
        </span>
      }
    ></Card>
    <Card
      title='30 m-scale Annual Global Normalized Difference Urban Index Datasets'
      className={styles.welcome}
      bordered={false}
      description={
        <>
          Program/Operational Line Scan System (DMSP/OLS) night-light (NTL) imagery contributes powerfully to the
          spatial characterization of global cities, however, its application potential is seriously limited by its
          coarse resolution. Normalized Difference Urban Index (NDUI) is combined with cloud shadow-free Landsat
          Normalized Difference Vegetation Index (NDVI) composite and DMSP/OLS Night Time Light (NTL) to characterize
          global urban areas at a 30 m resolution, and it can greatly enhance urban areas, which can then be easily
          distinguished from bare lands including fallows and deserts. With the capability to delineate urban boundaries
          and, at the same time, to present sufficient spatial details within urban areas, the NDUI has the potential
          for urbanization studies at regional and global scales, which was proposed by Professor Qingling Zhang from
          Sun Yat-sen University.
        </>
      }
      cover={
        <div>
          <Image
            alt=''
            src={image2}
            fit='contain'
            style={{ width: '460px', height: '380px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>Normalized Difference Urban Index Composite</div>
        </div>
      }
      footer={
        <span>
          Download: <Link theme='primary'>https://www.scidb.cn/en/cstr/31253.11.sciencedb.01625</Link>
        </span>
      }
    ></Card>
    <Card
      title='NASA Black Marble Product'
      className={styles.welcome}
      bordered={false}
      description={
        <>
          The Day/Night Band (DNB) sensor of the Visible Infrared Imaging Radiometer Suite (VIIRS), on-board the
          Suomi-National Polar-orbiting Partnership (S-NPP), provides global daily measurements of nocturnal visible and
          and near-infrared (NIR) light that are suitable for Earth system science and applications studies. To realize
          realize the full potential of the VIIRS DNB time series record, NASA has developed a new suite of standard
          products that represent the current state-of-the-art in night-time lights (NTL) applications, NASA’s Black
          Marble product suite (VNP46). NASA's Black Marble night-time lights product, at 15 arc-second spatial
          resolution, is available from January 2012-present with data from the VIIRS DNB sensor. The VNP46 product
          suite includes the daily at-sensor top of atmosphere (TOA) night-time lights (NTL) product (VNP46A1), the
          daily moonlight-adjusted night-time lights product (VNP46A2), the monthly moonlight-adjusted night-time lights
          lights product (VNP46A3), and the yearly moonlight-adjusted night-time lights product (VNP46A4).
        </>
      }
      cover={
        <div>
          <Image
            alt=''
            src={image3}
            fit='contain'
            style={{ width: '480px', height: '240px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>Black Marble Imagery in 2016</div>
        </div>
      }
      footer={
        <>
          <span>
            Product Homepage:{' '}
            <Link theme='primary'>https://viirsland.gsfc.nasa.gov/Products/NASA/BlackMarble.html</Link>
          </span>
          <br />
          <span>
            Download: <Link theme='primary'>https://eogdata.mines.edu/products/dmsp/</Link>
          </span>
        </>
      }
    ></Card>
    <Card
      title='Qimingxing-1 Night-time Light Datasets'
      className={styles.welcome}
      bordered={false}
      description={
        <>
          Qimingxing-1 (QMX-1), launched on 27 February 2022, is the first student-centered satellite developed by Wuhan
          Wuhan University, equipped with visible light camera and infrared camera, making it possible to obtain daytime
          daytime hyperspectral imagery (32 spectral bands), night-time light imagery (8 spectral bands) and infrared
          infrared imagery. QMX-1 can obtain high-resolution night-time light images, with a spatial resolution of up to
          21 m and a swath of approximately 107 km. The revisit period of QMX-1 is about 11 days, and the night-time
          transit time is 22:30 local time. As the first visible-light hyperspectral and night-light multispectral
          on-orbit programmable remote sensing satellite in China, the design life of QMX-1 is one year. After task
          scheduling, instruction annotation, data reception, data decoding, radiometric correction and geometric
          correction, satellite research and development team successfully obtained remote sensing image products.
        </>
      }
      cover={
        <>
          <Row justify='center'>
            <Col>
              <Image
                alt=''
                src={image4}
                fit='contain'
                style={{ width: '320px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
              />
            </Col>
            <Col>
              <Image
                alt=''
                src={image5}
                fit='contain'
                style={{ width: '320px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
              />
            </Col>
          </Row>
          <div style={{ textAlign: 'center' }}>QMX-1 Imagery, Washington D.C. and Athens</div>
        </>
      }
      footer={
        <>
          <span>
            Product Homepage: <Link theme='primary'>http://qmx.whu.edu.cn/wxjs.htm</Link>
          </span>
          <br />
          <span>
            Download: <Link theme='primary'>http://qmx.whu.edu.cn/sjfw.htm</Link>
          </span>
        </>
      }
    ></Card>
    <Card
      title='SDGSAT-1 Satellite’s Glimmer Imager Product'
      className={styles.welcome}
      bordered={false}
      description={
        <>
          The Sustainable Development Science Satellite 1 (SDGSAT-1) is the first scientific satellite dedicated to
          serving the United Nations 2030 Agenda for Sustainable Development, and it is also the first Earth science
          satellite of the Chinese Academy of Sciences, which is launched successfully into orbit on 5 November 2021.
          2021. Tailored to the needs of monitoring and evaluating indicators related to global SDGs, SDGSAT-1 is
          equipped with three optical imagers, among which the low-light-level imager, Glimmer Imager for Urbanization
          (GIU), can obtain the night-time light images. SDGSAT-1 flies in a sun-synchronous orbit at an altitude of 505
          km and inclination angle of 97.5°, resulting in a spatial resolution of 10 m for the GIU, which allows
          SDGSAT-1 to cover the globe in eleven days.
        </>
      }
      cover={
        <>
          <Row justify='center'>
            <Col>
              <Image
                alt=''
                src={image6}
                fit='contain'
                style={{ width: 300, height: 180, backgroundColor: '#fff', margin: '0 auto' }}
              />
            </Col>
            <Col>
              <Image
                alt=''
                src={image7}
                fit='contain'
                style={{ width: 300, height: 180, backgroundColor: '#fff', margin: '0 auto' }}
              />
            </Col>
          </Row>
          <div style={{ textAlign: 'center' }}>
            SDGSAT-1 Imagery, Algiers <br />
            left: panchromatic band image; right: multispectral image
          </div>
        </>
      }
      footer={
        <>
          <span>
            Product Homepage: <Link theme='primary'>https://www.sdgsat.ac.cn/satellite/data</Link>
          </span>
          <br />
          <span>
            Download: <Link theme='primary'>https://data.sdgsat.ac.cn/dataQuery</Link>
          </span>
        </>
      }
    ></Card>

    <Card
      title='Yangwang-1 Night-time Light Product'
      className={styles.welcome}
      bordered={false}
      description={
        <>
          Launched successfully in June 2021, Yangwang-1 (“Look Up 1”) is China's first visible/UV light space
          telescope, and is currently the only large-field ultraviolet space probe in orbit around the world. Yangwang-1
          uses visible and ultraviolet observations to detect near-Earth asteroids and perform astronomical observation,
          asteroid observation, and space debris observation etc.. At the same time, it has both night-time remote
          sensing monitoring capabilities by tuning its camera to target the ground. The spatial resolution of the
          night-time light satellite images obtained has reached less than 30 meters, which provides compelling
          night-time remote sensing data for worldwide demand.
        </>
      }
      cover={
        <div>
          <Image
            alt=''
            src={image8}
            fit='contain'
            style={{ width: '480px', height: '220px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <div style={{ textAlign: 'center' }}>Yangwang-1 Imagery, United Arab Emirates</div>
        </div>
      }
      footer={
        <span>
          Product Homepage: <Link theme='primary'>https://www.origin.space/solution_data.html</Link>
        </span>
      }
    ></Card>
  </div>
);

export default memo(DataSource);
