const userOne = {
    username: 'sam',
    email: 'sam@gmail.com',
    login(){
        console.log('login');
    },
    logout(){
        console.log('logout');
    }
};

console.log(userOne.username , userOne.email);
userOne.login();