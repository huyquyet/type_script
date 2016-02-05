/// <reference path="../../typings/angularjs/angular.d.ts"/>
// module mean{
//   'use strict';
var app = angular.module('Mean', [
    'ui.router',
    'ngSanitize',
    'angular-flash.service',
    'angular-flash.flash-alert-directive',
    'ui.bootstrap',
    'appRoutes',
    'appFilters',
    'appServices',
    'baseCtrl_ts',
    'postCtrl_ts',
    'postService_ts'
]);
app.config(['flashProvider', function (flashProvider) {
    flashProvider.errorClassnames.push('alert-danger');
    flashProvider.warnClassnames.push('alert-warning');
    flashProvider.infoClassnames.push('alert-info');
    flashProvider.successClassnames.push('alert-success');
}]);
// }
//# sourceMappingURL=app_ts.js.map