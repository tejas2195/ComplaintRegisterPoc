myApp.config(function($stateProvider) {
  
    $stateProvider
    .state('addComplaint', {
      url:'/dashboardPage/addComplaint',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/views/addComplaint.html'
    })
    .state('complaintUploadSuccessfullPage',{
      url:'/complaintUploadSuccessfullPage',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/views/complaintUploadSuccessfull.html'      
    })
    .state('viewComplaints',{
      url:'/dashboardPage/viewComplaints',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/views/viewComplaints.html'      
    })
    .state('viewProfile',{
      url:'/dashboardPage/viewProfile',
      controller: 'dashboardController',
      templateUrl: 'app/components/user/dashboard/views/viewProfile.html'      
    })
    .state('sideBar',{
      url:'/sideBar',
      controller: 'dashboardController',
      templateUrl: 'app/shared/templates/sideBar.html'      
    })
  });
