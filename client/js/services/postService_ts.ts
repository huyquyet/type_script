module mean{
    declare var angular;
    export class Post {
        //static $inject = ['$http'];
        constructor(private $http) {
        }
       get_ts = (url) => {
         // '/api/post/list'
            return this.$http.get(url);
       };

       //create_ts = (url, data) => {
       // //  '/api/post/create'
       //    return this.$http.post(url, data);
       //};
       //
       // detail_ts = (url, id) => {
       // //  'api/post/detail/
       //    return this.$http.get(url + id);
       //};
       //
       // delete_ts = (url, id) => {
       // //  '/api/post/delete/'
       //    return this.$http.delete(url + id);
       //};
       //
       // edit_ts = (url, data) => {
       // //  '/api/post/edit'
       //    return this.$http.post(url , data);
       //};
  }
    angular.module('postService_ts', []).factory('Post_ts', ['$http', Post]);
}
