import db = require( "../models/posts");

export function indexs(app) {
  app.get('*', function (req, res) {
      res.sendfile('client/index.html');
  });
}
