describe("spellChecker test", function () {
    var dictionary = ['apple', 'pear', 'banana', 'pie'],
        spellChecker = new SpellChecker(dictionary),
        startNode = document.getElementById('targetNode');

    beforeEach(function () {
        spellChecker.correctedWords = [];
        spellChecker.invalidWords = [];
    });
    
    it("Spell checker check valid spell test", function () {
        spellChecker.checkSpelling(document.createTextNode('apple'), false);
        expect(spellChecker.invalidWords.length).toBe(0);
    });    
    it("Spell checker check invalid spell test", function () {
        spellChecker.checkSpelling(document.createTextNode('applE'), false);
        spellChecker.checkSpelling(document.createTextNode('applE pie'), false);

        expect(spellChecker.invalidWords.length).toBe(1);

    });    
    it("Spell checker check multiple words spelling test", function () {

        spellChecker.checkSpelling(document.createTextNode('\n apple \n pie \r\n'), false);

        expect(spellChecker.invalidWords.length).toBe(0);
    });
    
    it("Spell checker parse node test", function () {
        spellChecker.parseNode(startNode, false);

        expect(spellChecker.invalidWords.length).toBe(5);
    });
    
});
