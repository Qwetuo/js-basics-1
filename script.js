const x = 5.25;
console.log('The value of x is', x)

let y = 'Hello!'
console.log(y);

var z = true;
console.log(z);

const sum = x + 15;
console.log(sum);

const bodyClass = document.body.className;
console.log(bodyClass);

document.body.className = "loading";
console.log(bodyClass);

const randomNumber = Math.random()
console.log(randomNumber);

const mainClass = document.getElementsByTagName('main');
console.log(mainClass);

// console.log(document.getElementsByTagName('body'))
console.log(document.querySelector('p').textContent)

function hello() {
    alert('Hello, world!')
    console.log("I am the hello function")
}


hello();

function hi(name) {
    return ("Hi, " + name + "!")
}

console.log(hi('John'));

function add(num1,num2){
    return num1 + num2;
}

// function random5(){
//     return Math.ceil(Math.random()*5)
// }

 const random5 = () => Math.ceil(Math.random()*5);

console.log(add(1,2))
console.log(random5())
