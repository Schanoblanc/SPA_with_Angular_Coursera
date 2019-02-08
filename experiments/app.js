(function () {
    'use strict';
    angular.module('M', [])
        .component('com1', {
            controller: function () {
                console.log('com1')
            }
        });

        angular.module('M')
        .component('com2', {
            controller: function () {
                console.log('com2')
            }
        });

        angular.module('M',[])
        .component('com3', {
            controller: function () {
                console.log('com3')
            }
        });

})();