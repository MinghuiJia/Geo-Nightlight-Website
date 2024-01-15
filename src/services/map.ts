import request from './request';

export const getSouthAfricaBoundry = () =>
  request({
    url: '/json/countriesBoundry.json',
  });
export const getPovertyJson = () =>
  request({
    url: '/json/allYearsPoverty.json',
  });
export const getElectrificationJson = () =>
  request({
    url: '/json/allYearsElectrification.json',
  });
export const getDisasterJson = () =>
  request({
    url: '/json/allYearsShortDisaster.json',
  });
