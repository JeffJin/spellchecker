'use strict';

var blogServiceModule = angular.module('myBlog.services', []);
/* Services */
blogServiceModule.factory('blogSharedService', function ($rootScope) {
    var sharedService = {};

    sharedService.entry = null;

    sharedService.prepForBroadcast = function (ent) {
        this.entry = ent;
        this.broadcastEntry();
    };

    sharedService.broadcastEntry = function () {
        $rootScope.$broadcast('handleEntryBroadcast');
    };

    return sharedService;
});


// Demonstrate how to register services
// In this case it is a simple value service.
blogServiceModule.value('version', '0.1');
blogServiceModule.value('entryUrl', 'http://172.16.107.202/blogweb/api/entry');
blogServiceModule.value('userUrl', 'http://172.16.107.202/blogweb/api/user');
blogServiceModule.value('roleUrl', 'http://172.16.107.202/blogweb/api/role');
