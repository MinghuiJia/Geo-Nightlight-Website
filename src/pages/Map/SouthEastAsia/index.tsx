import React, { useState } from 'react';

import { Mapbox } from '@antv/l7-maps';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LarkMap } from '@antv/larkmap';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

import { sliderMarks } from '../utils/sliderMarks';
import DisasterComponent from './Disaster';

/**
 * 实例化
 */
const mapInstance = new Mapbox({
  style: 'light',
  center: [111.52, 7.37],
  // style: 'dark',
  pitch: 0,
  zoom: 3,
  token: 'pk.eyJ1Ijoiam1oMTk5OCIsImEiOiJjbHB2NnN6dGswMjJnMmtvOTU5cGNwdDN0In0.-D8QreNtfeSeuBN92vQQ1w',
});

const marks: SliderMarks = sliderMarks;

const App: React.FC = () => {
  const [showKey, setShowKey] = useState<string>('value2012');

  const handleSliderChange = (value: number) => {
    if (value === 2012) setShowKey('value2012');
    else if (value === 2013) setShowKey('value2013');
    else if (value === 2014) setShowKey('value2014');
    else if (value === 2015) setShowKey('value2015');
    else if (value === 2016) setShowKey('value2016');
    else if (value === 2017) setShowKey('value2017');
    else if (value === 2018) setShowKey('value2018');
    else if (value === 2019) setShowKey('value2019');
    else if (value === 2020) setShowKey('value2020');
    else if (value === 2021) setShowKey('value2021');
    else if (value === 2022) setShowKey('value2022');
    else setShowKey('value2012');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px 5px 3px', width: '100%' }}>
      <Slider min={2012} max={2022} step={1} defaultValue={2012} onChange={handleSliderChange} marks={marks} />
      <LarkMap map={mapInstance} style={{ minHeight: '500px', justifyContent: 'center', position: 'relative' }}>
        <DisasterComponent showKey={showKey} />
      </LarkMap>
    </div>
  );
};

export default App;
