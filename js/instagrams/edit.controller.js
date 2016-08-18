"use strict";

  (function(){
    angular
    .module("instagrams")
    .controller("InstagramEditController", [
      "InstagramFactory",
      "$stateParams",
      InstagramEditControllerFunction
    ]);

    function InstagramEditControllerFunction( InstagramFactory, $stateParams ){
      this.instagram = InstagramFactory.get({id: $stateParams.id});
      this.update = function(){
        this.instagram.$update({id: $stateParams.id})
      }
    }
  }());
