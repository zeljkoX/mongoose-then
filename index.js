var mongoose = require('mongoose');
var Promise = mongoose.Promise;


Promise.prototype.then = function (onFulfill, onReject) {
  var newPromise = new Promise;

  if ('function' == typeof onFulfill) {
    return this.on(Promise.SUCCESS, onFulfill);
  } else {
    this.onFulfill(newPromise.fulfill.bind(newPromise));
  }

  if ('function' == typeof onReject) {
    this.on(Promise.FAILURE, onReject);
  } else {
    this.onReject(newPromise.reject.bind(newPromise));
  }

  return newPromise;
};

module.exports = exports = {};