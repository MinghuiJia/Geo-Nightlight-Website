import React, { memo } from 'react';
import { Row, Col, Link, Card, Image } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import image1 from 'assets/image/PovertyFlow.png';
import styles from './index.module.less';

const Poverty: React.FC<BrowserRouterProps> = () => (
  <div>
    <Card title='Poverty rate estimation' className={styles.welcome} bordered={false}>
      <Row justify='space-between'>
        <Col className={styles.name}>
          <span>
            <b>Background</b>
          </span>
          <p>
            Explicit poverty data are critical for policymaking and targeting humanitarian aid. Poverty rate is the most
            widely accepted definition of a poverty status. However, poverty rate data are commonly available at
            country-level. Here, we proposed an approach that estimates the poverty rate at national and sub-national
            level.
          </p>
          <span>
            <b>Principles and Methods</b>
          </span>
          <p>
            The methodology is divided into two parts. First, due to the need to obtain ground truth information, we
            trained the model with the household-cluster-level surveyed wealth index and the features extracted from the
            remote sensing data. Taking advantage of the wide coverage of remote sensing data, a grid-scale wealth index
            map covering the entire study area was generated. Second, since the wealth index itself is not the target
            indicator we need, we used the poverty rate data at the country-level to find the relationship between the
            wealth index and the poverty rate. In this way, each grid was assigned a country-level poverty evaluation
            standard. When we aggregated grids to other spatial scales, this poverty rate evaluation standard will also
            be transferred to different spatial scales.
          </p>
          <p>
            <b>1 Wealth index mapping</b>
          </p>
          <p>
            <b>1.1 Feature extraction</b>
          </p>
          <p>
            Multiple features were extracted from remote sensing data by the basic grid at 10 km resolution as
            independent variables of the machine learning model.
          </p>
          <p>
            We extracted the indicators through the multi-angle NTL composite (VNP46A4 composite 2015). The indicators
            include Grid Total Light Index (GTLI) and Grid Average Light Index (GALI).The land cover represents the
            coverage type of land surface, such as urban, agriculture, water, and forest, which reflects the quality of
            the living environment of the household. The proportion of each land cover type within the basic grid was
            computed from Land Cover Map 2015.
          </p>
          <p>
            <b>1.2 The random forest regression model</b>
          </p>
          <p>
            RFR package for Python was used to construct the RFR model. In this study, the datasets used to develop the
            model were represented by a matrix, where the rows were samples of the individual grid, and columns were
            various variables corresponding to each of these instances. We used features extracted from remote sensing
            data within the grid as independent variables (X) and used surveyed WI as a dependent variable (Y) to
            develop the RFR model. The model was trained to learn the dependency between X and Y. Thus, when we input
            another set of features, we could get the predicted WI by fitting the trained model.
          </p>
          <p>
            2) Angular normalization. The angular normalization algorithm is to remove the observed night-time light
            radiance derived from changes of Viewing Zenith Angle (VZA), and estimate the radiance time series assuming
            that VZA is equal to zero over time. This model decomposes the satellite-observed time series radiance
            dynamic into two components, the real light emission changes which are represented by the radiance at VZA of
            zero, and the VZA-change-derived radiance observation due to the anisotropy. Ultimately, this leads to
            acquiring the night-time light radiance time series after the elimination of the angular effects.
          </p>
          <p>
            3) Gap-filling the missed data. After obtaining the angle-normalized time series, the additive time series
            model named Prophet is used to gap-filling the missing data which makes the time series more complete. We
            use the real observation data to fit the time series, and only fill in the fitted values of night-time light
            radiance at the missing moments thereby completing the time series gap-filling.
          </p>
          <p>
            <b>2 Estimate province-level poverty rate</b>
          </p>
          <p>
            To understand poverty, it is critical to identify the poor and access the number of poor. Since the wealth
            index is a measure of wealth and poverty from a multidimensional perspective, we decided to find the
            relationship between the wealth index and the poverty rate defined from a multidimensional view. LandScan
            population distribution data provide accurate estimates of population counts. To sum up all population
            pixels within the grid, the number of populations corresponding to the basic grid was constructed. We
            matched the population counts to the wealth index on the grid. The country-level poverty rate was used to
            obtain the relationship between the poverty rate and the wealth index. This is because we believe
            country-level poverty rate data provide a reliable and accurate measure of poverty, which is normally
            published by the government, international institutions, or internationally recognized aid groups.
          </p>
          <p>
            We plotted the cumulative distribution of the estimated poverty rate at country-level on the vertical axis
            and the continuous wealth index on the horizontal axis (Fig. 3). For each point of the curve, the
            dichotomous variable is the corresponding wealth index. The grid whose wealth index is lower than the
            dichotomous variable value will be identified as a poor grid, the population of this grid is considered
            poor. By summing all population counts of poor grids of the country, the poverty headcount corresponding to
            this dichotomous variable value was derived. Poverty rate is defined as the proportion of poverty headcount
            of all populations. For a specific country, we used the country-level statistical poverty rate to find the
            matching dichotomous variable value by applying the cumulative distribution function.
          </p>
          <p>
            The critical value of dichotomization represents the relationship between the poverty rate and the wealth
            index. If the grid&apos;s predicted WI value is below the critical value, it will be classified as poor. All
            poor grids are aggregated at the province-level to obtain the estimated province-level poverty rate.
          </p>
          <div>
            <Image
              alt=''
              src={image1}
              fit='contain'
              style={{ width: '1050px', height: '920px', backgroundColor: '#fff', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center' }}>Figure 1. The flowchart of the poverty rate estimation method.</div>
          </div>
          <span>
            <b>Data</b>
          </span>
          <p>
            Including statistical data and remote sensing data. For statistical data, the DHS household survey data are
            used to establish the poverty rate estimation model, the national statistical data are used to validate the
            accuracy of the model. For remote sensing data, we introduce multi-source data including multi-angle
            night-time light data, land cover data, and Landscan population distribution data to extract the input
            features for the poverty rate estimation model.
          </p>
          <span>
            <b>Summary</b>
          </span>
          <p>
            This study proposed a poverty rate estimation model, using publicly available and timely updated
            multi-source remote sensing data combining household survey data and national statistical data. The R-Square
            of 0.94 as well as the overall accuracy of 85.21% for the poverty rate estimation in Mozambique demonstrated
            that we created a highly accurate poverty rate estimation method.
          </p>
          <span>
            <b>References</b>
          </span>
          <p>
            Shao Z, Li X. Multi-scale estimation of poverty rate using night-time light imagery[J]. International
            Journal of Applied Earth Observation and Geoinformation, 2023, 121: 103375.
          </p>
          <span>
            Download Paper:{' '}
            <Link
              theme='primary'
              href='http://43.154.234.176/json/Poverty.pdf'
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

export default memo(Poverty);
