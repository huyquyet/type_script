/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="./service.ts"/>

//import service = require('./Service');

module mean {
    declare var angular;

    export interface Post {
        _id: string;
        title: string;
        description: string;
        content: string;
        creationDate: string;
    }

    // export interface
    interface Arguments {
        $scope: ng.IScope;
        $state: any;
        linkGet?: string;
        linkCreate?: string;
        linkDetail?: string;
        linkEdit?: string;
        linkDelete?: string;
        flash?: any;
        //$modal?: any;
        $http?: any;
        //appAlert?: any;
        Post_ts?: any;
        $stateParams?:any;
    }

    export class ListPostController implements Arguments {
        linkGet:string = "/api/post/list";
        linkDelete:string = "/api/post/delete/";
        static $inject = ['$scope', '$state', 'flash', '$http'];

        constructor(public $scope, public $state, public flash, public $http) {
            this.$scope.ts = this;
            this.listPost(this.linkGet);
        }

        listPost(linkGet) {
            this.$http.get(linkGet).success((data) => {
                console.log(data);
                this.$scope.posts = data;
            });
            //    .error(() => {
            //    this.$scope.error = "Có lỗi trong quá trình tai bài viết";
            //});
        }

        deletePost_ts = (post_id) => {
            //this.appAlert.confirm({
            //    title: "Xác nhận xóa",
            //    message: "Bạn chắc chắn muốn xóa bài viết này ?"
            //}, (isOk) => {
            //    if (isOk) {
            this.$http.delete(this.linkDelete + post_id)
                .success(() => {
                    console.log(this.linkDelete + post_id);
                    this.flash.success = "Xóa bài viết thành công";
                    this.listPost(this.linkGet);
                })
                .error(() => {
                    this.flash.error = "Có lỗi trong quá trình xóa bài viết";
                });
            //    }
            //});
        }
    }

    export class CreatePostController implements Arguments {
        linkCreate = "/api/post/create";
        //linkDetail = "/api/post/detail/";
        static $inject = ['$scope', '$state', 'flash', '$http',];

        constructor(public $scope, public $state, public flash, public $http) {
            $scope.Process_ts = false;
            $scope.formData = {};
            //$scope.createPost(this.linkCreate);
            this.$scope.ts = this;

        }

        createPost_ts = () => {
            this.$scope.Proccess_ts = true;
            if (!$.isEmptyObject(this.$scope.formData)) {
                this.$http.post(this.linkCreate, this.$scope.formData)
                    .success((data) => {
                        this.$scope.formData = {};
                        this.$scope.form.$setPristine();
                        this.$scope.Proccess_ts = false;
                        this.flash.success = "Thêm bài viết mới thành công!";
                        this.$state.go("list");
                    })
                    .error((data) => {
                        console.log(data);
                        this.flash.error = "Có lỗi trong quá trình thêm bài viết.";
                    });
            }
            else {
                this.flash.error = "Bạn cần điền đầy đủ các mục.";
                this.$scope.Proccess_ts = false;
            }
        }
    }

    export class DetailPostController implements Arguments {
        linkDetail = "/api/post/detail/";
        linkEdit = "/api/post/edit";
        static $inject = ['$scope', '$state', 'flash', '$http', '$stateParams'];

        constructor(public $scope, public $state, public flash, public $http, public $stateParams) {
            //this.$scope.ts = this;
            console.log(this.$stateParams.id);
            console.log(this.linkDetail);
            console.log(this.linkDetail + this.$stateParams.id);
            this.detailPost(this.linkDetail, this.$stateParams.id);
        }

        detailPost = (linkDetail, id):Post => {

            this.$http.get(linkDetail + id)
                .success((data) => {
                    if (data.title != null) {
                        this.$scope.post = data;
                        this.$scope.loading = false;
                    }
                    else {
                        this.$state.go('404');
                    }
                })
                .error(() => {
                    console.log("error");
                });
            return this.$scope.post;
        };
    }

    export class EditPostController implements Arguments {
        linkEdit = "/api/post/edit";
        //static $inject = ['$scope', '$state','flash', '$http','$stateParams'];

        constructor(public $scope, public $state, public flash, public $http, public $stateParams) {
            this.$scope.ts = this;
            var a = new DetailPostController(this.$scope, this.$state, this.flash, this.$http, this.$stateParams);
        }

        editPost = () => {
            this.$scope.Proccess = true;
            if (!$.isEmptyObject(this.$scope.post)) {
                this.$http.post(this.linkEdit, this.$scope.post)
                    .success((data) => {
                        this.$scope.Proccess = false;
                        this.flash.success = "Sửa bài viết thành công!";
                        this.$state.go('list');
                    })
                    .error(() => {
                        this.flash.error = "Có lỗi trong quá trình sửa bài viết.";
                    });
            }
            else {
                this.flash.error = "Bạn cần điền đầy đủ các mục.";
                this.$scope.Proccess = false;
            }
        }
    }
    angular.module('postCtrl_ts', [])
        .controller('ListPostController_ts', ['$scope', '$state', 'flash', '$http', ListPostController])
        .controller('CreatePostController_ts', ['$scope', '$state', 'flash', '$http', CreatePostController])
        .controller('DetailPostController_ts', ['$scope', '$state', 'flash', '$http', '$stateParams', DetailPostController])
        .controller('EditPostController_ts', ['$scope', '$state', 'flash', '$http', '$stateParams', EditPostController]);

}
