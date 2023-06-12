import React, { memo } from 'react';
import { Row, Col, List, Card, Image, Tag } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import image1 from 'assets/image/Background_1-ntl satellites.jpg';
import image2 from 'assets/image/Background_2-lj1 of yuegangao.jpg';
import image3 from 'assets/image/Background_3-newyork ntl 24h timeseries images.gif';
import image4 from 'assets/image/Background_4-Nighttime light changes during the war in Syria.gif';

import styles from './index.module.less';

const User: React.FC<BrowserRouterProps> = () => {
  return (
    <div>
      <Row gutter={[16, 0]}>
        <Col span={6} offset={1}></Col>
        <Col span={6} offset={3}>
          <Card className={styles.welcome} bordered={false}>
            <Row justify='space-between'>
              <Col className={styles.name}>
                <p>
                  Night-time light remote sensing utilizes remote sensing techniques to observe and analyze artificial
                  lights at night, offers valuable insights into human activities, urbanization patterns, economic
                  development, and environmental changes.
                </p>
                <p>
                  The availability of satellites equipped with specialized sensors capable of detecting low-light
                  emissions has revolutionized the way people view the earth. These sensors capture data on the
                  intensity, distribution, and temporal variations of artificial lights across vast areas of the Earth's
                  surface.
                </p>
                <div>
                  <Image
                    alt=''
                    src={image1}
                    fit='contain'
                    style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
                  />
                  <div style={{ textAlign: 'center' }}>Representative Night-time Light Satellites</div>
                </div>
                <p>
                  One of the primary applications of night-time light remote sensing is the assessment of urbanization
                  dynamics. As cities expand and develop, their night-time lights intensify and expand spatially. By
                  monitoring changes in these lights over time, people can track the growth of urban areas, identify
                  patterns of urban sprawl, and evaluate the effectiveness of urban planning and development policies.
                </p>
                <div>
                  <Image
                    alt=''
                    src={image2}
                    fit='cover'
                    style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
                  />
                  <div style={{ textAlign: 'center' }}>Luojia-1 Imagery, The Greater Bay Area</div>
                </div>
                <p>
                  Night-time light remote sensing also plays a significant role in monitoring economic activity. The
                  intensity of night-time lights often correlates with economic indicators such as gross domestic
                  product (GDP), industrial production, and energy consumption.
                </p>
                <div>
                  <Image
                    alt=''
                    src={image3}
                    fit='cover'
                    style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
                  />
                  <div style={{ textAlign: 'center' }}>New York Metropolis at Night</div>
                </div>
                <p>
                  In addition to urbanization, economics, and the environment, night-time light remote sensing has found
                  applications in various other fields. It aids in disaster management by assessing the extent of power
                  outages during natural disasters and monitoring post-disaster recovery efforts. It contributes to
                  public health studies by analyzing the relationship between night-time lights and the prevalence of
                  certain diseases. It assists in monitoring humanitarian disasters caused by war conflicts.
                </p>
                <div>
                  <Image
                    alt=''
                    src={image4}
                    fit='cover'
                    style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
                  />
                  <div style={{ textAlign: 'center' }}>Night-time Light Changes during the War in Syria</div>
                </div>
                <p>
                  In conclusion, night-time light provides valuable insights into urbanization dynamics, economic
                  activity, environmental changes, and various socio-economic factors. As technology continues to
                  advance, night-time light remote sensing is expected to play an increasingly vital role in
                  understanding and managing our ever-changing world.
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={3} offset={1}></Col>
      </Row>
    </div>
  );
};

export default memo(User);
