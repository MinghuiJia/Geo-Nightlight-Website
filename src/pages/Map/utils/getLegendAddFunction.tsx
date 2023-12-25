import { SouthAfricaColors, SouthEastAsiaColors } from './legendColor';
import { getSouthAfricaColor, getSouthEastAsiaColor } from './getColorFunction';
import styles from '../index.module.less';
import { DOM } from '@antv/l7';

const southAfricaLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [0, 10, 20, 30, 40, -999];
  const grades2 = [0, '10', '20', '30', '40', '50'];

  for (let i = 0; i < grades.length; i++) {
    if (i < grades.length - 1) {
      div.innerHTML += `<i style="background: ${getSouthAfricaColor(grades[i] + 1, SouthAfricaColors)}"></i>`;
    } else {
      div.innerHTML += `<i style=" width: 110px; margin-left: 10px; background: ${getSouthAfricaColor(
        grades[i] + 1,
        SouthAfricaColors,
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

const southEastAsiaLegendAdd = () => {
  const div = DOM.create('div');
  div.classList.add(styles.legend);
  div.classList.add(styles.info);
  const grades = [0, 10, 20, 30, 40, -999];
  const grades2 = [0, '10', '20', '30', '40', '50'];

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

export { southAfricaLegendAdd, southEastAsiaLegendAdd };
