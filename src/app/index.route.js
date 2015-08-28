(function() {
  'use strict';

  angular
    .module('eventPlannerNew')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/testjanitha', {
        templateUrl: 'app/testjanitha/testjanitha.html',
        controller: 'TestJanithaController',
        controllerAs: 'testjanitha',
        title: 'Home Page',
        //css:'home.css'
      })

      .when('/testjh', {
        templateUrl: 'app/testjh/testjh.html',
        controller: 'TestjhController',
      //  controllerAs: 'testjanitha',
        title: 'Home Page',
        //css:'home.css'
      })



      .otherwise({
        redirectTo: '/'
      });
  }

})();
