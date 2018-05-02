import { expect, should } from "chai";
import AuthController from "../../controllers/auth.controller"
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import authController from "../../controllers/auth.controller";
import sinon from 'sinon';

chai.use(chaiAsPromised);
chai.should();
should();

describe('AuthenController', function() {
    beforeEach(function settingUpRoles() {
        AuthController.setRoles(['user']);
    })
    describe('isAuthorized', function() {
        let user = {};
        beforeEach(function() {
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
            sinon.spy(user, 'isAuthorized');
            AuthController.setUser(user);
        });
        it('Should return false if not authorized', function() {
            let isAuthen = AuthController.isAuthorized('admin');
            //expect(false).to.equal(AuthController.isAuthorized('admin'));
            user.isAuthorized.calledOnce.should.be.true;
            expect(isAuthen).to.be.false;
        });
        it('Should return true if authorized', function() {
            AuthController.setRoles(['user', 'admin']);
            let isAuthen = AuthController.isAuthorized('admin');
            //expect(true).to.equal(AuthController.isAuthorized('admin'));
            //expect(isAuthen).to.be.true;
            isAuthen.should.be.true;
        });
    });
    describe('isAuthorizedAsyc', function() {
        // because callback settimeout 2100
        this.timeout(2500);

        it('Should return false if not authorized', function(done) {
            AuthController.isAuthorizedAsync('admin', function(isAuth) {
                //expect(false).to.equal(isAuth);
                expect(isAuth).to.be.false;
                done();
            })

        });
        it('Should return true if authorized', function(done) {
            AuthController.setRoles(['user', 'admin']);
            AuthController.isAuthorizedAsync('admin', function(isAuth) {
                expect(isAuth).to.be.true;
                done();
            })
        });
    });
    describe('isAuthorizedPromise', function() {
        // because callback settimeout 2100
        this.timeout(2500);

        it('Should return false if not authorized', function() {
            return AuthController.isAuthorizedPromise('admin').should.eventually.be.false;

        });
        it('Should return true if authorized', function() {
            AuthController.setRoles(['user', 'admin']);
            return AuthController.isAuthorizedPromise('admin').should.eventually.be.true;
        });
    });

    describe('getIndex', function() {
        let user = {};
        beforeEach(function() {
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
        });
        it('should render index if authorized', function() {
            let isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            // if error
            //let isAuth = sinon.stub(user, 'isAuthorized').throws();

            var req = {user: user};
            var res = {
                // render: sinon.spy()
                render: function(){}
            }
            let mock = sinon.mock(res);
            mock.expects('render').once().withExactArgs('index');

            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;
            // res.render.calledOnce.should.be.true;
            // res.render.firstCall.args[0].should.equal('index');
            mock.verify();
        });
    });
});