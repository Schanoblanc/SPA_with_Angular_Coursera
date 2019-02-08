(function () {
    "use strict";

    angular.module('common')
        .service('UserRegisterationService', UserRegisterationService);


    UserRegisterationService.$inject = ['$http', 'ApiPath'];
    function UserRegisterationService($http, ApiPath) {
        var service = this;
        service.user = {};

        service.registered = false;
        service.IsUserRegistered = function () { return service.registered };

        service.Register = function (firstName, lastName, email, phone, favoriteShortname) {
            service.firstName = firstName;
            service.lastName = lastName;
            service.email = email;
            service.phone = phone;
            service.favoriteShortname = favoriteShortname;
            service.registered = true;

        }

        service.RegisterObj = function (user) {
            service.user = user;
            service.registered = true
        }

        service.RetrieveInfo = function () {
            return {
                firstName: service.favoriteShortname,
                lastName: service.lastName,
                email: service.email,
                phone: service.phone,
                favoriteShortname: service.favoriteShortname
            }
        }

        service.RetrieveInfoObj = function () {
            return service.user
        }

        service.IsRegistered = function(){return service.registered}

    }



})();
