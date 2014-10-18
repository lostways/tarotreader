'use strict';

angular.module('tarotReaderApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
