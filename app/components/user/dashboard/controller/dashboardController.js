angular.module('dashboardCtrl', [])
    .controller('dashboardController', function ($scope, $state, $window, $location, $http, dashboardService) {
        $scope.complaint = {};

        $scope.addComplaint = function (complaint) {
            $scope.userNum = sessionStorage.getItem('userId');

            dashboardService
                .uploadComplaint(complaint.title, complaint.description, $scope.userNum)

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
            if ($scope.admin == 1) {
                console.log('I am an admin');
                dashboardService.getAllComplaints().then(function (response) {
                    console.log(response.data.data.length);
                    if (response.data.data.length > 0) {
                        $scope.records = response.data.data;
                        console.log($scope.records);
                    } else {
                        console.log(response.data.message);
                        $scope.errorMessage = response.data.message;
                    }
                });
            } else {
                console.log('I am not an admin');
                $scope.userId = sessionStorage.getItem('userId');
                console.log($scope.userId);
                dashboardService.getComplaints($scope.userId).then(function (response) {
                    console.log(response.data);
                    if (response.data.data.length != 0) {
                        $scope.records = response.data.data;
                    } else {
                        console.log(response.data.message);
                        $scope.errorMessage = "You dont have any previous complaints. If you want to add one add it from add complaint section."
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
        $scope.getUserProfile = function () {
            $scope.firstName = sessionStorage.getItem('firstName');
            $scope.lastName = sessionStorage.getItem('lastName');
            $scope.phoneNumber = sessionStorage.getItem('phoneNumber');
            $scope.email = sessionStorage.getItem('email');
            $scope.address = sessionStorage.getItem('address');
            $scope.password = sessionStorage.getItem('password');
        }
        $scope.viewComplaints();
        $scope.getUserProfile();
    })