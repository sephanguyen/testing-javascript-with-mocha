class AuthController{
    
    constructor(roles) {
        this.roles = roles || [];
    }
    setRoles(roles){
        this.roles = roles;
    }

    isAuthorized(neededRole) {

        return this.roles.indexOf(neededRole) >= 0
    }
    isAuthorizedAsync(neededRole, cb){
        let roles = this.roles;
        setTimeout(function() {
            cb(roles.indexOf(neededRole) >= 0)
        }, 2100);
    }
}
export default new AuthController;