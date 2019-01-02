// use IIFE to prevent global variable pollution
(function () {
    'use strict';

    angular
        .module('MenuRecommend', [])
        .controller('ControllerController', MenuRecommendController);

    MenuRecommendController.$inject = ['$scope'];
    function MenuRecommendController($scope) {
        $scope.order = "";
        $scope.orderList = [];
        $scope.message = "";
        $scope.Recommend = function (order) {
            var orderList = order.split(',').filter((anDish) => { return anDish != "" });
            $scope.orderList = orderList;
            var orderNumber = orderList.length;

            switch (true) {
                case orderNumber === 0:
                    $scope.state = 'think';
                    $scope.message = "Not Yet Order Any Menu";
                    break;
                case orderNumber <= 3:
                    $scope.state = 'contente';
                    $scope.message = 'Enjoy';
                    break;
                default:
                    $scope.state = 'full';
                    $scope.message = orderNumber + ' Dishes Are Too Much';
            }

        }
    }


})();



