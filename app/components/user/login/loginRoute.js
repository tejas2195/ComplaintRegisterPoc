myApp.config(function($stateProvider) {
  
    $stateProvider
    .state('main',{
      url:'/main',
       controller: 'userController',
      templateUrl: 'app/components/user/main/views/main.html'
    })
    .state('loginPage', {
      url:'/loginPage',      
      controller: 'userController',
      templateUrl: 'app/components/user/login/views/loginPage.html'
    })
    .state('dashboardPage', {
      url:'/dashboardPage',    
      controller: 'userController',
      templateUrl: 'app/components/user/dashboard/views/dashboardPage.html'
    })
  });
