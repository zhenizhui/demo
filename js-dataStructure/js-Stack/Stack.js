// 栈的实现
function Stack() {
  var items = [];
  // 添加元素
  this.push = function (el) {
    items.push(el);
  };
  // 删除元素
  this.pop = function () {
    return items.pop();
  };
  // 返回栈顶元素
  this.peek = function () {
    return items[items.length - 1];
  };
  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  // 返回栈的长度
  this.size = function () {
    return items.length;
  };
  // 移除栈的所有元素
  this.clear = function () {
    items = [];
  };
  // 打印栈里面的所有元素
  this.print = function () {
    console.log(items.toString());
  };
}