console.log('Event Loop Start');

setTimeout(() => {
    console.log("This task delay by 5 seconds");
}, 2000)

console.log('Event Loop End')


console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
