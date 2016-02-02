// / <reference path="../../../../typings/angularjs/angular.d.ts"/>
 module mean {
  declare var angular;
  class baseController {
      static $inject = ['$scope', '$http'];
      constructor(public $scope, public $http) {
      }


  }
angular.module('baseCtrl_ts', []).controller('baseController_ts', ['$scope', '$http', baseController]);
 }
