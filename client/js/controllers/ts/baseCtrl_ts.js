// / <reference path="../../../../typings/angularjs/angular.d.ts"/>
var mean;
(function (mean) {
    var baseController = (function () {
        function baseController($scope, $http, $stateParams) {
            this.$scope = $scope;
            this.$http = $http;
            this.$stateParams = $stateParams;
        }
        baseController.$inject = ['$scope', '$http', '$stateParams'];
        return baseController;
    })();
    angular.module('baseCtrl_ts', []).controller('baseController_ts', ['$scope', '$http', '$stateParams', baseController]);
})(mean || (mean = {}));
//# sourceMappingURL=baseCtrl_ts.js.map