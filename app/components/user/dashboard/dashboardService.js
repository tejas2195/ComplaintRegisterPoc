angular.module('dashService',[])
.service('dashboardService',['$http',function($http){
    this.uploadComplaint = function(complaintTitle,complaintDescription,user) {
        var body = {
            title:complaintTitle,
            detail:complaintDescription,
            userId:user
        }
        return $http.post('http://localhost:3005/complains',body);
    };
    this.getAllComplaints = function() {
        return $http.get('http://localhost:3005/complains');
    };
    this.getComplaints = function(customerId) {
        return $http.get('http://localhost:3005/complains/'+ customerId);
    };
}])