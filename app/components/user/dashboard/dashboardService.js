angular.module('dashService',[])
.service('dashboardService',['$http',function($http){
    this.uploadComplaint = function(complaintTitle,complaintDescription) {
        var body = {
            title:complaintTitle,
            detail:complaintDescription,
            userId:1
        }
        return $http.post('http://localhost:3005/complains',body);
    };
}])