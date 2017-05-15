// 队列的实现
function Queue() {
  var items = [];
  // 向队列尾部添加一个元素
  this.enqueue = function (el) {
    items.push(el);
  };
  // 移除队列的第一个元素
  this.dequeue = function () {
    return items.shift();
  };
  // 返回队列中第一个元素，也就是最先被添加的
  this.front = function () {
    return items[0];
  };
  // 判断队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  // 清空队列
  this.clear = function () {
    items = [];
  };
  // 返回队列长度
  this.size = function () {
    return items.length;
  }
}