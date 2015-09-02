/**
 * Created by THILANKA on 02/09/2015.
 */

'use strict'

angular
  .module('eventPlannerNew')
  .controller('HomeController',['$scope',function($scope){
    console.log("homecontroller loaded");
    $scope.login= function() {
      console.log("clicked");
      $scope.name = "janitha";
      $scope.title = "hi";
      $http.get("/checklist")
    }
  }])
