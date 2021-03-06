// if else & else if statements
// logical operators ( OR || - and && )

const password = 'abc#d23';

if(password.length >= 12 && password.includes('#')){
    console.log("Password if super strong");
}else if(password.length >= 8 || password.includes('#')) {
    console.log("Password is Strong");
}else{
    console.log("Password is too week");
}