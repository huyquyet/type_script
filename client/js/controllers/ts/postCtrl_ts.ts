/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
// / <reference path="./service.ts"/>

//import some = require('Funnuy');

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
        $modal?: any;
        $http?: any;
        appAlert?: any;
        Post_ts?: any;
        $stateParams?:any;
    }

    export class ListPostController implements Arguments {
        linkGet:string = "/api/post/list";
        linkDelete:string = "/api/post/delete/";
        static $inject = ['$scope', '$state', 'flash', 'Post_ts'];

        constructor(public $scope, public $state, public flash, public Post_ts) {
            this.$scope.ts = this;
            this.listPost(this.linkGet);
            //some.Fun.get_data();
        }

        listPost(linkGet) {
            this.Post_ts.get_ts(linkGet).success((data) => {
                console.log(data);
                this.$scope.posts = data;
            });
            //    .error(() => {
            //    this.$scope.error = "Có lỗi trong quá trình tai bài viết";
            //});
        }

        deletePost_ts(post_id) {
            //this.appAlert.confirm({
            //    title: "Xác nhận xóa",
            //    message: "Bạn chắc chắn muốn xóa bài viết này ?"
            //}, (isOk) => {
            //    if (isOk) {
            this.Post_ts.delete_ts(this.linkDelete, post_id)
                .success(() => {
                    console.log(this.linkDelete + post_id);
                    this.flash.success = "Xóa bài viết thành công";
                    this.listPost(this.linkGet);
                })
                .error(() => {
                    this.flash.error = "Có lỗi trong quá trình xóa bài viết";
                });
        }

        //    });
        //}
    }

    export class CreatePostController implements Arguments {
        linkCreate = "/api/post/create";
        //linkDetail = "/api/post/detail/";
        static $inject = ['$scope', '$state', 'flash', '$http', 'Post_ts'];

        constructor(public $scope, public $state, public flash, public $http, public Post_ts) {
            $scope.Process_ts = false;
            $scope.formData = {};
            //$scope.createPost(this.linkCreate);
            this.$scope.ts = this;

        }

        createPost_ts = () => {
            this.$scope.Proccess_ts = true;
            if (!$.isEmptyObject(this.$scope.formData)) {
                this.Post_ts.create_ts(this.linkCreate, this.$scope.formData)
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
        static $inject = ['$scope', '$state', 'flash', '$http', '$stateParams', 'Post_ts'];

        constructor(public $scope, public $state, public flash, public $stateParams, public Post_ts) {
            //this.$scope.ts = this;
            console.log(this.$stateParams.id);
            console.log(this.linkDetail);

            this.detailPost(this.linkDetail, this.$stateParams.id);
        }

        detailPost(linkDetail, id){
            //console.log(linkDetail + id);
            this.Post_ts.detail_ts(linkDetail, id)

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
            //return this.$scope.post;
        }
    }

    export class EditPostController implements Arguments {
        linkEdit = "/api/post/edit";
        linkDetail = "/api/post/detail/";
        static $inject = ['$scope', '$state', 'flash', '$http', '$stateParams', 'Post_ts'];

        constructor(public $scope, public $state, public flash, public $stateParams, public Post_ts) {

                       this.$scope.ts = this;
            //var a = new DetailPostController(this.$scope, this.$state, this.flash, this.$stateParams, this.Post_ts);
            $scope.data = {};
            this.loadData(this.linkDetail, this.$stateParams.id);
        }

        loadData(linkDetail, id) {
            this.Post_ts.detail_ts(linkDetail, id)
                .success((data) => {
                    if (data.title != null) {
                        this.$scope.data = data;
                        //this.$scope.loading = false;
                    }
                });
        }

        editPost = () => {
            this.$scope.Proccess = true;
            if (!$.isEmptyObject(this.$scope.data)) {
                this.Post_ts.edit_ts(this.linkEdit, this.$scope.data)

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
         .controller('ListPostController_ts', ['$scope', '$state', 'flash', 'Post_ts', ListPostController])
         .controller('CreatePostController_ts', ['$scope', '$state', 'flash', 'Post_ts', CreatePostController])
         .controller('DetailPostController_ts', ['$scope', '$state', 'flash', '$stateParams', 'Post_ts', DetailPostController])
         .controller('EditPostController_ts', ['$scope', '$state', 'flash', '$stateParams', 'Post_ts', EditPostController]);


}
