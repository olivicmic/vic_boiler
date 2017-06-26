'use strict';

angular.module('victorBoilerApp')
  .service('headerCore', function() {
  	var setState = function(current) {
  		this.current = current;
  	};
    return {setState: setState};
  });
