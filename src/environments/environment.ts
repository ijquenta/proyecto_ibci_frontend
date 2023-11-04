// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const API_URL = 'http://172.24.23.150:5001/academico_api';
//export const API_URL = 'http://localhost:5001/academico_api';
export const API_URL2 = 'https://fake-trello-api.herokuapp.com';
export const TOKEN = 'token';

export const environment = {
  production: false,
  API_URL2: 'https://fake-trello-api.herokuapp.com',
  API_URL: 'http://172.24.23.150:5001/academico_api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
