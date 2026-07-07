function hello(name){
    if(name == undefined){
        return 'Hello'
    }
    return `Hello ${name}`;
}

const greet = hello();
console.log(greet);
console.log(hello('Vishesh'))
console.log(greet);

function mult(a, b){
    return a * b;
}

function add(a, b){
    return a + b;
}

function div(a, b){
    return a/b;
}

console.log(div(50/4, 50/10));