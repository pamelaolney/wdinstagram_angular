"use strict";

(function(){
  angular
  .module("instagrams")
  .factory( "InstagramFactory", [
    InstagramFactoryFunction
  ]);

  function InstagramFactoryFunction(){
    return $resource( "http://localhost:3000/instagrams/:id");
  }
}());
