function foo() {
    console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');
