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
       // controllerAs: 'main'
      })

      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        // controllerAs: 'main'
      })


      .when('/server', {
        templateUrl: 'myapp/app.js',
        //controller: 'TestjhController',
        //  controllerAs: 'testjanitha',
        //title: 'Home Page',
        //css:'home.css'
      })

      .when('/createevent', {
        templateUrl: 'app/createevent/createevent.html',
        //controller: 'CreateeventController',
        //  controllerAs: 'testjanitha',
        //title: 'Home Page',
        //css:'home.css'
      })

      .when('/viewevent', {
        templateUrl: 'app/viewevent/viewevent.html',
        //controller: 'VieweventController',
        //  controllerAs: 'testjanitha',
        //title: 'Home Page',
        //css:'home.css'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        // controllerAs: 'main'

      })

      .otherwise({
        redirectTo: '/'
      });
  }

})();
