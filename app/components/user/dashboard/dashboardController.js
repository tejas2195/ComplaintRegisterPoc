angular.module('dashboardCtrl', [])
    .controller('dashboardController', function ($scope, $window, $location, $http, dashboardService) {
        $scope.complaint = {};

        $scope.addComplaint = function (complaint) {
            $scope.userNum = sessionStorage.getItem('userId');

            dashboardService
                .uploadComplaint(complaint.title, complaint.description,$scope.userNum)

                .then(function (response) {
                    console.log(response.data.status);
                    if (response.data.status === 'ok') {
                        $location.path('complaintUploadSuccessfullPage');
                    } else {
                        console.log(response.data.message);
                        $scope.errorMessage = response.data.message;
                    }
                });
        }
        $scope.viewComplaints = function () {
            $scope.admin = sessionStorage.getItem('isAdmin');
            console.log($scope.admin);
            if($scope.admin == 1){
                console.log('I am an admin');
            dashboardService.getAllComplaints().then(function (response) {
                    if (response.data.status === 'ok') {
                        $scope.records= response.data.data;
                        console.log($scope.records);
                        // $location.path('viewComplaints')
                    } else {
                        console.log(response.data.message);
                        $scope.errorMessage = response.data.message;
                    }
                });
        } else{
            console.log('I am not an admin');
            $scope.userId = sessionStorage.getItem('userId');
            console.log($scope.userId);
            dashboardService.getComplaints($scope.userId).then(function (response) {
                console.log(response.data);
                if (response.data.status === 'ok') {
                    $scope.records= response.data.data;
                    $location.path('viewComplaints')
                } else {
                    console.log(response.data.message);
                    $scope.errorMessage = response.data.message;
                }
            });
        }
    }

        $scope.previousPage = function () {
            $window.history.back();
        }
        $scope.redirectToHomePage = function () {
            $location.path('main')
        }
        $scope.logout = function () {
            $window.sessionStorage.clear();
            $location.path('loginPage')
        }
    })