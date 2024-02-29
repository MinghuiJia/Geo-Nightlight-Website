import React, { memo } from 'react';
import { Row, Col, Link, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
// import image1 from 'assets/image/Background_1-ntl satellites.jpg';
import image1 from 'assets/image/FireDetectionFlow.png';

import styles from './index.module.less';

const FireDetection: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Fire detection' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            Farmers set fire to their fields to increase ash and fertility before planting seeds. This led to the
            observation of frequent and widespread field fires in these areas during sowing time on nighttime light
            images. The farmland fire pixels caused by burning fields are easily confused with the town light pixels,
            which affects the accuracy of nighttime light images in estimating socioeconomic parameters such as poverty
            rates and electricity penetration rates.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            According to the characteristics of nighttime light radiance time series, we can divide the pixels in the
            nighttime light images into farmland fire pixels, stable light pixels, and black pixels.
          </p>
          <p>
            The nighttime light radiance of farmland fire pixels on most days of the year is zero or slightly greater
            than zero, and higher radiance values only appear during the planting season. The area corresponding to
            these pixels can be considered to have experienced farmland fires, and most of the corresponding areas are
            farmland. Stable light pixels maintain a high level of nighttime light radiance throughout the year and are
            relatively stable, with most areas corresponding to these pixels being towns or roads. The nighttime light
            radiance of black pixels is close to zero and has no significant fluctuations throughout the year. The areas
            corresponding to these pixels are mostly bare land, forests, or water bodies without human activity and
            without farmland fires.
          </p>
          <p>
            In order to detect the farmland fire pixels on the nighttime light image through the random forest method,
            training samples need to be collected. First, using nighttime light images, manually collect farmland fire
            pixels, stable light pixels, and black pixels within the research area. At the same time, use surface land
            cover data to filter out pixels that match the real scene from the three types of candidate pixels. Based on
            the characteristics of nighttime light radiance time series, construct and extract multiple features for
            each filtered pixel, such as maximum nighttime light radiance, the proportion of nighttime light greater
            than the threshold, and nighttime light mutation rate. These multiple feature values were corresponding to
            pixel categories as training samples for random forest classification. Finally, after image classification,
            farmland fire pixels can be identified.
          </p>
          <p>The flowchart is shown in the following figure.</p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '550px', height: '420px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>Figure 1. The flowchart of the fire detection method.</div>
          </div>
          <span>
            <b>Data</b>
          </span>
          <p>
            Beginning in 2018, NASA released Black Marble Data, also known as VNP46 data, which is a class L3 VIIRS
            nighttime light product.
          </p>
          <p>
            The nighttime light images are sourced from the daily nighttime light product VNP46A2 and the monthly
            nighttime light product VNP46A3 in VNP46 products. The bidirectional reflection distribution function (BRDF)
            corrected radiometric image layer (DNB BRDF-Corrected NTL) in the VNP46A2 product removes the influence of
            atmosphere and moonlight, and can truly reflect the radiation intensity of surface light sources. This layer
            is used in this method to construct the nighttime light features of pixels. The All Angle Composite Snow
            Free image layer in the VNP46A3 product removes outliers in BRDF corrected radiance within a month, and is
            then averaged from the remaining values of full observation angles without snow cover. This layer is mainly
            used for sample collection in model training and accuracy testing in this method.
          </p>
          <p>
            The quality flag data comes from the Solar Zenith layer in the VNP46A1 product, the Mandatory Quality Flag
            layer and the QF Cloud Mask layer in the VNP46A2 product, which are used to filter high-quality nighttime
            light pixels. Among them, the solar zenith angle layer records the solar zenith angle at each pixel during
            image acquisition, the mandatory quality indicator layer records the retrieval quality and algorithm model
            of each pixel, and the cloud quality mask layer includes the cloud mask quality, cloud detection results,
            and confidence indicators of pixels.
          </p>
          <p>
            In addition, the land cover data is sourced from GlobeLand30 global land cover data, mainly used for model
            training.
          </p>
          <span>
            <b>Summary</b>
          </span>
          <p>
            The random forest classification method was used to classify the pixels on the night-time light image into
            farmland fire pixels, stable light pixels and black pixels with high accuracy. The proposed farmland fire
            pixel recognition and extraction method can be used to filter out the farmland fire pixels in the night-time
            light images, which helps to improve the quality of the night light images.
          </p>
          <span>
            <b>References</b>
          </span>
          <p>
            CAO Hanrui, WANG Yan, LI Xi. Detecting Farmland Fire in VIIRS Night-time Light Images[J]. Geomatics and
            Information Science of Wuhan University, 2023.
          </p>
          <span>
            Download Paper:{' '}
            <Link
              theme='primary'
              href='http://43.154.234.176/json/Fire.pdf'
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

export default memo(FireDetection);
