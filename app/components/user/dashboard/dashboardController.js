angular.module('dashboardCtrl',[])
.controller('dashboardController', function($scope,$window,$location,$http,dashboardService){
    $scope.complaintTitle="";
    $scope.complaintDescription="";
        $scope.addComplaint = function(){
            // $scope.complaints= "This is your complaint "+ $scope.complaintTitle + ' ' + $scope.complaintDescription;
            dashboardService.uploadComplaint($scope.complaintTitle,$scope.complaintDescription).then(function(response){
                console.log(response.data.status);
                if(response.data.status === 'ok'){
                    $location.path('/dashboardPage/addComplaint/complaintUploadSuccessfullPage')
            }else{
                console.log(response.data.message);
                    $scope.errorMessage = response.data.message;
                }
            });
        }
        $scope.previousPage = function(){
            $window.history.back();
        }
    })