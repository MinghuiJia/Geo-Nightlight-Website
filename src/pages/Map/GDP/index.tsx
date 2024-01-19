import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { LarkMap } from '@antv/larkmap';
import { Mapbox } from '@antv/l7-maps';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

import GDPComponent from './GDP';
import { timeIntervalSliderMarks } from '../utils/sliderMarks';

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

const marks: SliderMarks = timeIntervalSliderMarks;

const App: React.FC = () => {
  const [showKey, setShowKey] = useState<string>('2012_2013');

  const handleSliderChange = (value: number) => {
    if (value === 2012) setShowKey('2012_2013');
    else if (value === 2013) setShowKey('2013_2014');
    else if (value === 2014) setShowKey('2014_2015');
    else if (value === 2015) setShowKey('2015_2016');
    else if (value === 2016) setShowKey('2016_2017');
    else if (value === 2017) setShowKey('2017_2018');
    else if (value === 2018) setShowKey('2018_2019');
    else if (value === 2019) setShowKey('2019_2020');
    else if (value === 2020) setShowKey('2020_2021');
    else if (value === 2021) setShowKey('2021_2022');
    else setShowKey('2012_2013');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 30px 10px 20px', width: '100%' }}>
      <Slider min={2012} max={2021} step={1} defaultValue={2012} onChange={handleSliderChange} marks={marks} />
      <LarkMap map={mapInstance} style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }}>
        <GDPComponent showKey={showKey} />
      </LarkMap>
    </div>
  );
};

export default App;
