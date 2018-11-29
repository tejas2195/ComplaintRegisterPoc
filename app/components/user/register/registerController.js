var regCtrl = angular.module('regController',[]);

regCtrl.controller('registerController', function($scope,$location,$http,registerService){
    $scope.userDetails = {};
        $scope.redirectToHomePage = function(){
            $location.path('/main')
        }
        $scope.redirectToRegisterSuccessPage = function(userDetails){
            registerService.redirectToRegisterSuccessPage(userDetails.firstName, userDetails.lastName ,
                userDetails.phoneNumber, userDetails.emailId, userDetails.address, userDetails.password).then(function(response){
                if(response.data.status ==='ok'){
                    $location.path('/registerSuccessPage')
                } else{
                    $scope.errorMessage = 'Phone number already Exists';
                }
            })
        }
        $scope.redirectToLoginPage = function(){
            $location.path('/loginPage')
        }
    })