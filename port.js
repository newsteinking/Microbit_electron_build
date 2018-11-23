var op = require('openport');

module.exports = function (callback) {
  op.find(function(err, port) {
    if (err) {
      console.log(err);
      callback(8085);
      return;
    }
    callback(port);
  });
};
