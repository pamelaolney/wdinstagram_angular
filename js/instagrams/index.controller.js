"use strict";

(function(){
  angular
  .module("instagrams")
  .controller("InstagramIndexController", [
    "InstagramService",
    InstagramIndexControllerFunction
  ]);

  function InstagramIndexControllerFunction(InstagramService){
    this.instagrams = InstagramFactory.query();
  }
}());
