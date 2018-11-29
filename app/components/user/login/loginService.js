var myService = angular.module('service',[]);

myService.service('userService',['$http',function($http){
    this.redirectToDashboardPage = function(username,pwd) {
        var body = {
            userId:username,
            password:pwd
        }
        return $http.post('http://localhost:3005/login',body);
    };
    this.getAllComplaints = function(){
        return $http.get('http://localhost:3005/complains');
    }
}])