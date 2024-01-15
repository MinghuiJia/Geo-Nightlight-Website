import React, { memo } from 'react';
import { Card, Link } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import styles from '../index.module.less';

const About: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card className={styles.welcome} bordered={false}>
      <p>
        GEO Night Light is the abbreviation of Night-Time Light Remote Sensing for Sustainable Development Goals, which
        which is a project of Group on Earth Observations (GEO). In 2019, GEO Night Light was listed as a Community
        Community Activity under GEO Work Programme 2020-2022, and then it was listed as a Pilot Initiative under GEO
        GEO Work Programme 2023-2025.
      </p>
      <p>
        Satellite-observed night light images are able to reflect spatiotemporal patterns of socioeconomic dynamics
        dynamics especially for the regions where statistical data is difficult to access. GEO Night Light focuses on
        several socioeconomic dimensions such as poverty, electrification, regional inequality, urbanization and and
        light pollution as well as emergency mapping activities using night-time light imagery combined with other
        satellite/GIS data sources.
      </p>
      <p>
        Currently, the participant GEO members of this project includes China, United Nations Satellite Centre (UNOSAT)
        and Uzbekistan. The engaged institutes are Wuhan University, United Nations Satellite Centre (UNOSAT), Sun
        Yat-sen University and Uzbekistan Space Agency.
      </p>
      <span>
        GEO Work Programme 2023-2025: <Link theme='primary'>https://earthobservations.org/geo_wp_23_25.php</Link>
      </span>
    </Card>
  </div>
);

export default memo(About);
