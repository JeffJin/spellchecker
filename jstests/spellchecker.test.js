describe("spellChecker test", function () {
    var spellChecker,
        dictionary;

    beforeEach(function () {
        spellChecker = new SpellChecker(dict);
    });
    
    it("Dict get and set test", function () {
        spellChecker.check("key1", "value1");
        dict.set("key2", "value2");
        dict.set("key3", "value3");
        expect(dict.get("key1")).toBe("value1");
        expect(dict.get("key2")).toBe("value2");
        expect(dict.get("key3")).toBe("value3");
    });
    
    it("Dict remove test", function () {
        dict.set("key1", "value1");
        dict.set("key2", "value2");
        dict.set("key3", "value3");
        dict.remove("key3")
        expect(dict.has("key1")).toBe(true);
        expect(dict.has("key2")).toBe(true);
        expect(dict.has("key3")).toBe(false);
    });
});
