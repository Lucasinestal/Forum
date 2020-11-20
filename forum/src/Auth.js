const Auth = {
    isAuthenticated: false,
    authenticate() {
    this.isAuthenticated = localStorage.getItem("token");
    },
    signout() {
    this.isAuthenticated = localStorage.clear();
    },
    getAuth() {
    return this.isAuthenticated;
    }
    };
    export default Auth;