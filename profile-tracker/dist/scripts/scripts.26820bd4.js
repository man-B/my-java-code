"use strict";function configure(a,b,c){a.state("profile",{url:"/profile",templateUrl:"views/profile.html",controller:"ProfileCtrl",controllerAs:"ProfileCtrl"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"AboutCtrl"})}angular.module("profileTrackerApp",["ngAnimate","ngCookies","ngSanitize","ui.router","ngTouch","ui.bootstrap","smart-table"]),angular.module("profileTrackerApp").config(configure),configure.$inject=["$stateProvider","$urlRouterProvider","$httpProvider"],angular.module("profileTrackerApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("profileTrackerApp").controller("ProfileCtrl",["$scope","$uibModal",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.profiles=[],a.addProfile=function(){var c=b.open({templateUrl:"myModalContent.html",controller:ModalInstanceCtrl,resolve:{profile:function(){return a.profile}}});c.result.then(function(b){a.profiles.push(b)},function(){})}}]);var ModalInstanceCtrl=function(a,b,c){a.profile=c,a.ok=function(){b.close(a.profile)},a.cancel=function(){b.dismiss("cancel")}};angular.module("profileTrackerApp").directive("profileTable",function(){return{templateUrl:"views/table.html",restrict:"E",link:function(a,b,c){}}}),angular.module("profileTrackerApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the About view.</p>"),a.put("views/main.html",'<div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/profile.html",'<p>This is the profile view.</p> <button type="button" class="btn btn-primary" ng-click="addProfile()">Add Profile</button> <div> <script type="text/ng-template" id="myModalContent.html"><div class="modal-header">\n            <h3>Profile Details!</h3>\n        </div>\n         <div class="form-group" ng-class="{\'has-error\': rc.userForm.needsAttention(userForm.addressType)}">\n             \n         </div>\n        <div class="modal-body">\n	        <form>\n	        <label>Sex</label>\n	    		<div class="btn-group">\n			        <label class="btn btn-default" ng-model="profile.profileSex" uib-btn-radio="\'Male\'">Male</label>\n			        <label class="btn btn-default" ng-model="profile.profileSex" uib-btn-radio="\'Female\'">Female</label>\n			    </div>\n			    <br><br>\n	            <label>Name</label>\n	    		<input type="text" ng-model="profile.name" class="form-control">\n				<br>\n\n			    <label>Email</label>\n	    		<input type="text" ng-model="profile.email" class="form-control" type="email">\n			</form>\n        </div>\n        <div class="modal-footer">\n            <button class="btn btn-primary" ng-click="ok()">OK</button>\n            <button class="btn btn-warning" ng-click="cancel()">Cancel</button>\n        </div></script> <profile-table></profile-table> <!-- <div ng-repeat="profile in profiles">\n    	{{profile.name}}\n     	{{profile.email}}\n      	{{profile.profileSex}}\n    </div> --> </div>'),a.put("views/table.html",'<div ng-repeat="profile in profiles"> {{profile.name}} {{profile.email}} {{profile.profileSex}} </div> <table st-table="profiles" class="table"> <thead> <tr> <th st-sort="firstName">first name</th> <th st-sort="email">email</th> <th st-sort="sex">sex</th> </tr> </thead> <tbody> <tr st-select-row="row" st-select-mode="multiple" ng-repeat="profile in profiles"> <td>{{profile.name | uppercase}}</td> <td>{{profile.email}}</td> <td>{{profile.profileSex}}</td> </tr> </tbody> </table>')}]);