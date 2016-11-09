function A(){

}

A.prototype = {
  aa:'aa',
  method: function(){

  }
}

var a = new A;
var b = new A;

console.log( a.aa === b.aa);//true
console.log(a.method === b.method);//true

/**
 * 定义在原型上的方法和属性为所有实例共享
 * 
 */
