var myCtrl = angular.module('controller',[]);

myCtrl.controller('userController', function($scope,$rootScope,$location,$http,$window,userService){
            $scope.userId = "";
            $scope.password = "";
        $scope.redirectToHomePage = function(){
            $location.path('/main')
        }
        $scope.redirectToDashboardPage = function(){
            userService.redirectToDashboardPage($scope.userId,$scope.password).then(function(response){
                console.log(response.data.status);
                if(response.data.status === 'ok'){
                        $rootScope.firstName = response.data.firstName,
            $rootScope.lastName = response.data.lastName,
            $rootScope.phoneNumber = response.data.phoneNumber,
            $rootScope.emailId = response.data.emailId,
            $rootScope.address=response.data.address,
            $rootScope.password= response.data.password
                    $location.path('/dashboardPage')
            }else{
                console.log(response.data.message);
                    $scope.errorMessage = response.data.message;
                }
            });
        }
        $scope.logout = function () {
            $window.localStorage.clear();
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
             $scope.firstName = $rootScope.firstName;
                $scope.lastName = $rootScope.lastName;
                $scope.phoneNumber = $rootScope.phoneNumber;
                $scope.emailId = $rootScope.emailId;
                $scope.address= $rootScope.address;
                $scope.password= $rootScope.password;
        }
    })