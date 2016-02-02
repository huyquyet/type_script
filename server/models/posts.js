"use strict";
var mongodb = require("mongodb");
var server = new mongodb.Server("localhost", 27017, { auto_reconnect: true });
var db = new mongodb.Db("mean", server, { w: 1 });
db.open(function () {
});
function getPost(id, callback) {
    db.collection("post", function (err, post) {
        if (err) {
            console.error(err);
            return;
        }
        post.findOne({ _id: new mongodb.ObjectID(id) }, function (err, post) {
            if (err) {
                console.error(err);
                return;
            }
            callback(post);
        });
    });
}
exports.getPost = getPost;
function getPosts(callback) {
    db.collection("post", function (err, post) {
        if (err) {
            console.error(err);
            return;
        }
        post.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return;
            }
            return post;
        });
    });
}
exports.getPosts = getPosts;
//# sourceMappingURL=posts.js.map