"use strict";

(function(){
  angular
  .module("instagrams")
  .controller("InstagramIndexController", [
    InstagramIndexControllerFunction
  ]);

  function InstagramIndexControllerFunction(){
    this.instagrams = instagrams;
  }
}());
