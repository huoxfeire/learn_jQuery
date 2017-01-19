## jQuery基本动画

### show/hide
	
	show/hide
		$().show(speed, callback)
		参数speed可以是时间(ms)和normal(400)/slow(600)/fast(200)
		参数callback是一个回调函数，当动画执行完执行的函数
		不加参数只修改display属性
		加上参数会改变宽高，改变透明度，overflow会被设置上是控制文本内容的，hide到最后display:none
		回调函数会在显示或隐藏完成前一点被调用


	toggle 开关显示图片
		$().toggle(speed, callback)
		用法和hide和show一样

### fadeOut/fadeIn/fadeTo/fadeToggle

	fadeIn/fadeOut/fadeToggle/fadeTo

		实际上淡入淡出效果改变的是透明度，如果设置的淡出的话，最后会设置display为none
		fadeIn(speed, callback) 淡入

		fadeOut(speed, callback) 淡出

		fadeToggle(speed, callback) 开关淡入淡出效果

		fadeTo(speed, opacity, callback)	改变透明度到opacity

	slideUp/slideDown/slideToggle
		滑入滑出改变的是height属性
		jQuery的基本动画效果都是带speed和callback的显示隐藏开关函数

### 自定义动画

	$().animate(jsonObj, speed, callback);
		几乎所有属性都可以做动画效果
		复合属性，建议用驼峰标识，有几个版本连字符不能用
		部分属性可以使用toggle开关  (width heigth opacity)  从0->初始值  初始值->0
		json对象中属性名也应该用引号闭合

### 总结
	
	虽然jQuery的函数很多，但是还是有规律可循的，比如基本动画的参数都是speed+callback+other
	而且大部分都可以分为一组一组的，一个显示，一个隐藏，一个其他