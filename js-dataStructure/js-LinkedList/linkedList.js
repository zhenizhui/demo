// js 链表的实现
function LinkedList() {

  // 节点
  var Node = function (el) {
    this.el = el;
    this.next = null;
  };
  
  var length = 0;
  var head = null;

  // 向链表尾部添加一个新的项
  this.append = function (el) {
    var node = new Node(el);
    var current;

    // 链表中的第一个节点
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 循环列表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项，将其next赋值为node，建立链接
      current.next = node;
    }

    length++;
  };

  // 向链表的特定位置插入一个新的项。
  this.insert = function (position, el) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(el);
      var current = head;
      var previous ;
      var index = 0;

      // 如果是在第一个位置插入的话
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  // 从链表的特定位置移除一项。
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head;
      var index = 0;
      var previous;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // 将previous和current的下一项连接起来，跳过current，从而移除它
        previous.next = current.next;
      }

      length--;

      return current.el
    } else {
      return null;
    }
  };

  // 从链表中移除一项
  this.remove = function (el) {
    var index = this.indexOf(el);
    return this.removeAt(index);
  };

  // 返回元素在链表中的索引。如果链表中没有该元素则返回 -1
  this.indexOf = function (el) {
    var current = head;
    var index = 0;

    while (current) {
      if (el === current.el) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  // 如果链表中不包含任何元素,返回 true ,如果链表长度大于0则返回 false
  this.isEmpty = function (el) {
    return length === 0;
  };

  // 返回链表包含的元素个数。与数组的 length 属性类似
  this.size = function () {
    return length;
  };

  // 获取链表的头部
  this.getHead = function () {
    return head;
  };

  // 打印链表
  this.print = function () {
    var current = head;
    var string = '';
    while (current) {
      string += current.el;
      current = current.next;
    }

    return string;
  };
}