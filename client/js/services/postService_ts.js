var mean;
(function (mean) {
    var Post = (function () {
        //static $inject = ['$http'];
        function Post($http) {
            var _this = this;
            this.$http = $http;
            this.get_ts = function (url) {
                // '/api/post/list'
                return _this.$http.get(url);
            };
        }
        return Post;
    })();
    mean.Post = Post;
    angular.module('postService_ts', []).factory('Post_ts', ['$http', Post]);
})(mean || (mean = {}));
//# sourceMappingURL=postService_ts.js.map