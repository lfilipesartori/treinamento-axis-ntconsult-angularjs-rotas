(function () {
    'use strict';
 
    angular.module('AXIS.home', [])
        .config(HomeConfig);
 
    function HomeConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/views/index.html',
                controller: 'HomeController as vm'
            });
    }
 })();