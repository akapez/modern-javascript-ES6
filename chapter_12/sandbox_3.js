//constructor function

function User(username, email){
    this.username = username;
    this.email = email;
   
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this
};

// class User {
//     constructor(username, email){
//         //set up properties
//         this.username = username;
//         this.email = email;
//     }
// }


function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

const userOne = new User('Sam', 'sam@gmail.com');
const userTwo = new User('Mark', 'mark@gmail.com');
const userThree = new Admin('John', 'john@gmail.com', 'Accountant');


console.log(userOne, userTwo, userThree);
userOne.login().logout();

