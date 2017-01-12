## 节点操作

### 追加节点

	// 父子节点的追加
		// fatherNode.append(childNode);
		// childNode.prependTo(fatherNode)
		
		// 父节点的最后添加子节点
		// $("#sanguo").append("<li>诸葛亮</li>");
		// $("#sanguo").append("<li>诸葛亮</li>", "<li>黄盖</li>");	能添加多个


		// 向父节点的最前添加子节点
		// $("#sanguo").prepend("<li>诸葛亮</li>");

		// 将子节点附加到父节点上的最前
		// $("<li>诸葛亮</li>").prependTo($("#sanguo"));
		// $("<li>诸葛亮</li>").prependTo($("#sanguo"), $("shui"));	不起作用

		// 将子节点附加到父节点的最后
		// $("<li>诸葛亮</li>").appendTo($("#sanguo"));

	// 兄弟节点的追加
		// 在节点后添加元素
		// $("#boss").after("<li>诸葛亮</li>");
		// $("#boss").after("<li>诸葛亮</li>", "<li>黄盖</li>");		//  能添加多个

		// 在节点前添加元素
		// $("#boss").before("<li>诸葛亮</li>", "<li>黄盖</li>");		//  能添加多个

		// 添加元素到节点后
		// $("<li>诸葛亮</li>").insertAfter($("#boss"));

		// 添加节点到节点前
		// $("<li>诸葛亮</li>").insertAfter($("#boss"));			

	// 节点的替换
		// 旧节点被新节点替换
		// 替换节点.replaceWith(新节点)
		// $(".lang").replaceWith("<li>killed</li>");	// 替换了选中的节点
		// $(".lang").replaceWith("<li>killed</li>", "<li>黄盖</li>")	// 两个新节点替换旧节点，页面多增加了两个个节点

		// 新节点替换所有的旧节点
		// 新节点.replaceAll(替换节点)
		// $("<li>killed</li>").replaceAll($(".lang"));	
		// $("<li>killed</li>").replaceAll($("#shui li"));

### 节点删除和克隆

	清空节点的内容
		$("#hlm").empty();

	移除节点 将选中的节点移除，包括内容
		$("#hlm").remove();

	克隆节点
		将给定的元素复制一份,并且返回, 布尔值决定是否克隆绑定的事件 true表示事件也复制
		$().clone(boolean)	不传参数默认是false

### 节点的查找

	查找父元素
		$(son).parent(father)
		传入参数是father的话，只有直接父元素是father的元素能被选中
		没有传入参数的话，选中son的直接父元素

		$(son).parents(father)
		传入参数是father的话，选中son祖先结构中所有是father的元素
		没有传入参数的话，选中son的所有父元素（包含祖先）

		从直接父元素开始，查找到指定的father，不包含指定的father
		$(son).parentsUntil(father)

	查找子元素
		查找father中的所有子元素son
		$(father).find(son)

		查找father中的所有的直接子元素son
		$(father).children(son)

	查找兄弟元素
		查找紧邻的下一个标签
		$().next()

		查找紧邻的上一个标签
		$().prev()

		查找其他的兄弟关系标签  不包含自身  可以指定类型
		$().siblings()

### 节点包裹

	$(被包裹).wrap(外层)
	$("p").wrap("div");	不能用

	wrap的参数必须是元素节点
	$("p").wrap("<div></div>");

	多层包裹
	$("p").wrap("<div><strong></strong></div>");

	外层中有文本
	$("p").wrap("<div>content</div>");

	使用已有节点进行包裹	不会对原来的对象有影响，不过id也会被复制
	$("p").wrap($("#box"));

	使用函数进行包裹
	$("p").wrap(function(){
		var newDiv = $('<div></div>');
		// 设置节点
		newDiv.css({
			width:'200px',
			height:'200px',
			backgroundColor:'lightgreen'
		});
		return newDiv;
	});

	将选择器选中的所有元素包裹在一起, 会打破之前存在的一些包含关系
	$().wrapAll() 	
	$('p').wrapAll('<div></div>');
	
	将选择器选中元素的内容进行包裹
	$().wrapInner(content)  
	$("p").wrapInner('<div class="extra-wrapper"></div>');
	$("p").wrapInner();

