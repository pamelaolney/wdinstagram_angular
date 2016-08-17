"use strict";

(function(){
  angular
  .module("instagram", [
    "ui.router",
    "instagrams"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("instagramIndex", {
      url: "/instagrams",
      templateUrl: "js/instagrams/index.html",
      controller: "InstagramIndexController",
      controllerAs: "InstagramIndexViewModel"
    })
    .state("instagramShow", {
      url: "/instagrams/:id",
      templateUrl: "js/instagrams/show.html"
    });
  }
})();
