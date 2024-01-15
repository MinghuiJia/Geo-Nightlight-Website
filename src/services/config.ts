const devBaseURL = 'http://43.154.234.176:80/';
const proBaseURL = 'http://43.154.234.176:80/';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
