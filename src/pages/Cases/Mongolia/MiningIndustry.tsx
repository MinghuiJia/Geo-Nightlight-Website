import React, { memo } from 'react';
import { Card, Image } from 'tdesign-react';
import styles from '../index.module.less';

import image5 from 'assets/image/Case_Menggu_1.TT矿夜光图.png';
import image6 from 'assets/image/Case_Menggu_2.TT矿谷歌地球影像.png';
import image7 from 'assets/image/Case_Menggu_3.OT矿夜光图.png';
import image8 from 'assets/image/Case_Menggu_4.OT矿谷歌地球影像.png';

const MiningIndustryCard = () => (
  <Card
    title='Analysis of Mining Industry in Mongolia'
    className={styles.welcome}
    bordered={false}
    description={
      <>
        <p>
          Mongolia is one of the 29 resource-rich developing countries identified by International Monetary Fund.
          important to the national economy of Mongolia, and is the main industry of national fiscal revenue and foreign
          exchange export. Two of the largest-scale mining projects in Mongolia are the Tavan Tolgoi coal mine and the
          Oyu Tolgoi copper mine. The Tavan Tolgoi coal mine is the largest coal site in Mongolia. With high-grade coal
          deposits, it is expected to yield six billion tonnes of coal. The Oyu Tolgoi copper mine is regarded as the
          “biggest mining exploration project in the world.” When in fully production Oyu Tolgoi will account for more
          than 30% of Mongolia’s GDP, and it has the potential to boost the national economy by a third. Research of the
          mining industry in Mongolia is of great significance. By monitoring the night-time light brightness,
          night-time satellite imagery can help to evaluate the construction and production status of the mining
          industry in Mongolia.
        </p>
        <p>
          This study employed the all-angle snow-free layer in the Black Marble annual night-time light product
          (VNP46A4) from 2012 to 2021 (https://blackmarble.gsfc.nasa.gov/#product). We analyzed the night-time light of
          the Tavan Tolgoi coal mine and the Oyu Tolgoi copper mine in Mongolia.
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
          interpretation of the Tavan Tolgoi coal mine and the Oyu Tolgoi copper mine based on the satellite provided in
          Google Earth, this study classified the independent lit areas into the following 3 types: mining area,
          residential area, and industrial area. We calculated and tracked the temporal trend in the sum of light (SOL)
          (SOL) of each type of area in Tavan Tolgoi coal mine and Oyu Tolgoi copper mine from 2012 to 2021. The
          following findings were obtained from the results:
        </p>
        <p>
          The SOL of three types of areas in the Tavan Tolgoi coal mine shows a similar changing trend from 2012 2021,
          which reflects that the development of residential areas and industrial areas has a certain correlation
          construction and production of the mining area; The SOL of the residential area in the Oyu Tolgoi Copper
          Copper Mine shows an increasing trend after 2018, which indicates that the development of the Oyu Tolgoi
          copper mine attracts a large influx of people, leading to a rapid increase in night-time light of the
          surrounding residential area; The SOL of the industrial area in the Oyu Tolgoi Copper Mine decreases from 2012
          and increases from 2017 to 2021. After the construction of the underground mine of the Oyu Tolgoi copper mine
          started in 2016, the SOL of the industrial area increases, which indicates that the construction may lead to
          the significant increase in night-time light brightness.
        </p>
        <span>
          <b>Users: Mongolian Geospatial Association</b>
        </span>
      </>
    }
  ></Card>
);

export default memo(MiningIndustryCard);
