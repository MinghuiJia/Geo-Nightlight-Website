import React, { memo } from 'react';
import { Row, Col, Link, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
// import image1 from 'assets/image/Background_1-ntl satellites.jpg';
import image1 from 'assets/image/GDPFlow.png';
import image2 from 'assets/image/GDPFormat1.png';

import styles from './index.module.less';

const GDP: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Per Capita GDP growth rate estimation' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            The accuracy of GDP per capita growth rate in countries with low statistical capacity has been questioned,
            which hinders understanding progress of Sustainable Development Goals (SDGs) accurately. We aim to estimate
            GDP per capita growth rate in countries with poor statistical quality.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            A large number of studies directly draw lessons from the method of Henderson, Storeygard, and Weil (2012) to
            reassess the GDP of various countries, which will lead to two problems: First, there is a lack of estimable
            judgment criteria for the model, and the model’s generalizability cannot be assessed; Second, subjective
            weighting may lead to systematic bias in results. Thus, we build an econometric model with processed Visible
            Infrared Imaging Radiometer (VIIRS) night-time light data and other economic variables. The key innovation
            of this method is that it eliminates the influence of subjective judgment in a data-driven way.
            Specifically, we use the two-way fixed effect model, which includes both the country fixed effects and year
            fixed effects. Combining the information contained in the night-time light and economic variables to more
            accurately measure the real GDP growth, the regression equation used is as follows:
          </p>
          <Image
            alt=''
            src={image2}
            fit='contain'
            style={{ width: '450px', height: '30px', backgroundColor: '#fff', margin: '0 auto' }}
          />
          <p>
            In order to obtain an appropriate algorithm, we put lnOGDP<span style={{ fontSize: '8px' }}>i,t</span> on
            the left side of the equation, and take the logarithm of the official GDP for country i in year t as the
            true value. lnSGDP<span style={{ fontSize: '8px' }}>i,t</span> is the log simulated GDP, lnTNL
            <span style={{ fontSize: '8px' }}>i,t</span> is the logarithmic of total night-time light, β reflects the
            degree of correlation between them, Controls<span style={{ fontSize: '8px' }}>i,t</span> is a series of
            national economic variables, which can exclude other factors affecting economic development and night-time
            light. The economic variables include: log of mobile service subscribers, log of population density, log of
            urbanization rate. γ<span style={{ fontSize: '8px' }}>i</span> and δ
            <span style={{ fontSize: '8px' }}>t</span> are country-fixed effects and year-fixed effects respectively. ε
            <span style={{ fontSize: '8px' }}>i,t</span> is a random error term.
          </p>
          <p>
            And we further assesses the accuracy of the model by comparing the estimated GDP growth to high-quality
            economic data from Organization for Economic Co-operation and Development (OECD) countries between 2014 and
            2018. First, due to the abnormal fluctuations in the time series generated from yearly composite night-time
            light images, we propose a trend analysis method for the monthly night-time light data to synthesize a more
            stable yearly time series.
          </p>
          <p>
            Then, we construct artificially low-quality GDP simulations, and combine VIIRS data and official statistics
            data to construct regression models to correct the simulated GDP. As is shown in Figure 1, we determine the
            official GDP of each OECD country as high quality statistical data and add noise to simulate the GDP of
            countries with low statistical capacity. And then, we can build an estimation model by combining night-time
            light with other economic control variables to obtain the estimated GDP.
          </p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '450px', height: '320px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>Figure 1. Flow chart of the GDP estimation implementation.</div>
          </div>
          <p>
            Finally, to assess the model accuracy, we compare its estimates of GDP per capita growth rates to official
            data from high-quality OECD countries, looking for any deviations. We use leave-one-out cross validation
            (LOOCV) to assess the econometric model’s accuracy. We divide the 22 OECD countries into two groups for a
            total of 22 estimations, drawing one OECD country as the test set sequentially and the remaining 21
            countries as the training set. Specifically, in the first step, considering the small sample size and the
            statistical significance, we randomly generate simulated noise 100 times, which follows the Gaussian
            distribution. And the regression is performed on the training samples to obtain the weights of night-time
            light and simulated GDP, respectively. In the second step, in order to test the accuracy of the model, we
            apply the model parameters obtained in the training set regression to the test set and further calculate the
            estimated GDP per capita growth that is used extensively in this paper, as the first difference of the
            logarithm of the GDP divided by population between adjacent years in the test set (Hu and Yao 2022). In the
            third step, using the official OECD data of the test set country as the benchmark, we calculate the
            deviation between the estimated data and the official data to assess the model’s accuracy.
          </p>
          <span>
            <b>Summary</b>
          </span>
          <p>
            To sum up, by using economic and night-time light variables of OECD countries from 2014-2018, we illuminate
            national accounts GDP per capita growth to test the validity of NTL for economic research which provides a
            new measurement for achievements of SDGs. We first use data simulation to generate low-quality GDP data, and
            further expand a model based on Henderson, Storeygard, and Weil (2012) to construct a more accurate measure
            of GDP per capita growth by combining simulated GDP and improved night-time light data. Finally, we assess
            the model accuracy by comparing the estimated values with the official reported data under different noise
            levels.
          </p>
          <span>
            <b>References</b>
          </span>
          <p>
            Yu, Tiantian, Yongwei Ye, and Ziying Fan. &quot;Estimating GDP growth using VIIRS night-time light
            data.&quot; International Journal of Remote Sensing (2023): 1-20.
          </p>
          <span>
            Download Paper:{' '}
            <Link
              theme='primary'
              href='http://43.154.234.176/json/GDP.pdf'
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

export default memo(GDP);
