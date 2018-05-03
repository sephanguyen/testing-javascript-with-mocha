import chai from 'chai';
import rewire from 'rewire';
import sinon from 'sinon';
var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();

chai.should();
var getUser;
describe('gitController', function() {
    beforeEach(function() {
        var gitService = GitCtrl.__get__('gitService');
        getUser = sinon.spy(gitService, 'getUser');
        GitCtrl.__set__('gitService', gitService);
    });
    it.only('should get user and repos from git service', function(done) {
        this.timeout(10000);
        let req = {params: {userId: 'sephanguyen'}};

        let res = {json: test};
        function test(user) {
            getUser.getCall(0).args[0].should.equal('sephanguyen');
            getUser.calledOnce.should.be.true;
            user.login.should.equal('sephanguyen');
            done();
        }

        gitController.userGet(req, res);
    })
})