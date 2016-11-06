var person = {};

/**
 * 要修改属性默认的特性。必须使用ECMAScript5的Object.defineProperty()方法。
 * 这个方法接受三个参数：属性所在的对象，属性的名字和一个描述符对象
 * 其中描述符对象的属性必须是：configurable, enumerable, writable, value
 * 设置其中的一个或多个，可以修改对应的特性值
 */

/**
 * 数据属性
 * [[Configurable]], 默认值是true。表示能否通过delete删除属性从而重新定义属性
 * [[Enumerable]], 默认值是true。表示能否通过for-in循环返回属性
 * [[Writable]], 默认是true。表示能否修改属性
 * [[Value]], 默认值是undefined。这个属性的数据值
 */

//给person对象添加一个属性name，该属性不能给重写
Object.defineProperty(person, 'name', {
		writable: false,
		value: 'zhenizhui'
	})
	//给person对象添加一个属性age
Object.defineProperty(person, 'age', {
	value: 22
})

console.log(person.name); //zhenizhui
console.log(person.age); //22

/**
 * 访问器属性
 * [[Configurable]], 默认值是true。表示能否通过delete删除属性从而重新定义属性
 * [[Enumerable]], 默认值是true。表示能否通过for-in循环返回属性
 * [[Get]] 默认值是undefined 在读取属性时调用的函数
 * [[Set]] 默认值是undefined 在写入属性时调用
 */

var book = {};

Object.defineProperties(book, {
	_year: 2004,
	edition: 1
});

Object.defineProperty(book, 'year', {
	get: function() {
		return this._year;
	},
	set: function(newValue) {
		if(newValue > 2004) {
			this._year = newValue;
		} else {
			console.log("_year's value must bigger than 2004");
		}
	}
})


console.log(book.year);
