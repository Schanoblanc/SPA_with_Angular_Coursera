(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ["UserRegisterationService","ApiPath"];
    function MyInfoController(UserRegisterationService,ApiPath) {
      var myInfoCtrl = this;
      myInfoCtrl.basePath=ApiPath;
      myInfoCtrl.registered = UserRegisterationService.IsRegistered();
      myInfoCtrl.user = UserRegisterationService.RetrieveInfo();
      myInfoCtrl.userObj=UserRegisterationService.RetrieveInfoObj();
      console.log("registered",myInfoCtrl.registered);
      console.log(myInfoCtrl.user);
      console.log(myInfoCtrl.userObj)
    }
    
    })();
    