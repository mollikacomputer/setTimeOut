const doSomething = ()=>{
    console.log('Do somthing Function here');
}
const doAnotherFunction = () =>{
    console.log('Another Function Running here');
}
console.log('First: I am first');
console.log('Second: I am second');
setTimeout(doSomething, 4000);
console.log('Third : I am third');
console.log('Fourth : I am fourth');
setTimeout(doAnotherFunction, 2000);