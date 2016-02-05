
module mean{
    declare var angular;
    export class Post {
        static $inject = ['$http'];
        constructor(private $http) {
            return {
                get_ts(url) {
                    return $http.get(url);
                },
                create_ts(url, data) {
                    //  '/api/post/create'
                    return $http.post(url, data);
                },
                detail_ts(url, id) {
                    //  'api/post/detail/
                    return $http.get(url + id);
                },
                delete_ts(url, id) {
                    //  '/api/post/delete/'
                    return $http.delete(url + id);
                },
                edit_ts(url, data) {
                    //  '/api/post/edit'
                    return $http.post(url, data);
                }
            }
        }

    }
    angular.module('postService_ts', []).factory('Post_ts', ['$http', Post]);

}

