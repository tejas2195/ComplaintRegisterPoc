var myApp = angular.module("myApp", ['ui.router','ngMessages', 'controller','service','regController',
'regService','dashboardCtrl','dashService']);
myApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');
  });
