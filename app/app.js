var myApp = angular.module("myApp", ['ngRoute','ngMessages', 'controller','service','regController',
'regService','dashboardCtrl','dashService']);
myApp.config(function($routeProvider) {
  
    $routeProvider
    .when('/main', {
       controller: 'userController',
      templateUrl: 'app/components/user/main/main.html'
    })
    .when('/registerPage', {
      controller: 'registerController',
      templateUrl: 'app/components/user/register/registerPage.html'
    })
    .when('/loginPage', {
      controller: 'userController',
      templateUrl: 'app/components/user/login/loginPage.html'
    })
    .when('/dashboardPage', {
      controller: 'userController',
      templateUrl: 'app/components/user/dashboard/dashboardPage.html'
    })
    .when('/registerSuccessPage', {
      controller: 'registerController',
      templateUrl: 'app/components/user/register/registerSuccessPage.html'
    })
    .when('/complaints', {
      controller: 'userController',
      templateUrl: 'app/components/user/dashboard/complaints.html'
    })
    .when('/dashboardPage/addComplaint', {
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/addComplaint.html'
    })
    .when('/dashboardPage/addComplaint/complaintUploadSuccessfullPage',{
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/complaintUploadSuccessfull.html'      
    })
    .otherwise({redirectTo: '/main'});
  });