// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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