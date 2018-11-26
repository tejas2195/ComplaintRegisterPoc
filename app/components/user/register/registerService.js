var regService = angular.module('regService',[]);

regService.service('registerService',['$http',function($http){
    this.redirectToRegisterSuccessPage = function(fname,lname,phnum,emailId,adrs,pwd) {
        var body = {
            firstName:fname,
            lastName:lname,
            password:pwd,
            address:adrs,
            email:emailId,
            phoneNumber:phnum
        }
        return $http.post('http://localhost:3005/register',body);
    };
}])