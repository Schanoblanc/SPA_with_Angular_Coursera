(function(){
    'use strict';
    angular.module('Menu')
    .service("MenuService",MenuService);

    MenuService.$inject=['$http'];
    function MenuService($http){
        var service = this;
        service.retrieveCategory = function(){
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(function(response){
                return response.data;
            })
        }

        service.retrieveItem = function(itemId){
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json',{
                params:{
                    category : itemId
                }
            })
            .then(function(response){
                return response.data;
            })
        }
    }
})();