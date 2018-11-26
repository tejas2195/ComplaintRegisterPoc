var myCtrl = angular.module('controller',[]);

myCtrl.controller('userController', function($scope,$rootScope,$location,$http,$window,userService){
            $scope.userId = "";
            $scope.password = "";
        $scope.redirectToHomePage = function(){
            $location.path('/main')
        }
        $scope.redirectToDashboardPage = function(){
            userService.redirectToDashboardPage($scope.userId,$scope.password).then(function(response){
                console.log(response.data.data.firstName);
                sessionStorage.setItem('firstName',response.data.data.firstName);
                // console.log(accessData)
                if(response.data.status === 'ok'){
                    $location.path('/dashboardPage')
            }else{
                console.log(response.data.message);
                    $scope.errorMessage = response.data.message;
                }
            });
        }
        $scope.logout = function () {
            $window.sessionStorage.clear();
            $location.path('/loginPage')
        }
        $scope.redirectToLoginPage = function(){
            $location.path('/loginPage')
        }
        $scope.complaints = function(){
            $scope.firstName = $rootScope.firstName;
            $scope.complaints= "This is my complaint" + $rootScope.firstName;
        }
        $scope.getUserProfile = function(){
            $scope.firstName = sessionStorage.getItem('firstName');
            console.log($scope.firstName);
        }
    })