(function () {
  'use strict';

  angular.module('AXIS.modules', [
    'AXIS.home',
    'AXIS.contato',
    'AXIS.sobre'
    
  ]);
  
  angular.module('AXIS', ['ui.router', 'AXIS.modules'])
    .config(AppConfig)
  
  function AppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
 
})();