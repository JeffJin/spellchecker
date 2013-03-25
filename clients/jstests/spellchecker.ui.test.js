describe("spellChecker test", function () {
    var dictionary = ['apple', 'pear', 'banana', 'pie'],
        spellChecker = new SpellChecker(dictionary),
        startNode = document.getElementById('targetNode');

    beforeEach(function () {
        spellChecker.correctedWords = [];
        spellChecker.invalidWords = [];
    });
    
    it("Spell checker parse node test", function () {
        spellChecker.parseNode(startNode, false);

        expect(spellChecker.invalidWords.length).toBe(5);
    });
    
});
