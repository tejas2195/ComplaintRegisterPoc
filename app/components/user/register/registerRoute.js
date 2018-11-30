myApp.config(function($stateProvider) {
    $stateProvider
    .state('registerPage', {
      url:'/registerPage',
      controller: 'registerController',
      templateUrl: 'app/components/user/register/views/registerPage.html'
    })
    .state('registerSuccessPage', {
      url: '/registerSuccessPage',
      controller: 'registerController',
      templateUrl: 'app/components/user/register/views/registerSuccessPage.html'
    })
  });
