/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
var mean;
(function (mean) {
    var ListPostController = (function () {
        function ListPostController($scope, $state, flash, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.linkGet = "/api/post/list";
            this.linkDelete = "/api/post/delete/";
            this.deletePost_ts = function (post_id) {
                //this.appAlert.confirm({
                //    title: "Xác nhận xóa",
                //    message: "Bạn chắc chắn muốn xóa bài viết này ?"
                //}, (isOk) => {
                //    if (isOk) {
                _this.$http.delete(_this.linkDelete + post_id).success(function () {
                    console.log(_this.linkDelete + post_id);
                    _this.flash.success = "Xóa bài viết thành công";
                    _this.listPost(_this.linkGet);
                }).error(function () {
                    _this.flash.error = "Có lỗi trong quá trình xóa bài viết";
                });
                //    }
                //});
            };
            this.$scope.ts = this;
            this.listPost(this.linkGet);
        }
        ListPostController.prototype.listPost = function (linkGet) {
            var _this = this;
            this.$http.get(linkGet).success(function (data) {
                console.log(data);
                _this.$scope.posts = data;
            });
            //    .error(() => {
            //    this.$scope.error = "Có lỗi trong quá trình tai bài viết";
            //});
        };
        ListPostController.$inject = ['$scope', '$state', 'flash', '$http'];
        return ListPostController;
    })();
    mean.ListPostController = ListPostController;
    var CreatePostController = (function () {
        function CreatePostController($scope, $state, flash, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.linkCreate = "/api/post/create";
            this.createPost_ts = function () {
                _this.$scope.Proccess_ts = true;
                if (!$.isEmptyObject(_this.$scope.formData)) {
                    _this.$http.post(_this.linkCreate, _this.$scope.formData).success(function (data) {
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
        CreatePostController.$inject = ['$scope', '$state', 'flash', '$http',];
        return CreatePostController;
    })();
    mean.CreatePostController = CreatePostController;
    var DetailPostController = (function () {
        function DetailPostController($scope, $state, flash, $http, $stateParams) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.linkDetail = "/api/post/detail/";
            this.linkEdit = "/api/post/edit";
            this.detailPost = function (linkDetail, id) {
                _this.$http.get(linkDetail + id).success(function (data) {
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
                return _this.$scope.post;
            };
            //this.$scope.ts = this;
            console.log(this.$stateParams.id);
            console.log(this.linkDetail);
            console.log(this.linkDetail + this.$stateParams.id);
            this.detailPost(this.linkDetail, this.$stateParams.id);
        }
        DetailPostController.$inject = ['$scope', '$state', 'flash', '$http', '$stateParams'];
        return DetailPostController;
    })();
    mean.DetailPostController = DetailPostController;
    var EditPostController = (function () {
        //static $inject = ['$scope', '$state','flash', '$http','$stateParams'];
        function EditPostController($scope, $state, flash, $http, $stateParams) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.flash = flash;
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.linkEdit = "/api/post/edit";
            this.editPost = function () {
                _this.$scope.Proccess = true;
                if (!$.isEmptyObject(_this.$scope.post)) {
                    _this.$http.post(_this.linkEdit, _this.$scope.post).success(function (data) {
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
            var a = new DetailPostController(this.$scope, this.$state, this.flash, this.$http, this.$stateParams);
        }
        return EditPostController;
    })();
    mean.EditPostController = EditPostController;
    angular.module('postCtrl_ts', []).controller('ListPostController_ts', ['$scope', '$state', 'flash', '$http', ListPostController]).controller('CreatePostController_ts', ['$scope', '$state', 'flash', '$http', CreatePostController]).controller('DetailPostController_ts', ['$scope', '$state', 'flash', '$http', '$stateParams', DetailPostController]).controller('EditPostController_ts', ['$scope', '$state', 'flash', '$http', '$stateParams', EditPostController]);
})(mean || (mean = {}));
//# sourceMappingURL=postCtrl_ts.js.map