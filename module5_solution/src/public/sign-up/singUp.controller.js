(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ["UserRegisterationService"];
    function SignUpController(UserRegisterationService) {
      var signUpCtrl = this;
      signUpCtrl.Submited=false;
      signUpCtrl.Submit=function(){
        signUpCtrl.Submited=true;
        UserRegisterationService.Register(signUpCtrl.user.firstName,signUpCtrl.user.lastName,signUpCtrl.user.email,signUpCtrl.user.phone,signUpCtrl.user.favorite);
        UserRegisterationService.RegisterObj(signUpCtrl.user);
        console.log("Submited");
      }
    }
    
    })();
    