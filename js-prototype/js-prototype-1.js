function A(){

}

A.prototype = {
  aa:'aa',
  method: function(){

  }
}

var a = new A;
var b = new A;

console.log("a.aa === b.aa ==> "+ a.aa === b.aa);
console.log("a.method === b.method ==> "+a.method === b.method);
