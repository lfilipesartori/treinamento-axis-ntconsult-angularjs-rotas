(function () {
    'use strict';
 
    angular.module('AXIS.sobre', [])
        .config(SobreConfig);
 
    function SobreConfig($stateProvider) {
        $stateProvider
            .state('sobre', {
                url: '/sobre',
                templateUrl: 'modules/sobre/views/index.html',
                controller: 'SobreController as vm'
            });
    }
 })();