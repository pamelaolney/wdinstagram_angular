"use strict",

(function(){
  angular
  .module("instagram")
  .controller("InstagramShowController", [
    "$stateParams",
    IndexShowControllerFunction
  ])

  function IndexShowControllerFunction($stateParams){
    this.instagram = instagrams[$stateParams.id];
  }

}());
