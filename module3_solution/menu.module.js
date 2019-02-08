(function () {
    'use strict';
    angular.module('MenuApp', [])
        .controller('MenuController', MenuController)
        .service('MenuService', MenuService)
        .directive('foundItems', foundItems)
        .controller('foundItemsController', foundItemsController)

    MenuController.$inject = ['MenuService']
    function MenuController(MenuService) {
        var ctrl = this;
        ctrl.searchTerm="";
        ctrl.successFound = true;

        ctrl.findInMenu = function (searchTerm) {
            if(searchTerm.replace(" ","") === ""){
                ctrl.successFound = false;
                ctrl.menu = [];
                return;
            }
            MenuService.retrieveMenu(searchTerm)
                .then(updateMenu)
        }

        ctrl.removeItem = function (index) {
            MenuService.removeItem(index)
        }

        function updateMenu() {
            ctrl.menu = MenuService.GetMenu()
            ctrl.successFound = ctrl.menu.length > 0;
        }

    }

    function foundItems() {
        return {
            restrict: 'E',
            templateUrl: 'found-item.template.html',
            scope: {
                foundItems: "<",
                onRemove: '&'
            },
            controller: "foundItemsController as fiCtrl",
            bindToController: true
        }
    }

    function foundItemsController() {
        var fiCtrl = this;
    }

    MenuService.$inject = ['$http']
    function MenuService($http) {
        var service = this;
        var menu = [];
        service.GetMenu = function () {
            return menu;
        }
        service.retrieveMenu = function (searchTerm) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
                .then(function (response) {
                    menu = _.filter(response.data.menu_items, function (aMenu) {
                        return aMenu.description.includes(searchTerm)
                    });
                })
        }

        service.removeItem = function (index) {
            menu.splice(index, 1);
        }
    }

})();