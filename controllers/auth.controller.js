class AuthController{
    
    constructor(roles) {
        this.roles = roles || [];
        this.user = {};
    }
    setRoles(roles){
        this.roles = roles;
        this.user.roles = roles;
    }
    setUser(inUser) {
        this.user = inUser;
    }
    isAuthorized(neededRole) {
        if(this.user){
            return this.user.isAuthorized(neededRole);

        }
    }
    isAuthorizedAsync(neededRole, cb){
        let roles = this.roles;
        setTimeout(function() {
            cb(roles.indexOf(neededRole) >= 0)
        }, 2100);
    }
    isAuthorizedPromise(neededRole){
        let roles = this.roles;
        return new Promise((resolve) => {
            resolve(roles.indexOf(neededRole) >= 0)
        });
    }
    getIndex(req, res) {
        try {
            if(req.user.isAuthorized('admin')) {
                return res.render('index');
            }
            res.render('notAuth');
        }catch(e) {
            res.render('error');
        }
        
    }
}
export default new AuthController;