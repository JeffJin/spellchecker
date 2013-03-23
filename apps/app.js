'use strict';


// Declare app level module which depends on filters, and services
angular.module('myBlog', ['myBlog.filters', 'myBlog.services', 'myBlog.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/bloglist', {templateUrl: 'templates/bloglist.html', controller: BlogListCtrl});
    $routeProvider.when('/blogdetails/:id', { templateUrl: 'templates/blogdetails.html', controller: BlogDetailsCtrl });
    $routeProvider.when('/blogedit/:id', { templateUrl: 'templates/blogedit.html', controller: BlogEditCtrl });
    $routeProvider.when('/blognew', { templateUrl: 'templates/blognew.html', controller: BlogNewCtrl });
//    $routeProvider.when('/projectlist', { templateUrl: 'templates/projectlist.html', controller: ProjectListCtrl });
//    $routeProvider.when('/albumlist', { templateUrl: 'templates/albumlist.html', controller: AlbumListCtrl });
//    $routeProvider.when('/manage', { templateUrl: 'templates/manage.html', controller: AdminCtrl });
    $routeProvider.otherwise({ redirectTo: '/bloglist' });
  }]);
