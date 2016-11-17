## [WindowTimers.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)

+ [Simple setTimeout demo --- setTimeout-demo-1.js](https://github.com/zhenizhui/demo/blob/master/js-asynchronous/js-setTimeout/setTimeout-demo-1.js)

> run `node setTimeout-demo-1.js`

```
function foo() {
    console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');

```

and you will see the following

> After setTimeout

> foo has been called

Because

> even though setTimeout was called with a delay of zero, it's placed on a `queue` and scheduled to run at the next opportunity, not immediately. Currently executing code must complete before functions on the queue are executed, the resulting execution order may not be as expected

所以，setTimeout的真正意思是：在指定的毫秒数后，将定时任务处理的函数添加到`执行队列`的队尾。而不是，简单的在多少秒之后，执行一个函数

> 调用setTimeout的时候，会有一个延时事件排入队列。然后setTimeout调用之后的那行代码运行，接着是再下一行代码，直到再也没有任何代码。这时候，javascript虚拟机才会问“队列里都有谁啊？”

> 如果队列中至少有一个事件适合于“触发”（我们刚写的`setTimeout(foo, 0);`），则虚拟机会挑选一个事件，并调用这个事件的处理器（这里就是foo函数）。事件处理器返回后，我们又回到了队列里面

### 相关阅读

[JavaScript的单线程和异步](https://zhuanlan.zhihu.com/p/23659122)
[javascript线程问题](http://blog.csdn.net/kfanning/article/details/5768776)