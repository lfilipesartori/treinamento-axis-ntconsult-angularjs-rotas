(function () {
    'use strict';
 
    angular.module('AXIS.contato', [])
        .config(ContatoConfig);
 
    function ContatoConfig($stateProvider) {
        $stateProvider
            .state('contato', {
                url: '/contato',
                templateUrl: 'modules/contato/views/index.html',
                controller: 'ContatoController as vm'
            });
    }
 })();