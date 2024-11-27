import { camelCase, isArray, keys, snakeCase, cloneDeep, forEach, isEmpty } from 'lodash';

export const processUIObject = (data: any): any => {
    if (data instanceof Array) {
      return data.map((item) => {
        return processUIObject(item);
      });
    } else if (data instanceof Object) {
      const resultObj: any = {};
      keys(data).forEach((key) => {
        resultObj[snakeCase(key)] = processUIObject(data[key]);
      });
      return resultObj;
    }
    return data;
  };


  export const processResponseData = (data: Array<any>, serverDataType?: string): Array<any> => {
    const processedDataObjects: Array<any> = [];
    if (data == null) {
      return processedDataObjects;
    }
  
    if (typeof data[0] === 'string') {
      for (let j = 0; j < data.length; j++) {
        processedDataObjects.push(data[j]);
      }
    } else {
      for (let j = 0; j < data.length; j++) {
        processedDataObjects.push(processServerObject(data[j], serverDataType));
      }
    }
    return processedDataObjects;
  };
  
  export const processServerObject = (data: any, serverDataType?: string): any => {
    const resultObj: any = {};
    keys(data).forEach((key) => {
      if (isArray(data[key])) {
        data[key] = processResponseData(data[key]);
      } else if (typeof data[key] === 'object' && !isArray(data[key]) && data[key]) {
        data[key] = processServerObject(data[key]);
      }
  
      resultObj[camelCase(key)] = data[key];
    });
    return resultObj;
  };