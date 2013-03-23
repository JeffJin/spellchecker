'use strict';


/* Controllers */
function BlogListCtrl($scope, $http, entryUrl) {
    $scope.url = entryUrl + '?size=100';
    $scope.entries = [];

    $scope.fetch = function () {
        $http.get($scope.url).success(function (data, status) {
            $scope.entries = data;
        });
    };

    $scope.fetch();
}
BlogListCtrl.$inject = ['$scope', '$http', 'entryUrl'];


function BlogDetailsCtrl($scope, blogSharedService, $http, $routeParams, entryUrl) {
    $scope.url = entryUrl + '/' + $routeParams.id;
    $scope.currentEntry = {};
    $scope.$on('handleEntryBroadcast', function () {
        $scope.currentEntry = blogSharedService.entry;
    });

    $scope.fetch = function () {
        //try to get it from sharedService
        if (blogSharedService.entry) {
            $scope.currentEntry = blogSharedService.entry;
        } else {
            //if not available, get it from server
            $http.get($scope.url).success(function (data, status) {
                $scope.currentEntry = data;
                blogSharedService.prepForBroadcast(data);
            });
        }
    };

    $scope.fetch();
}
BlogDetailsCtrl.$inject = ['$scope', 'blogSharedService', '$http', '$routeParams', 'entryUrl'];

function BlogEditCtrl($scope, blogSharedService, $http, $routeParams, $location, entryUrl) {
    $scope.url = entryUrl + '/' + $routeParams.id;
    $scope.currentEntry = {};
    
    $scope.$on('handleEntryBroadcast', function () {
        $scope.currentEntry = blogSharedService.entry;
    });
    $scope.save = function () {
        $http.put($scope.url, $scope.currentEntry)
            .success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                console.log($scope.data);
                $location.path("/");
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                console.log($scope.data);
            });
    };

    $scope.fetch = function() {
        //try to get it from sharedService
        if (blogSharedService.entry) {
            $scope.currentEntry = blogSharedService.entry;
        } else {
            //if not available, get it from server
            $http.get($scope.url).success(function(data, status) {
                $scope.currentEntry = data;
                blogSharedService.prepForBroadcast(data);
            });
        }
    };

    $scope.fetch();
}
BlogEditCtrl.$inject = ['$scope', 'blogSharedService', '$http', '$routeParams', '$location', 'entryUrl'];

function BlogNewCtrl($scope, $http, $routeParams, $location, entryUrl) {
    $scope.currentEntry = {};
    $scope.save = function () {
        $http.post(entryUrl, $scope.currentEntry)
            .success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                console.log($scope.data);
                $location.path("/blogdetails/" + data);
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                console.log($scope.data);
            });
    };
}
BlogNewCtrl.$inject = ['$scope', '$http', '$routeParams', '$location', 'entryUrl'];

