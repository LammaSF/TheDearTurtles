// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBjX0o-3cZDeugYMSeEpTfUvY7ELI8pF90',
    authDomain: 'blogile-1e88b.firebaseapp.com',
    databaseURL: 'https://blogile-1e88b.firebaseio.com',
    projectId: 'blogile-1e88b',
    storageBucket: 'blogile-1e88b.appspot.com',
    messagingSenderId: '400987209397'
  }
};
