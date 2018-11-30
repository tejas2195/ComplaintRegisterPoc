var myCtrl = angular.module('controller', []);

myCtrl.controller('userController', function ($scope, $rootScope, $location, $http, $window, userService) {
    $scope.userCredentials = {};
    $scope.redirectToHomePage = function () {
        $location.path('main')
    }
    $scope.redirectToDashboardPage = function (userCredentials) {
        userService.redirectToDashboardPage(userCredentials.userId, userCredentials.password).then(function (response) {
            if (response.data.status === 'ok') {
                console.log(response.data.data.isAdmin);
                sessionStorage.setItem('isAdmin', response.data.data.isAdmin);
                sessionStorage.setItem('userId', response.data.data.userId);
                sessionStorage.setItem('firstName', response.data.data.firstName);
                sessionStorage.setItem('lastName', response.data.data.lastName);
                sessionStorage.setItem('phoneNumber', response.data.data.phoneNumber);
                sessionStorage.setItem('email', response.data.data.email);
                sessionStorage.setItem('address', response.data.data.address);
                sessionStorage.setItem('password', response.data.data.password);
                $location.path('dashboardPage')
            } else {
                console.log(response.data.message);
                $scope.errorMessage = response.data.message;
            }
        });
    }
    $scope.logout = function () {
        $window.sessionStorage.clear();
        $location.path('loginPage')
    }
    $scope.redirectToLoginPage = function () {
        $location.path('loginPage')
    }
})