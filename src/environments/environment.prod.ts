export const environment = {
  production: true,

  orions_configs : [

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
      enable : false
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
      enable : false
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
      enable : false
    },
    {
      name : 'Batch Guaspari',
      urlOrion: 'http://177.104.61.17:1026/v2',
      urlQL : 'http://cors.swamp-project.org/guaspari.swamp-project.org:8668/v2',
      fiwareService: 'batch',
      fiwareServicepath : '/',
      enable : false
    },
    {
      name : 'Batch MATOPIBA',
      urlOrion: 'http://177.104.61.52:1026/v2',
      urlQL : 'http://cors.swamp-project.org/matopiba.swamp-project.org:8668/v2',
      fiwareService: 'batch',
      fiwareServicepath : '/',
      enable : false
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
      enable : false
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
