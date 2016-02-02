// / <reference path="../../../../typings/angularjs/angular.d.ts"/>
var mean;
(function (mean) {
    var baseController = (function () {
        function baseController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
        }
        baseController.$inject = ['$scope', '$http'];
        return baseController;
    })();
    angular.module('baseCtrl_ts', []).controller('baseController_ts', ['$scope', '$http', baseController]);
})(mean || (mean = {}));
//# sourceMappingURL=baseCtrl_ts.js.map