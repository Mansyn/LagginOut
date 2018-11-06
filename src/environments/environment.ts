// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBpKTuB3ZGvtD58TdpvxQtQPgXljPVDbzw",
    authDomain: "lagginout-dev.firebaseapp.com",
    databaseURL: "https://lagginout-dev.firebaseio.com",
    projectId: "lagginout-dev",
    storageBucket: "lagginout-dev.appspot.com",
    messagingSenderId: "642559472774"
  },
  twitch: {
    apiRoot: 'https://api.twitch.tv/',
    apiUser: 'mansyn',
    channelId: 'laggin_out',
    clientId: 'g50hk1eufkzlzthb3wayc49e9icubn',
    clientSecret: 'pfmo4yr1mbvee7m5vj9mqgxnybnslg'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
