import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { LarkMap } from '@antv/larkmap';
import { Mapbox } from '@antv/l7-maps';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { Link } from 'tdesign-react';

import PovertyComponent from './Poverty';
import { sliderMarks } from '../utils/sliderMarks';

/**
 * 实例化
 */
const mapInstance = new Mapbox({
  style: 'light',
  center: [15, -20.8],
  // style: 'dark',
  dragPan: false,
  scrollZoom: false,
  pitch: 0,
  zoom: 3.3,
  token: 'pk.eyJ1Ijoiam1oMTk5OCIsImEiOiJjbHB2NnN6dGswMjJnMmtvOTU5cGNwdDN0In0.-D8QreNtfeSeuBN92vQQ1w',
});

const marks: SliderMarks = sliderMarks;

const App: React.FC = () => {
  const [showKey, setShowKey] = useState<string>('density2012');

  const handleSliderChange = (value: number) => {
    if (value === 2012) setShowKey('density2012');
    else if (value === 2013) setShowKey('density2013');
    else if (value === 2014) setShowKey('density2014');
    else if (value === 2015) setShowKey('density2015');
    else if (value === 2016) setShowKey('density2016');
    else if (value === 2017) setShowKey('density2017');
    else if (value === 2018) setShowKey('density2018');
    else if (value === 2019) setShowKey('density2019');
    else if (value === 2020) setShowKey('density2020');
    else if (value === 2021) setShowKey('density2021');
    else if (value === 2022) setShowKey('density2022');
    else setShowKey('density2012');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 0px 3px', width: '100%' }}>
      <Slider min={2012} max={2022} step={1} defaultValue={2012} onChange={handleSliderChange} marks={marks} />
      <LarkMap map={mapInstance} style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }}>
        <PovertyComponent showKey={showKey} />
      </LarkMap>
      <span>
        Download:{' '}
        <Link
          theme='primary'
          href='http://43.154.234.176:80/json/povertyRateDB_southernAfrica.xlsx'
          style={{ fontWeight: 'bold' }}
        >
          Poverty Data
        </Link>
      </span>
    </div>
  );
};

export default App;
