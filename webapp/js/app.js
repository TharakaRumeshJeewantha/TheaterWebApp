'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngdemo', ['ngdemo.filters', 'ngdemo.directives']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/TRJtheatre', {templateUrl: 'login.html'});
        $routeProvider.when('/user-list', {templateUrl: 'verify.html'});
        $routeProvider.when('/TRJ-form24', {templateUrl: 'form_wizards.html'});
        $routeProvider.otherwise({redirectTo: '/TRJtheatre'});
    }]);
