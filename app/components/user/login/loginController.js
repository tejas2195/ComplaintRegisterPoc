var myCtrl = angular.module('controller',[]);

myCtrl.controller('userController', function($scope,$rootScope,$location,$http,$window,userService){
            $scope.userCredentials = {};
        $scope.redirectToHomePage = function(){
            $location.path('main')
        }
        $scope.redirectToDashboardPage = function(userCredentials){
            userService.redirectToDashboardPage(userCredentials.userId,userCredentials.password).then(function(response){
                if(response.data.status === 'ok'){
                console.log(response.data.data.isAdmin);
                sessionStorage.setItem('isAdmin',response.data.data.isAdmin);
                sessionStorage.setItem('userId',response.data.data.userId);
                    $location.path('dashboardPage')
            }else{
                console.log(response.data.message);
                    $scope.errorMessage = response.data.message;
                }
            });
        }
        $scope.logout = function () {
            $window.sessionStorage.clear();
            $location.path('loginPage')
        }
        $scope.redirectToLoginPage = function(){
            $location.path('loginPage')
        }
        $scope.getUserProfile = function(){
            $scope.firstName = sessionStorage.getItem('firstName');
            console.log($scope.firstName);
        }
    })