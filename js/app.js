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
    .state("instagramNew", {
      url: "/instagrams/new",
      templateUrl: "js/instagrams/new.html",
      controller: "InstagramNewController",
      controllerAs: "InstagramNewViewModel"
    })
    .state("instagramShow", {
      url: "/instagrams/:id",
      templateUrl: "js/instagrams/show.html",
      controller: "InstagramShowController",
      controllerAs: "InstagramShowViewModel"
    });
  }
})();
