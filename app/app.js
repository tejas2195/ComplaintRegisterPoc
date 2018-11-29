var myApp = angular.module("myApp", ['ui.router','ngMessages', 'controller','service','regController',
'regService','dashboardCtrl','dashService']);
myApp.config(function($stateProvider,$urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/main');
    $stateProvider
    .state('main',{
      url:'/main',
       controller: 'userController',
      templateUrl: 'app/components/user/main/main.html'
    })
    .state('registerPage', {
      url:'/registerPage',
      controller: 'registerController',
      templateUrl: 'app/components/user/register/registerPage.html'
    })
    .state('loginPage', {
      url:'/loginPage',      
      controller: 'userController',
      templateUrl: 'app/components/user/login/loginPage.html'
    })
    .state('dashboardPage', {
      url:'/dashboardPage',    
      controller: 'userController',
      templateUrl: 'app/components/user/dashboard/dashboardPage.html'
    })
    .state('registerSuccessPage', {
      url: '/registerSuccessPage',
      controller: 'registerController',
      templateUrl: 'app/components/user/register/registerSuccessPage.html'
    })
    .state('addComplaints', {
      url: '/addComplaints',
      controller: 'userController',
      templateUrl: 'app/components/user/dashboard/addComplaints.html'
    })
    .state('addComplaint', {
      url:'/dashboardPage/addComplaint',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/addComplaint.html'
    })
    .state('complaintUploadSuccessfullPage',{
      url:'/complaintUploadSuccessfullPage',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/complaintUploadSuccessfull.html'      
    })
    .state('viewComplaints',{
      url:'/dashboardPage/viewComplaints',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/viewComplaints.html'      
    })
  });
