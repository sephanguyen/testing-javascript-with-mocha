import {expect} from "chai";
import AuthController from "../../controllers/auth.controller"

describe('AuthenController', function() {
    beforeEach(function settingUpRoles() {
        AuthController.setRoles(['user']);
    })
    describe('isAuthorized', function() {
        
        it('Should return false if not authorized', function() {
            expect(false).to.equal(AuthController.isAuthorized('admin'));
        });
        it('Should return true if authorized', function() {
            AuthController.setRoles(['user', 'admin']);
            expect(true).to.equal(AuthController.isAuthorized('admin'));
        });
    });
    describe('isAuthorizedAsyc', function() {
        // because callback settimeout 2100
        this.timeout(2500);

        it('Should return false if not authorized', function(done) {
            AuthController.isAuthorizedAsync('admin', function(isAuth) {
                expect(false).to.equal(isAuth);
                done();
            })

        });
        it('Should return true if authorized', function(done) {
            AuthController.setRoles(['user', 'admin']);
            AuthController.isAuthorizedAsync('admin', function(isAuth) {
                expect(true).to.equal(isAuth);
                done();
            })
        });
    });
});