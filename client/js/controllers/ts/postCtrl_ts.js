/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
// / <reference path="./service.ts"/>
//import some = require('Funnuy');
var mean;
(function (mean) {
    var ListPostController = (function () {
        function ListPostController($scope, $state, flash, Post_ts) {
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.Post_ts = Post_ts;
            this.linkGet = "/api/post/list";
            this.linkDelete = "/api/post/delete/";
            this.$scope.ts = this;
            this.listPost(this.linkGet);
            //some.Fun.get_data();
        }
        ListPostController.prototype.listPost = function (linkGet) {
            var _this = this;
            this.Post_ts.get_ts(linkGet).success(function (data) {
                console.log(data);
                _this.$scope.posts = data;
            });
            //    .error(() => {
            //    this.$scope.error = "Có lỗi trong quá trình tai bài viết";
            //});
        };
        ListPostController.prototype.deletePost_ts = function (post_id) {
            var _this = this;
            //this.appAlert.confirm({
            //    title: "Xác nhận xóa",
            //    message: "Bạn chắc chắn muốn xóa bài viết này ?"
            //}, (isOk) => {
            //    if (isOk) {
            this.Post_ts.delete_ts(this.linkDelete, post_id).success(function () {
                console.log(_this.linkDelete + post_id);
                _this.flash.success = "Xóa bài viết thành công";
                _this.listPost(_this.linkGet);
            }).error(function () {
                _this.flash.error = "Có lỗi trong quá trình xóa bài viết";
            });
        };
        ListPostController.$inject = ['$scope', '$state', 'flash', '$http', 'Post_ts'];
        return ListPostController;
    })();
    mean.ListPostController = ListPostController;
    var CreatePostController = (function () {
        function CreatePostController($scope, $state, flash, $http, Post_ts) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.Post_ts = Post_ts;
            this.linkCreate = "/api/post/create";
            this.createPost_ts = function () {
                _this.$scope.Proccess_ts = true;
                if (!$.isEmptyObject(_this.$scope.formData)) {
                    _this.Post_ts.create_ts(_this.linkCreate, _this.$scope.formData).success(function (data) {
                        _this.$scope.formData = {};
                        _this.$scope.form.$setPristine();
                        _this.$scope.Proccess_ts = false;
                        _this.flash.success = "Thêm bài viết mới thành công!";
                        _this.$state.go("list");
                    }).error(function (data) {
                        console.log(data);
                        _this.flash.error = "Có lỗi trong quá trình thêm bài viết.";
                    });
                }
                else {
                    _this.flash.error = "Bạn cần điền đầy đủ các mục.";
                    _this.$scope.Proccess_ts = false;
                }
            };
            $scope.Process_ts = false;
            $scope.formData = {};
            //$scope.createPost(this.linkCreate);
            this.$scope.ts = this;
        }
        //linkDetail = "/api/post/detail/";
        CreatePostController.$inject = ['$scope', '$state', 'flash', '$http', 'Post_ts'];
        return CreatePostController;
    })();
    mean.CreatePostController = CreatePostController;
    var DetailPostController = (function () {
        function DetailPostController($scope, $state, flash, $stateParams, Post_ts) {
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$stateParams = $stateParams;
            this.Post_ts = Post_ts;
            this.linkDetail = "/api/post/detail/";
            //this.$scope.ts = this;
            console.log(this.$stateParams.id);
            console.log(this.linkDetail);
            this.detailPost(this.linkDetail, this.$stateParams.id);
        }
        DetailPostController.prototype.detailPost = function (linkDetail, id) {
            var _this = this;
            //console.log(linkDetail + id);
            this.Post_ts.detail_ts(linkDetail, id).success(function (data) {
                if (data.title != null) {
                    _this.$scope.post = data;
                    _this.$scope.loading = false;
                }
                else {
                    _this.$state.go('404');
                }
            }).error(function () {
                console.log("error");
            });
            //return this.$scope.post;
        };
        DetailPostController.$inject = ['$scope', '$state', 'flash', '$http', '$stateParams', 'Post_ts'];
        return DetailPostController;
    })();
    mean.DetailPostController = DetailPostController;
    var EditPostController = (function () {
        function EditPostController($scope, $state, flash, $http, $stateParams, Post_ts) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.Post_ts = Post_ts;
            this.linkEdit = "/api/post/edit";
            this.linkDetail = "/api/post/detail/";
            this.editPost = function () {
                _this.$scope.Proccess = true;
                if (!$.isEmptyObject(_this.$scope.data)) {
                    _this.Post_ts.edit_ts(_this.linkEdit, _this.$scope.data).success(function (data) {
                        _this.$scope.Proccess = false;
                        _this.flash.success = "Sửa bài viết thành công!";
                        _this.$state.go('list');
                    }).error(function () {
                        _this.flash.error = "Có lỗi trong quá trình sửa bài viết.";
                    });
                }
                else {
                    _this.flash.error = "Bạn cần điền đầy đủ các mục.";
                    _this.$scope.Proccess = false;
                }
            };
            this.$scope.ts = this;
            //var a = new DetailPostController(this.$scope, this.$state, this.flash, this.$stateParams, this.Post_ts);
            $scope.data = {};
            this.loadData(this.linkDetail, this.$stateParams.id);
        }
        EditPostController.prototype.loadData = function (linkDetail, id) {
            var _this = this;
            this.Post_ts.detail_ts(linkDetail, id).success(function (data) {
                if (data.title != null) {
                    _this.$scope.data = data;
                }
            });
        };
        EditPostController.$inject = ['$scope', '$state', 'flash', '$http', '$stateParams', 'Post_ts'];
        return EditPostController;
    })();
    mean.EditPostController = EditPostController;
    angular.module('postCtrl_ts', []).controller('ListPostController_ts', ['$scope', '$state', 'flash', 'Post_ts', ListPostController]).controller('CreatePostController_ts', ['$scope', '$state', 'flash', 'Post_ts', CreatePostController]).controller('DetailPostController_ts', ['$scope', '$state', 'flash', '$stateParams', 'Post_ts', DetailPostController]).controller('EditPostController_ts', ['$scope', '$state', 'flash', '$stateParams', 'Post_ts', EditPostController]);
})(mean || (mean = {}));
//# sourceMappingURL=postCtrl_ts.js.map