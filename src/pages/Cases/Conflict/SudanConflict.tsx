import React, { memo } from 'react';
import { Card, Image } from 'tdesign-react';
import styles from '../index.module.less';

import image9 from 'assets/image/Case_Sudan_1_Daytime image of Khartoum.jpg';
import image10 from 'assets/image/Case_Sudan_2_changes of the night-time light images of Khartoum.gif';

const SudanConfilctCard = () => (
  <Card
    title='Sudan Conflict'
    className={styles.welcome}
    bordered={false}
    description={
      <>
        <p>
          An armed conflict between rival factions of the military government of Sudan began on 15 April 2023, broke out
          in cities, with the fighting concentrated around the capital city of Khartoum and the Darfur region. May 2023,
          at least 1,800 people had been killed and more than 5,100 others had been injured.
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
          acquired by SDGSAT-1 and Yangwang-1 satellites to continuously monitor Khartoum, the capital of Sudan. The
          images are comparable to each other after radiometric intercalibration. By comparing the intercalibrated
          night-time light images before and after the conflict, we find that the conflict causes serious damage to
          Khartoum's power facilities, nearly half of the region is out of power. The power outage on the east side of
          the Nile is more severe than that on the west side, especially the prolonged power power outage near the
          airport. The work has been used by the UN Crisis Information and Operation Centre, and it was disseminated to
          other UN organizations.
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
);

export default memo(SudanConfilctCard);
