class User {
    constructor(username, email){
        //set up properties
        this.username = username;
        this.email = email
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this; 
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email)
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username)
    }
}

const userOne = new User('Sam', 'sam@gmail.com');
const userTwo = new User('Mark', 'mark@gmail.com');
const userThree = new Admin('John', 'john@gmail.com', 'Accountant');

console.log(userThree);


// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object