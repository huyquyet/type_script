"use strict";
function indexs(app) {
    app.get('*', function (req, res) {
        res.sendfile('client/index.html');
    });
}
exports.indexs = indexs;
//# sourceMappingURL=indexs.js.map