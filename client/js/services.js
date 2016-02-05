angular.module('appServices', [])
    .service('appAlert', ['$modal', '$http', function ($modal) {

    this.confirm=function(data,callback) {
        /*begin modal*/
        var modalInstance = $modal.open({
            templateUrl: '/views/modal/confirm.html',
            controller: 'modal.confirm',
            backdrop:'static',
            /*scope:$scope,*/
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modalInstance.result.then(function () {
            return callback(true);
        }, function () {
            return callback(false);
        });
        /*end modal*/
    };
}]);