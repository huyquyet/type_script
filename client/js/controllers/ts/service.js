//export class Service {
//    static $inject = ['$http'];
//    //constructor(private $http) {
//    //}
//
//    get_ts($http, url){
//        // '/api/post/list'
//        return $http.get(url);
//    }
//    //create_ts = (url, data) => {
//    // //  '/api/post/create'
//    //    return this.$http.post(url, data);
//    //};
//    //
//    // detail_ts = (url, id) => {
//    // //  'api/post/detail/
//    //    return this.$http.get(url + id);
//    //};
//    //
//    // delete_ts = (url, id) => {
//    // //  '/api/post/delete/'
//    //    return this.$http.delete(url + id);
//    //};
//    //
//    // edit_ts = (url, data) => {
//    // //  '/api/post/edit'
//    //    return this.$http.post(url , data);
//    //};
//}
//module Service {
//
//    export class GetPost {
//        //static $inject = ['$http'];
//        public $http;
//
//        constructor(public url) {
//            return this.$http.get(url);
//        }
//    }
//
//    export class CreatePost {
//        static $inject = ['$http'];
//        public $http;
//
//        constructor(public url, public data) {
//            return this.$http.post(url, data);
//        }
//    }
//
//    export class DetailPost {
//        static $inject = ['$http'];
//        public $http;
//
//        constructor(public url:string, public id:string) {
//            return this.$http.get(url + id)
//        }
//    }
//
//    export class EditPost {
//        static $inject = ['$http'];
//        public $http;
//
//        constructor(public url:string, public data) {
//            return this.$http.post(url, data)
//        }
//    }
//
//    export class DeletePost {
//        static $inject = ['$http'];
//        public $http;
//
//        constructor(public url:string, public id:string) {
//            return this.$http.delete(url + id)
//        }
//    }
//}
function get_ts($http, url) {
    return $http.get(url);
}
//# sourceMappingURL=service.js.map