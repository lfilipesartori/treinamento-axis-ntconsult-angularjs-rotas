(function () {
    'use strict';
 
    angular.module('AXIS.signup', [])
        .config(SignupConfig);
 
    function SignupConfig($stateProvider) {
        $stateProvider
            .state('signup', {
                url: '/signup',
                templateUrl: 'modules/signup/views/index.html',
                controller: 'SignupController as vm'
            });
    }
 })();