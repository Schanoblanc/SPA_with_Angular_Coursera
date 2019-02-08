(function(){
    'use strict';
    angular.module('Menu')
    .controller('CategoryController',CategoryController)

    CategoryController.$inject=['categories']
    function CategoryController(categories){
        var $ctrl = this;
        $ctrl.categories = categories;

    }
})();