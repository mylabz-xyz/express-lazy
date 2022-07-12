import { AxiosRequestConfig } from 'axios';
import Axios, { AxiosObservable } from 'axios-observable';

export const get = (
  url: string,
  config?: AxiosRequestConfig<any>
): AxiosObservable<any> => Axios.get(url, config);
