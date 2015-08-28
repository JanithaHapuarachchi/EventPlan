(function() {
  'use strict';

  angular
    .module('eventPlannerNew')
      .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }





})();
