"use strict",

(function(){
  angular
  .module("instagram")
  .controller("InstagramShowController", [
    "InstagramFactory",
    "$stateParams",
    IndexShowControllerFunction
  ])

  function IndexShowControllerFunction(InstagramFactory, $stateParams){
    this.instagram = InstagramFactory.get({id: $stateParams.id});
  }

}());
