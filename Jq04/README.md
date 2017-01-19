## 事件补充

### 命名空间
	
	命名空间，给事件类型分类，方便事件的解绑，不用再指定事件函数解绑了
	eventType.namespace

	根据事件类型及命名空间的内容进行取消绑定事件
	$().unbind("EventType.namespace")

	如果省略了事件类型, 会将相同的命名空间的事件都取消绑定
	$().unbind()

	如果省略了命名空间, 会将给定的事件绑定的所有函数解除
	$().unbind("eventType")

	将命名空间下的所有事件解绑
	$().unbind(".namespace")	

### on&off
	
	当给多个标签（大数量级）绑定同一事件对象时，用bind一个一个绑定会导致页面变慢或卡顿
		事件委托就是处理这一类问题的
		jquery1.7前用的是 
			$(selector).live(event, data, function)
			$(selector).die(event, function)
		之后的替代方法
			$(selector).delegate(childSelector, event, data, function)
			$(selector).undelegate(selector, event, function)
			在DOM中很多元素绑定相同事件时，在DOM元素不存在即将生成时，推荐使用事件委托绑定事件。不然推荐用bind绑定事件

		在jQuery1.7后推出了on()和off()方法彻底摒弃了前面三组，成为了新的替代品
			on()方法在被选元素及子元素上添加一个或多个事件处理函数
			使用on()方法添加的事件处理函数适用于当前及未来的元素
		on()和delegate的参数有所区别，用法大致一样
			$(selector).on(event, childSelector, data, function)

		off()和undelegate()的参数也有所区别
			$(selector).off(event, childSelector, data, function)

		on和off的基本用法（事件绑定和解绑）可以参考bind和unbind用法
			可以绑定同一事件的多个处理函数
			可以给多个事件绑定同一个处理函数
			命名空间也能用

		on和off进行事件绑定
			$(father).on(event, childSelector, data, fn);
			childSelector:将要出现还未出现的后代元素/多个元素绑定同一事件的每一个元素
			data:通过该属性可以传递参数, 类型必须是json对象  非必须参数

			$(father).off(event, childSelector)


		one()方法
			绑定函数执行后，自动移除事件