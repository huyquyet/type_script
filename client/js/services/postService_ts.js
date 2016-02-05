var mean;
(function (mean) {
    var Post = (function () {
        function Post($http) {
            this.$http = $http;
            return {
                get_ts: function (url) {
                    return $http.get(url);
                },
                create_ts: function (url, data) {
                    //  '/api/post/create'
                    return $http.post(url, data);
                },
                detail_ts: function (url, id) {
                    //  'api/post/detail/
                    return $http.get(url + id);
                },
                delete_ts: function (url, id) {
                    //  '/api/post/delete/'
                    return $http.delete(url + id);
                },
                edit_ts: function (url, data) {
                    //  '/api/post/edit'
                    return $http.post(url, data);
                }
            };
        }
        Post.$inject = ['$http'];
        return Post;
    })();
    mean.Post = Post;
    angular.module('postService_ts', []).factory('Post_ts', ['$http', Post]);
})(mean || (mean = {}));
//# sourceMappingURL=postService_ts.js.map