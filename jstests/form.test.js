

describe('form test', function () {
    var sum;

    beforeEach(function () {
        sum = 1 + 1;
    });

    it('Controller.reset should make master and user equal', function () {
        var scopeMock = {};
        var cntl = new Controller(scopeMock);

        expect(scopeMock.master).toEqual({});

        // Assert that we read new username and greet
        scopeMock.master.name = 'angular';
        scopeMock.master.email = 'angular@jeffjin.com';
        scopeMock.reset();
        expect(scopeMock.master).toEqual(scopeMock.user);
    });
    
});