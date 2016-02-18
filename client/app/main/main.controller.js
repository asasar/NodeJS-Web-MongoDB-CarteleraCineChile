'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.cines = [];
    this.peliculas = [];
    this.showOnlyThisCine = '' 

    $http.get('/api/cines').then(response => {
      this.cines = response.data;
    });
    
    $http.get('/api/peliculas').then(response => {
      this.peliculas = response.data;
    });
  }

  showCine(peli){
    if (peli.showme) {
      peli.showme = false;
    }else{
      peli.showme = true;
    }
  }
  unCine(cine){
    this.showOnlyThisCine= cine.name;
  }
  todos(){
   this.showOnlyThisCine = '' ; 
  }
  showInfoCinePeli(){
   return this.showOnlyThisCine != '';
  }
}

angular.module('wwwApiApp')
  .controller('MainController', MainController);

})();
