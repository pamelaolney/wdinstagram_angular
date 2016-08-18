"use strict";

(function(){
  angular
  .module("instagrams")
  .factory("InstagramFactory", [
    "$resource",
    InstagramFactoryFunction
  ]);

  function InstagramFactoryFunction($resource){
    return $resource("http://localhost:3000/entries/:id");
  }
}());
