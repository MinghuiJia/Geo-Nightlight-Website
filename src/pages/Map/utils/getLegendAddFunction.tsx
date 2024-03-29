import { SouthAfricaColors, SouthEastAsiaColors, GDPColors } from './legendColor';
import { getSouthAfricaColor, getSouthEastAsiaColor, getGDPColor } from './getColorFunction';
import styles from '../index.module.less';
import { DOM } from '@antv/l7';

const povertyLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, -999];
  const grades2 = [0, '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

  for (let i = 0; i < grades.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i style="background: ${getSouthAfricaColor(grades[i] + 1, SouthAfricaColors)}"></i>`;
    } else {
      div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: ${getSouthAfricaColor(
        grades[i] + 1,
        SouthAfricaColors,
      )} ">Poverty Rate</i>`;
    }
  }
  div.innerHTML += '<br>';
  for (let i = 0; i < grades2.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i>${grades2[i]}</>`;
    } else {
      div.innerHTML += `<i style=" width: 110px;">${grades2[i]}</>`;
    }
  }
  return div;
};

const electrificationLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, -999];
  const grades2 = [0, '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

  for (let i = 0; i < grades.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i style="background: ${getSouthAfricaColor(grades[i] + 1, SouthAfricaColors)}"></i>`;
    } else {
      div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: ${getSouthAfricaColor(
        grades[i] + 1,
        SouthAfricaColors,
      )} ">Electrification Rate</i>`;
    }
  }
  div.innerHTML += '<br>';
  for (let i = 0; i < grades2.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i>${grades2[i]}</>`;
    } else {
      div.innerHTML += `<i style=" width: 110px;">${grades2[i]}</>`;
    }
  }
  return div;
};

const gdpLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];
  const grades2 = ['-10%', '-8%', '-6%', '-4%', '-2%', '0%', '2%', '4%', '6%', '8%', '10%'];

  for (let i = 0; i < grades.length - 1; i++) {
    div.innerHTML += `<i style="background: ${getGDPColor(grades[i], GDPColors)}"></i>`;
  }
  div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: rgba(0,0,0,0)">GDP Growth Rate</i>`;

  div.innerHTML += '<br>';
  for (let i = 0; i < grades2.length; i++) {
    div.innerHTML += `<i>${grades2[i]}</>`;
  }

  return div;
};

const southEastAsiaLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, -999];
  const grades2 = [0, '5亿', '10亿', '15亿', '20亿', '25亿', '30亿', '35亿', '40亿', '45亿', '50亿'];

  for (let i = 0; i < grades.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i style="background: ${getSouthEastAsiaColor(grades[i] + 1, SouthEastAsiaColors)}"></i>`;
    } else {
      div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: ${getSouthEastAsiaColor(
        grades[i] + 1,
        SouthEastAsiaColors,
      )} ">Economic Losses</i>`;
    }
  }
  div.innerHTML += '<br>';
  for (let i = 0; i < grades2.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i>${grades2[i]}</>`;
    } else {
      div.innerHTML += `<i style=" width: 110px;">${grades2[i]}</>`;
    }
  }
  return div;
};

export { povertyLegendAdd, southEastAsiaLegendAdd, electrificationLegendAdd, gdpLegendAdd };
