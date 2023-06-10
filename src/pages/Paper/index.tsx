import React, { memo } from 'react';
import { Row, Col, Button, List, Card, Space } from 'tdesign-react';
import { DownloadIcon, EditIcon, IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';

import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const Paper: React.FC<BrowserRouterProps> = () => {
  const listData = [
    {
      title:
        'JIA M., LI X., GONG Y., et al. Estimating natural disaster loss using improved daily night-time light data [J]. International Journal of Applied Earth Observation and Geoinformation, 2023, 120:103359. https://doi.org/10.1016/j.jag.2023.103359',
      description:
        'The angular normalization algorithm developed by this study can generate a stable time series of night-time light data with less fluctuation. The improved daily night-time light data provided a highly accurate estimate of power outage, a proxy of economic loss, after natural disasters.',
    },
    {
      title:
        'SHAO Z., LI X.. Multi-scale estimation of poverty rate using night-time light imagery [J]. International Journal of Applied Earth Observation and Geoinformation, 2023, 121:103375. https://doi.org/10.1016/j.jag.2023.103375',
      description:
        'A multi-scale poverty rate estimation model was presented. This method helps to generate poverty rate maps with a consistent standard at each spatial level within a country. The R-Square of 0.94 as well as the overall accuracy of 85.21% for the poverty rate estimation in Mozambique demonstrated the good performance of the method.',
    },
    {
      title:
        'LI X., SHANG X. Y., ZHANG Q. L., et al. Using radiant intensity to characterize the anisotropy of satellite-derived city light at night [J]. REMOTE SENSING OF ENVIRONMENT, 2022, 271:112920. https://doi.org/10.1016/j.rse.2022.112920',
      description:
        'The mechanism behind anisotropy of satellite-observed night-time light was revealed. This finding will help to generate higher quality night-time light product and product stable time series night-time light data.',
    },
    {
      title:
        "RU Y. X., LI X., BELAY W. A.. Tracking Spatiotemporal Patterns of Rwanda's Electrification Using Multi-Temporal VIIRS Night-time Light Imagery [J]. REMOTE SENSING, 2022, 14(17). https://doi.org/10.3390/rs14174397",
      description:
        'This study analyzed the characteristics of electrification in Rwanda from 2012 to 2020 using VIIRS night-time light imagery. With increasing demand for electricity and a strong desire to achieve the Sustainable Development Goals, this study can help further investigate the electrification progress in Rwanda.',
    },
    {
      title:
        'ZHU C. J., LI X., RU Y. X.. Assessment of Socioeconomic Dynamics and Electrification Progress in Tanzania Using VIIRS Night-time Light Images [J]. REMOTE SENSING, 2022, 14(17). https://doi.org/10.3390/rs14174240',
      description:
        "This study accessed the socioeconomic dynamics in Tanzania using night-time light images from the Visible Infrared Imaging Radiometer Suite (VIIRS), providing spatiotemporal details for Tanzania's development. The findings concluded that night-time light data can effectively provide spatiotemporal details for socioeconomic dynamics in Tanzania.",
    },
  ];
  return (
    <div>
      <Row gutter={[16, 0]}>
        <Col span={6} offset={2}></Col>
        <Col span={6} offset={3}>
          <List split style={{ width: '100%' }}>
            {listData.map((item, index) => (
              <ListItem key={index} style={{ padding: '15px 25px' }}>
                <ListItemMeta title={item.title} description={item.description} />
              </ListItem>
            ))}
          </List>
        </Col>
        <Col span={6} offset={2}></Col>
      </Row>
    </div>
  );
};

export default memo(Paper);
