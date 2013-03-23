

describe('expression test', function() {
    it('should allow user expression testing', function() {
        element('.expressions :button').click();
        var li = using('.expressions ul').repeater('li');
        expect(li.count()).toBe(1);
        expect(li.row(0)).toEqual(["3*10|currency", "$30.00"]);
    });
    
    it('should calculate expression in binding', function () {
        var alertText;
        this.addFutureAction('set mock', function ($window, $document, done) {
            $window.mockWindow = {
                alert: function (text) { alertText = text; }
            };
            done();
        });
        element(':button:contains(Greet)').click();
        expect(this.addFuture('alert text', function (done) {
            done(null, alertText);
        })).toBe('Hello World');
    });
});