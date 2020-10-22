(function () {
    'use strict';
 
    angular.module('AXIS.login', [])
        .config(LoginConfig);
 
    function LoginConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/views/index.html',
                controller: 'LoginController as vm'
            });
    }
 })();