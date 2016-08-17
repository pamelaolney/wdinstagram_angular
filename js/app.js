"use strict";

(function(){
  angular
  .module("wdinstagram", [
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
      url: "/grumbles",
      templateUrl: "js/instagrams/index.html",
      controller: "InstagramIndexController",
      controllerAs: "InstagramIndexViewModel"
    })
    .state("instagramShow", {
      url: "/grumbles/:id",
      templateUrl: "js/instagrams/show.html"
    });
  }
})();
