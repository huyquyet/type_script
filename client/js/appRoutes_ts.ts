/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module AppRouter {
    declare var angular;
    export class Router {
        //static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

        constructor(private $stateProvider:ng.ui.IStateProvider, private urlRouterProvider:ng.ui.IUrlRouterProvider, private $locationProvider:ng.ILocationProvider) {
            this.state();
        }

        private state():void {
            this.urlRouterProvider.otherwise("/404.html");
            this.$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            this.$locationProvider.hashPrefix('!');
            this.$stateProvider.state('home', <ng.ui.IState>{
                url: "/",
                templateUrl: "views/home.html",
                controller: 'baseController_ts'

            });
            this.$stateProvider.state('list', <ng.ui.IState>{
                url: "/list-post",
                templateUrl: "/views/list.html",
                controller: 'ListPostController_ts'

            });
            this.$stateProvider.state('list.detail', <ng.ui.IState>{
                url: "/detail-post/:id",
                templateUrl: '/views/detail.html',
                parent: 'list',
                controller: 'DetailPostController_ts'
            });
            this.$stateProvider.state('list.edit', <ng.ui.IState>{
                url: "/edit-post/:id",
                templateUrl: '/views/edit.html',
                controller: 'EditPostController_ts'
            });
            this.$stateProvider.state('create', <ng.ui.IState>{
                url: "/create-post",
                templateUrl: "/views/create.html",
                parent: 'list',
                controller: 'CreatePostController_ts'
            });
            this.$stateProvider.state('detail', <ng.ui.IState>{
                url: "/detail-post/:id",
                templateUrl: '/views/detail.html',
                controller: 'DetailPostController_ts'
            });
            this.$stateProvider.state('edit', <ng.ui.IState>{
                url: "/edit-post/:id",
                templateUrl: '/views/edit.html',
                controller: 'EditPostController_ts'
            });
            this.$stateProvider.state('404', <ng.ui.IState>{
                url: "/404.html",
                templateUrl: '/views/404.html',
                title: '404 - Không tìm thấy trang yêu cầu'
            });
        }
    }
}
angular.module('appRoutes_ts', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
    return new AppRouter.Router($stateProvider, $urlRouterProvider, $locationProvider);
}]);