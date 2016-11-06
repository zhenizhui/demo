## 面向对象的js

### 关于访问器属性和数据属性
定义一个对象的时候，只能选则一种方式来定义
```
Object.defineProperty(person, 'age', {
	value: 22,
	get: function(){
		return this.age;
	},
	set: function(newValue){
		if(newValue > 20){
			this._year = newValue;
		}else{
			console.log("age's value must bigger than 20");
		}
	}
})
```
上面这种定义方式会报错
`TypeError: Invalid property.  A property cannot both have accessors and be writable or have a value, #<Object>`

因为

> Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. 
A data descriptor is a property that has a value, which may or may not be writable. 
An accessor descriptor is a property described by a getter-setter pair of functions. 
A descriptor must be one of these two flavors; it cannot be both.

[这里有个例子](http://stackoverflow.com/questions/19349309/wrong-behaviour-in-google-chrome-object-defineproperty)

不过，可以使用Object.defineProperties()来一次性定义多个
```
Object.defineProperties(book, {
	_year: {
		value: 2014
	},
	edition: {
		value: 1
	},
	year: {
		get: function() {
			return this._year;
		},
		set: function(newValue) {
			if(newValue > 2014) {
				this._year = newValue;
			} else {
				console.log("year's value must bigger than 2014");
			}
		}
	}
})
```