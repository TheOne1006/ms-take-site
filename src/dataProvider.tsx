import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {
  baseUrl,
    // storageTokenKey,
} from './config';

console.log('baseUrl')
console.log(baseUrl)

const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const token = localStorage.getItem(storageTokenKey);
//   const tokenBase64 = btoa(token);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider(baseUrl, httpClient);

export default dataProvider;
