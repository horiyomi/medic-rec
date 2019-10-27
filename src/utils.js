import moment from 'moment'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))


export const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}
export const checkJsonStatus = json => {
    if (json.status === 'success') {
        return json
    }
    const error = new Error(json.data.message)
    error.payload = json
    throw error
}
export const checkStatusIs200 = response => {
    if (response.status === 200) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}
export const check401 = response => {
    // console.log(response)
    if (response.status === 401) {
        const error = new Error(response.statusText)
        throw error
    }
    return
}

export const checkContentType = (contentType, response) => {
    const responseContentType = response.headers.get("content-type");
    if (responseContentType && responseContentType.includes(contentType)) {
        return response
    }
    const error = new Error("not json")
    error.response = response
    throw error
}

export const parseJSON = response => response.json();

export const createRequestWithToken = (url = '', config) => token => {

    const validMethods = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'PATCH'];
    const defaultconfig = {
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
    }
    const defaultHeaders = new Headers();
    defaultHeaders.set('Content-Type', 'application/json');
    defaultHeaders.set('Authorization', `Bearer ${token}`);
    defaultHeaders.set('Accept', `application/json`);

    if (typeof config.method !== 'string') {
        throw new TypeError("config method property must be a string.");
    }
    if (validMethods.indexOf(config.method.toUpperCase()) === -1) {
        throw Error("config method property value most be one of ['GET','POST','HEAD','PUT','DELETE']");
    }

    config.headers = config.headers || defaultHeaders;

    if (config.headers && !config.headers instanceof Headers) {
        throw new TypeError("config headers property must be of type Headers.");
    }

    const requestConfig = {
        ...defaultconfig,
        ...config
    };
    return new Request(url, requestConfig);

}

export const createRequest = (url = '', config, token = '') => {

    const validMethods = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'PATCH'];
    const defaultconfig = {
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
    }
    const defaultHeaders = new Headers();
    defaultHeaders.set('Content-Type', 'application/json');

    if (token) {
        defaultHeaders.set('Authorization', `Bearer ${token}`);
    }
    
    defaultHeaders.set('Accept', `application/json`);

    if (typeof config.method !== 'string') {
        throw new TypeError("config method property must be a string.");
    }

    if (validMethods.indexOf(config.method.toUpperCase()) === -1) {
        throw Error("config method property value most be one of ['GET','POST','HEAD','PUT','DELETE']");
    }

    config.headers = config.headers || defaultHeaders;

    if (config.headers && !config.headers instanceof Headers) {
        throw new TypeError("config headers property must be of type Headers.");
    }

    const requestConfig = {
        ...defaultconfig,
        ...config
    };
    return new Request(url, requestConfig);

}

export const is_Array = value => value && typeof value === 'object' && value.constructor === Array;



export const removeTrailingSlash = str => {
    return str.split('')[str.length - 1] === '/' ?
        str.split('').slice(0, str.length - 1).join('')
        :
        str;
}

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const getFileNameFromPath = filePath => {
    const arr = filePath.split('/')
    return arr[arr.length - 1]
}

export const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export const getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export const formatDate = (date,format='DD-MM-YY h:mm: a')=>moment(date).format(format)

const maxValueMonth = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const formatOrder = ['yyyy', 'yy', 'mm', 'dd', 'HH', 'MM', 'SS']

export default function createAutoCorrectedDatePipe(dateFormat = 'mm-dd-yyyy', {
  minYear = 1920,
  maxYear = 2018
} = {}) {
  const dateFormatArray = dateFormat
    .split(/[^dmyHMS]+/)
    .sort((a, b) => formatOrder.indexOf(a) - formatOrder.indexOf(b))
  return function(conformedValue) {
    const indexesOfPipedChars = []
    const maxValue = {'dd': 31, 'mm': 12, 'yy': 99, 'yyyy': maxYear, 'HH': 23, 'MM': 59, 'SS': 59}
    const minValue = {'dd': 1, 'mm': 1, 'yy': 0, 'yyyy': minYear, 'HH': 0, 'MM': 0, 'SS': 0}
    const conformedValueArr = conformedValue.split('')

    // Check first digit
    dateFormatArray.forEach((format) => {
      const position = dateFormat.indexOf(format)
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10)

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position]
        conformedValueArr[position] = 0
        indexesOfPipedChars.push(position)
      }
    })

    // Check for invalid date
    let month = 0
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format)
      const length = format.length
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '')
      const value = parseInt(textValue, 10)
      if (format === 'mm') {
        month = value || 0
      }
      const maxValueForFormat = format === 'dd' ? maxValueMonth[month] : maxValue[format]
      if (format === 'yyyy' && (minYear !== 1 || maxYear !== 9999)) {
        const scopedMaxValue = parseInt(maxValue[format].toString().substring(0, textValue.length), 10)
        const scopedMinValue = parseInt(minValue[format].toString().substring(0, textValue.length), 10)
        return value < scopedMinValue || value > scopedMaxValue
      }
      return value > maxValueForFormat || (textValue.length === length && value < minValue[format])
    })

    if (isInvalid) {
      return false
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars
    }
  }
}