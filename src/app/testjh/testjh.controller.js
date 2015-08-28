/**
 * Created by Janitha on 8/28/2015.
 */
'use strict'

angular
  .module('eventPlannerNew')
  .controller('TestjhController',['$scope',function($scope){
    console.log("testjhcontroller loaded");
    $scope.login= function() {
      console.log("clicked");
      $scope.name = "janitha";
      $scope.title = "hi";
      //$http.get("/checklist")
    }
  }])
