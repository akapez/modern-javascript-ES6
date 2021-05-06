//object literals

let user = {
  name: 'Sam',
  age: 24,
  email: 'sam@test.com',
  fruits: [
    { basket: 'Apple', likes: 20 },
    { basket: 'Banana', likes: 25 },
  ],
  login: function () {
    console.log('the user login')
  },
  logout: function () {
    console.log('the user logout')
  },
  fruitsName() {
    // console.log(this.fruits)
    console.log('My favorite fruits')
    this.fruits.forEach((fruit) => {
      console.log(fruit.basket, fruit.likes)
    })
  },
}

user.login();
user.fruitsName()
