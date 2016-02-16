/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>
var AppRouter;
(function (AppRouter) {
    var Router = (function () {
        //static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        function Router($stateProvider, urlRouterProvider, $locationProvider) {
            this.$stateProvider = $stateProvider;
            this.urlRouterProvider = urlRouterProvider;
            this.$locationProvider = $locationProvider;
            this.state();
        }
        Router.prototype.state = function () {
            this.urlRouterProvider.otherwise("/404.html");
            this.$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            this.$locationProvider.hashPrefix('!');
            this.$stateProvider.state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: 'baseController_ts'
            });
            this.$stateProvider.state('list', {
                url: "/list-post",
                templateUrl: "/views/list.html",
                controller: 'ListPostController_ts'
            });
            this.$stateProvider.state('list.detail', {
                url: "/detail-post/:id",
                templateUrl: '/views/detail.html',
                parent: 'list',
                controller: 'DetailPostController_ts'
            });
            this.$stateProvider.state('list.edit', {
                url: "/edit-post/:id",
                templateUrl: '/views/edit.html',
                controller: 'EditPostController_ts'
            });
            this.$stateProvider.state('create', {
                url: "/create-post",
                templateUrl: "/views/create.html",
                parent: 'list',
                controller: 'CreatePostController_ts'
            });
            this.$stateProvider.state('detail', {
                url: "/detail-post/:id",
                templateUrl: '/views/detail.html',
                controller: 'DetailPostController_ts'
            });
            this.$stateProvider.state('edit', {
                url: "/edit-post/:id",
                templateUrl: '/views/edit.html',
                controller: 'EditPostController_ts'
            });
            this.$stateProvider.state('404', {
                url: "/404.html",
                templateUrl: '/views/404.html',
                title: '404 - Không tìm thấy trang yêu cầu'
            });
        };
        return Router;
    })();
    AppRouter.Router = Router;
})(AppRouter || (AppRouter = {}));
angular.module('appRoutes_ts', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouter.Router]);
//# sourceMappingURL=appRoutes_ts.js.map