var regCtrl = angular.module('regController',[]);

regCtrl.controller('registerController', function($scope,$location,$http,registerService){
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.phoneNumber = "";
            $scope.emailId = "";
            $scope.address="";
            $scope.password="";
        $scope.redirectToHomePage = function(){
            $location.path('/main')
        }
        $scope.redirectToRegisterSuccessPage = function(){
            registerService.redirectToRegisterSuccessPage($scope.firstName, $scope.lastName ,
                $scope.phoneNumber, $scope.emailId, $scope.address, $scope.password).then(function(response){
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