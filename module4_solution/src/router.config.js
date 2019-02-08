(function () {
    'use strict';
    angular.module('Menu')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider']
    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('homePage', {
                url: "/",
                templateUrl: "home.template.html"
            })
            .state('category', {
                url: "/category",
                templateUrl : "category.template.html",
                controller: 'CategoryController as ctrl',
                resolve: {
                    categories: ['MenuService', function (MenuService) {
                        return MenuService.retrieveCategory()
                            .then(function (categories) {
                                console.log(categories);
                                return categories;
                            })
                    }]
                }
            })
            .state('category.detail', {
                url: "/detail/{ItemId}",
                templateUrl : "category-item-display.template.html",
                controller: 'categoryItemDisplayController as detailctrl',
                resolve: {
                    itemSummary: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
                        return MenuService.retrieveItem($stateParams.ItemId)
                            .then(function (itemDetail) {
                                console.log(itemDetail);
                                return {
                                    itemId: $stateParams.ItemId,
                                    itemDetail: itemDetail
                                };
                            })
                    }]
                }
            })

    }
})();