
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  orions_configs : [

    {
      name : 'localhost',
      urlOrion: 'http://localhost:1026/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },

    {
      name : 'default',
      urlOrion: 'http://177.104.61.17:1026/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'Guaspari',
      urlOrion: 'http://guaspari.swamp-project.org:1026/v2',
      urlQL : 'http://cors.swamp-project.org/guaspari.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },

    {
      name : 'dev',
      urlOrion: 'http://iotee.swamp-project.org:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/dev',
      enable : true
    },

    {
      name : 'UFABC',
      urlOrion: 'http://177.104.61.55:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : false
    },
    {
      name : 'Weather',
      urlOrion: 'http://iotee.swamp-project.org:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/weather',
      enable : true
    },
    {
      name : 'Cartagena',
      urlOrion: 'http://177.104.61.62:1026/v2',
      urlQL : 'http://cors.swamp-project.org/cartagena.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'MATOPIBA',
      urlOrion: 'http://177.104.61.52:1026/v2',
      urlQL : 'http://cors.swamp-project.org/matopiba.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'IoTManagerBeta',
      urlOrion: 'http://177.104.61.60:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'Batch Guaspari',
      urlOrion: 'http://177.104.61.17:1026/v2',
      urlQL : 'http://cors.swamp-project.org/guaspari.swamp-project.org:8668/v2',
      fiwareService: 'batch',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'Batch MATOPIBA',
      urlOrion: 'http://177.104.61.52:1026/v2',
      urlQL : 'http://cors.swamp-project.org/matopiba.swamp-project.org:8668/v2',
      fiwareService: 'batch',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'IoT Manager',
      urlOrion: 'http://13.64.102.58:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'Lanapre',
      urlOrion: 'http://177.104.61.26:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'UFPE',
      urlOrion: 'http://177.104.61.56:1026/v2',
      urlQL : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    },
    {
      name : 'Testbed',
      urlOrion: 'http://177.104.61.47:1026/v2',
      urlQL : 'http://cors.swamp-project.org/177.104.61.47:8668/v2',
      fiwareService: 'openiot',
      fiwareServicepath : '/',
      enable : true
    }

  ],

  storageKeysConfig : {
    localPilot: 'localPilotSwamp'
  },
  quantumLeap : {
    //url : 'http://iotee.swamp-project.org:8668/v2',
    url : 'http://cors.swamp-project.org/iotee.swamp-project.org:8668/v2',
    fiwareService : 'openiot',
    fiwareServicepath : '/weather'
  },

  logData : {
    url : 'https://api.biotaide.com.br/biota/logs'
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
