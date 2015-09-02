/**
 * Created by Janitha on 8/27/2015.
 */

'use strict'

angular
  .module('eventPlannerNew')
  .controller('LoginController',['$scope',function($scope){
    console.log("homecontroller loaded");
    $scope.login= function() {
      console.log("clicked");
      $scope.name = "janitha";
      $scope.title = "hi";
      $http.get("/checklist")
    }
  }])
