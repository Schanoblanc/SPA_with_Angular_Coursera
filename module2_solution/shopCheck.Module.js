(function() {
    'use strict';
    

    angular.module('shopCheck', [])
    .controller('ToBuyController',ToBuyController)
    .controller('BougthController',BoughtController)
    .service('checkerService',CheckService);

    ToBuyController.$inject = ['checkerService'];
    function ToBuyController(checkerService){
        var toBuyCtrl = this;
        toBuyCtrl.toBuyList = checkerService.getToBuyList();

        toBuyCtrl.Bought = function(itemIndex){
            checkerService.Bought(itemIndex);
        }

    }

    BoughtController.$inject = ['checkerService'];
    function BoughtController(checkerService){
        var bougthctrl = this;
        bougthctrl.bougthList = checkerService.getBoughtList();


    }

    function CheckService(){
        var service = this;
        var toBuyList = [
            {
                name : 'apples',
                quantity : '5'
            },
            {
                name : 'bananas',
                quantity : '5'
            },
            {
                name : 'carbage',
                quantity : '1',
                unit : 'bag'
            },
            {
                name : 'oranges',
                quantity : 5
            },
            {
                name : 'potatoes',
                quantity : 3
            }
        ];
        var BoughtList =[];

        service.getToBuyList = function(){
            return toBuyList;
        }
        service.getBoughtList = function(){
            return BoughtList;
        }
        service.Bought = function(itemIndex){
            var item = toBuyList[itemIndex];
            toBuyList.splice(itemIndex,1);
            BoughtList.push(item);
        }


    }
    

})();