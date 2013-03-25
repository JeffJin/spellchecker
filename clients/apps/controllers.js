'use strict';


/* Controllers */
function SpellCheckerCtrl($scope, dictService) {
    $('#markItUp').markItUp(mySettings);
    $('a[title="Preview"]').trigger('mouseup');
    var spellChecker = new SpellChecker(dictService.en_ca);

    $scope.checkSpell = function() {
        $('a[title="Preview"]').trigger('mouseup');
        $scope.invalidWords = [];
        
        var iframeDocument = $('.markItUpPreviewFrame')[0].contentDocument
            || $('.markItUpPreviewFrame')[0].contentWindow.document;
        //clean up the invalid words list
        spellChecker.invalidWords = [];
        spellChecker.parseNode(iframeDocument.body, false);
        $scope.invalidWords = spellChecker.invalidWords;
    };
}
SpellCheckerCtrl.$inject = ['$scope', 'dictService'];

