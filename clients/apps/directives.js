'use strict';

/* Directives */
var sc = angular.module('spellChecker.directives', []);

sc.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);
