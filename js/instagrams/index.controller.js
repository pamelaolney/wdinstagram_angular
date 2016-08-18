"use strict";

(function(){
  angular
  .module("instagrams")
  .controller("InstagramIndexController", [
    "InstagramFactory",
    InstagramIndexControllerFunction
  ]);

  function InstagramIndexControllerFunction(InstagramFactory){
    this.instagrams = InstagramFactory.query();
  }
}());
