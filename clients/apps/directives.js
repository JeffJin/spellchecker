'use strict';

/* Directives */
var myDirs = angular.module('myBlog.directives', []);

myDirs.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);

myDirs.directive('blogRow', ['$parse', function ($parse) {
    return {
        restrict: 'EA',
        transclude: true, // It transcludes the contents of the directive into the template
        replace: true, // The element containing the directive will be replaced with the template
        templateUrl: 'templates/directive/entryrow.html',
        scope: {// Create an isolated scope and interpolate the entry attribute onto this scope
             entry: '='
        }, 
        link: function (scope, element, attrs) {
            console.log(scope.entry.Id + ': ' +scope.entry.Title);
        }
    };
}]);
