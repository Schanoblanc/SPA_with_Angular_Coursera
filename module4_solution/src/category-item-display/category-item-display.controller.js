(function () {
    'use strict';
    angular.module('Menu')
        .controller('categoryItemDisplayController', categoryItemDisplayController)

    categoryItemDisplayController.$inject = ['itemSummary']
    function categoryItemDisplayController(itemSummary) {
        var ctrl = this;
        ctrl.itemSummary = itemSummary

    }
})();