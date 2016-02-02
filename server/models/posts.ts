import mongodb = require("mongodb");

let server = new mongodb.Server("localhost", 27017, { auto_reconnect: true });
let db = new mongodb.Db("mean", server, { w: 1 });
db.open(function() {
});

export interface Post {
  _id: mongodb.ObjectID;
  title: string;
  description: string;
  content: string;
  creationDate: string;
}

export function getPost(id: string, callback: (post: Post) => void) {
  db.collection("post", function(err, post) {
    if (err) {
      console.error(err);
      return;
    }
    post.findOne({ _id: new mongodb.ObjectID(id) }, function(err, post) {
      if (err) {
        console.error(err);
        return;
      }
      callback(post);
    });
  });
}

export function getPosts(callback: (post: Post) => void) {
  db.collection("post", function(err, post) {
    if (err) {
      console.error(err);
      return;
    }
    post.find({}, function(err, post) {
      if (err) {
        console.error(err);
        return;
      }
      return post;
    });
  });
}
