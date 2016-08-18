"use strict";

(function(){
  angular
  .module("instagrams")
  .controller("InstagramNewController", [
    "InstagramFactory",
    InstagramNewControllerFunction
  ]);


  function InstagramNewControllerFunction(InstagramFactory){
    var vm = this
    vm.instagram = new InstagramFactory();
    vm.create = function(){
      vm.instagram.$save();
    }
  }

}());
