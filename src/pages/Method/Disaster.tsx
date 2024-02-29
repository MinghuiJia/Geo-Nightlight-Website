import React, { memo } from 'react';
import { Row, Col, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
// import image1 from 'assets/image/Background_1-ntl satellites.jpg';
import image1 from 'assets/image/DisasterFlow.png';
import image2 from 'assets/image/DisasterFormat1.png';

import styles from './index.module.less';

const Disaster: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Natural disaster economic loss estimation' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            Natural disasters are one of the global problems facing human society today. Especially in recent years,
            against the backdrop of global climate change, natural disasters have occurred frequently in various regions
            of the world, causing serious economic losses and human casualties while bringing about ecological damage.
            Therefore, rapid assessment of economic losses caused by natural disasters is of great significance for
            disaster prevention and mitigation as well as stable economic and social operation. We developed a natural
            disaster economic loss estimation model based on night-light remote sensing images, using which we can
            estimate the economic loss caused by natural disasters.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            In the process of model development, we mainly used the VIIRS luminous remote sensing data and natural
            disaster data. The whole process mainly includes the following steps:
          </p>
          <p>
            1) Collecting data on natural disasters. We extracted the three types of major floods, earthquakes, and
            typhoons in the member countries of the Organization for Economic Co-operation and Development (OECD) for
            the period of 2012-2020 from the disasters database, and on the basis of which we further screened out the
            earthquakes of magnitude 6 or higher and the floods and typhoons with more than 20 deaths, to get the data
            and information of major natural disasters.
          </p>
          <p>
            2) Using night-light remote sensing imagery to identify the affected areas and calculate the light loss in
            the affected areas (as shown in Fig. 1).
          </p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '550px', height: '420px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>Figure 1. Flowchart for the identification of affected areas.</div>
          </div>
          <p>
            We use a time series approach to detect the affected pixels in the area, and take the pixel as the unit of
            study, organize the pre-disaster high quality data of the pixel into a time series, and apply the ARIMA
            machine learning method to fit the pre-disaster time series. After data fitting ARIMA method can perform
            one-step prediction to get the light value at the next moment and give the upper and lower bounds of
            different confidence intervals. Then, the pixels whose actual post-disaster light values are lower than the
            lower bound of the confidence intervals are determined as affected pixels. The set of all affected pixels is
            the actual affected area. After identifying the affected area, we can sum up the light values of the
            pre-disaster pixels and post-disaster pixels in the affected area, and then subtract the total post-disaster
            light value from the sum of pre-disaster light value in the affected area to get the light loss caused by
            the disaster.
          </p>
          <p>
            3) Constructing the natural disaster economic loss estimation model. Based on the unique identification code
            of the disaster, we match the data of the light loss value of the disaster affected area with the relevant
            statistics of the disaster (including the indicators of the type of disaster, disaster economic loss and
            deaths) to get the sample for model construction. Then, we set the estimation model as follows:
          </p>
          <Image
            alt=''
            src={image2}
            fit='contain'
            style={{ width: '250px', height: '30px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <p>
            i denotes the affected area, GDP_loss is the officially reported economic loss of the disaster, and NTL_loss
            is the value of light loss in the affected area. x is a set of control variables, mainly including
            indicators such as the type of disaster and the number of deaths, and ε
            <span style={{ fontSize: '8px' }}>i</span> is the random error term. Using model, we use the Ordinary Least
            Square (OLS) method to regress the sample data, which can lead to the parameters in the model.
          </p>
          <p>
            Therefore, after obtaining the relevant parameters in the model, we can use it to estimate the economic
            losses caused by natural disasters. Specifically, by inputting the value of light loss in the affected area,
            we can use model to estimate the economic losses caused by natural disasters.
          </p>
        </Col>
      </Row>
    </Card>
  </div>
);

export default memo(Disaster);
