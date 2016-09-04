var datas = [
	{
		'header': 'ES5和ES6中对于继承的实现方法',
		'time': '2016-07-23',
		'section':'有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：\n有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：\n有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：'
	},
	{
		'header': 'ES5和ES6中对于继承的实现方法',
		'time': '2016-07-23 23:32:17',
		'section':'有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：'
	},
	{
		'header': 'ES5和ES6中对于继承的实现方法',
		'time': '2016-07-23 23:32:17',
		'section':'有个有趣的地方：ES6继承是在父类创建this对象，在子类constructor中来修饰父类的this，ES5是在子类创建this，将父类的属性方法绑定到子类，由于原生的构造函数（Function，Array等）没有this，子类无法通过call/apply(this)获得其内部属性，所以在ES5无法继承，ES6实现后可以为原生构造函数封装一些有趣的接口，比方说阮一峰老师的这个给Array实例封装一个版本记录和回滚的方法：'
	}

]
export default datas;