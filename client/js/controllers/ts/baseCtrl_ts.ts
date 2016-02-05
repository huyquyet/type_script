// / <reference path="../../../../typings/angularjs/angular.d.ts"/>
 module mean {
  declare var angular;
  class baseController {
      static $inject = ['$scope', '$http', '$stateParams'];
      constructor(public $scope, public $http, public $stateParams) {
      }


  }
     angular.module('baseCtrl_ts', []).controller('baseController_ts', ['$scope', '$http', '$stateParams', baseController]);
 }
