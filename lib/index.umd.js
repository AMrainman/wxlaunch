(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["vue-plugins"] = factory());
})(this, (function () { 'use strict';

  var main = (() => {
    console.log(1234);
    console.log(1234);
  })();

  return main;

}));
