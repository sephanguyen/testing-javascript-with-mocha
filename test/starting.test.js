import { should } from "chai";

describe('Basic Mocha Test', function() {
    it('should deal with objects', function() {
        let obj = {name: 'Jon', gender: 'male'};
        let objB = {name: 'Jon', gender: 'male'};
        // obj.should.have.property('name').equal('Jon');
        //compare value not comapre adress used deep
        obj.should.deep.equal(objB);
    });
    it('should allow testing nulls', function() {
        let iAmNull = null;
        should().not.exist(iAmNull);
        //not found because iAmNull not a object
        // iAmNull.should.not.exist;
    })
});