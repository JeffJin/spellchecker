var SpellChecker = function (dict) {
    var self = this;
    var _dict = dict;
    self.invalidWords = [];
    self.correctedWords = [];

    self.checkSpelling = function (node, correct) {
        var whitespace = /^\s+|\s+$|\r\n|\n|\r/g;
        //clear whitespace and new line text nodes and check spelling against dictaionary
        if (node.nodeType === 3) {
            var text = node.data.replace(whitespace, "");

            if (text) {
                console.log("Check spelling for '" + text + "'");
                var words = text.split(' ');
                
                _.each(words, function (word) {
                    if (_.contains(_dict, word)) {
                        //valid spelling
                        console.log("... The word '" + word + "' has no spelling error");
                    } else {
                        //TODO check if it is number or symbols
                        //invalid spelling
                        console.log("... The word '" + word + "' has spelling error");
                        if (word !="" && !_.contains(self.invalidWords, word)) {
                            self.invalidWords.push(word);
                        }
                    }
                });
            }
        }
        return false;
    };
    
    self.parseNode = function (startNode, correct) {
        var nodes;
        if (!startNode) {
            throw new Error('Invalid starting node');
        }
        //spell check the curretn target node
        self.checkSpelling.call(self, startNode, correct);
        nodes = startNode.childNodes;
        if (nodes) {
            for (var i = 0, len = nodes.length; i < len; i++) {
                this.parseNode.call(self, nodes[i], correct);
            }
        }
    };

    return self;
};

SpellChecker.prototype = function () {
    
    return {
    };
}();