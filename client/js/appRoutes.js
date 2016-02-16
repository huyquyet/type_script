angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        /*Điều hướng 404*/
        $urlRouterProvider.otherwise("/404.html");
        /*Thiết lập các state*/
         $stateProvider
             .state('home', {
                 url: "/",
                 templateUrl: "views/home.html",
                 controller: 'baseController_ts'
             })
             .state('list', {
                 url: "/list-post",
                 views : {
                     //"view_list": {
                     //    templateUrl: "/views/list.html",
                     //    controller: 'ListPostController_ts'
                     //},
                     "": {
                         templateUrl: "/views/list.html",
                         controller: 'ListPostController_ts'
                     }
                 }
                 //controller: 'ListPostController_ts'
                 //controllerAs:"list-post"
             })
             .state('list.detail', {
                 url: "/detail-post/:id",
                 templateUrl: '/views/detail.html',
                 controller: 'DetailPostController_ts'
             })
             .state('list.edit', {
                 url: "/edit-post/:id",
                 templateUrl: '/views/edit.html',
                 controller: 'EditPostController_ts'
             })
             //.state('list', {
             //    url: "/list-post",
             //    templateUrl: "/views/list.html",
             //    controller: 'ListPostController_ts'
             //    //controllerAs:"list-post"
             //})
             .state('create', {
                 url: "/create-post",
                 templateUrl: "/views/create.html",
                 controller: 'CreatePostController_ts'
             })
             .state('detail', {
                 url: "/detail-post/:id",
                 templateUrl: '/views/detail.html',
                 controller: 'DetailPostController_ts'
             })
             .state('edit', {
                 url: "/edit-post/:id",
                 templateUrl: '/views/edit.html',
                 controller: 'EditPostController_ts'
             })
             /*===============404 NOT FOUND================*/
             .state('404', {
                 url: "/404.html",
                 templateUrl: '/views/404.html',
                 title: '404 - Không tìm thấy trang yêu cầu'
             });

        //$stateProvider
        //    .state('home', {
        //        url: "/",
        //        templateUrl: "views/home.html",
        //        controller: 'baseController'
        //
        //    })
        //    .state('list', {
        //        url: "/list-post",
        //        templateUrl: "views/list.html",
        //        controller: 'ListPostController'
        //
        //    })
        //    .state('create', {
        //        url: "/create-post",
        //        templateUrl: "views/create.html",
        //        controller: 'CreatePostController'
        //    })
        //    .state('detail', {
        //        url: "/post/detail/:id",
        //        templateUrl: 'views/detail.html',
        //        controller: ' '
        //    })
        //    .state('edit', {
        //        url: "/post/edit/:id",
        //        templateUrl: 'views/edit.html',
        //        controller: 'DetailPostController'
        //    })
        //    /*===============404 NOT FOUND================*/
        //    .state('404', {
        //        url: "/404.html",
        //        templateUrl: 'views/404.html',
        //        title: '404 - Không tìm thấy trang yêu cầu'
        //    });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }]);
