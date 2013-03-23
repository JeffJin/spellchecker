beforeEach(function() {
  this.addMatchers({
    toHaveSameId: function(expectedItem) {
      var item = this.actual;
      return item && expectedItem && expectedItem && item.id === expectedItem.id;
    }
  });
});
