## [WindowTimers.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)

+ [Simple setTimeout demo --- setTimeout-demo-1.js](https://github.com/zhenizhui/demo/blob/master/js-asynchronous/js-setTimeout/setTimeout-demo-1.js)

> run `node setTimeout-demo-1.js`

and you will see the following

> After setTimeout
> foo has been called

Because

> even though setTimeout was called with a delay of zero, it's placed on a `queue` and scheduled to run at the next opportunity, not immediately. Currently executing code must complete before functions on the queue are executed, the resulting execution order may not be as expected

所以，setTimeout的真正意思是：在指定的毫秒数后，将定时任务处理的函数添加到`执行队列`的队尾。而不是，简单的在多少秒之后，执行一个函数