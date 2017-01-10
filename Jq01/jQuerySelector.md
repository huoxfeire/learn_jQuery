## jQuery引入和选择器总结

	jQuery是一套跨浏览器的JavaScript库，用途是简化HTML与JavaScript之间的操作
	jQuery是开源软件，使用MIT许可证授权，jquery的语法设计使得许多操作变得容易，
	如操作文档对象(document)、选择文档对象模型（DOM）元素、创建动画效果、处理事件、
	以及开发Ajax程序。
	jQuery也提供了给开发人员在其上创建插件的能力。使得开发人员可以对底层交互与动画、
	高级效果和高级主题话的组件进行抽象化。
	模块化的方式使jQuery函数库能够创建功能强大的动态网页以及网络应用程序
	特点：
		jQuery是一个轻量级的脚本，代码非常小巧
		jQuery支持css1-3定义的属性和选择器
		jQuery跨浏览器的，支持IE6+，FF5+， Safari2.0+，和Opera9.0+
		语法简练，语义易懂，学习快速，文档丰富
		jQuery能将JS脚本和HTML源代码完全分离，便于后期编辑和维护
		jQuery除了自带的特效之外，还可以通过插件实现跟多功能
	主旨：write less, do more

### 引入

#### 方式一：导入本地文件

```bash
	<script type="text/javascript" src="jquery.js"></script>
```
#### 方式二：通过链接内容发布网站CDN

```bash
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.js"></script>
```

### 与DOM对象比较

	无论使用哪种选择器，jQuery函数返回的是一个类数组对象，内部包含一个遍历机制
	这意味着jQuery对象和DOM对象不能互调成员

	但是，jQuery对象可以和DOM对象互相转换
		// jquery对象-->dom对象
		$("p")[1].style.fontSize = "23px";

		// jQuery对象:根据选择符获取到对应的dom节点(元素), 通过merge的方法, 将该对象添加数组
		// dom对象-->jquery对象
		var p = document.getElementById("para");
		$(p).css("width", "300");

### 选择器

#### 基本选择器

	// 1.html标签选择器
		$("p").css("color", "orange");
	// 2.id选择器
		$("#para").css("background-color", "lightgrey");
	// 3.类选择器
		$(".box").css("fontSize", "20px");
	// 4.并集(群组)选择器
		$("tag1, tag2, tag3")

#### 属性选择器
	
	// jquery的属性选择器和css3选择器类似，所以很好学

	// 1.按照属性名匹配 $("[attr]")
	// 2.按照属性值匹配 $("[attr]=value")
	// 3.正则匹配属性值 $("[attr]^=value") 	开头
				    // $("[attr]$=value") 	结尾
				    // $("[attr]!=value") 	取反
				    // $("[attr]*=value") 	包含
	// 4.并且关系
		// $('[attr=value][attr1=value1][attr2=value2]');

#### 层次选择器
	
	// 层次选择器就是两个选择器间存在一定的关系，比如父子，兄弟
		
		// 父子关系
		$(tag1 tag2)	tag1下的子元素 tag2
		$(tag1>tag2) 	tag1下的直接子元素 tag2
		
		// 兄弟关系
		$('div~span')	向下查找所有与div有兄弟关系的span标签
		$('div+span')	向下查找与div紧邻的span标签

		$(selector1).prev(selector2) 	向上查找紧邻的兄弟标签
		$(selector1).siblings(selector2) 	根据selector1查找与其是兄弟关系的selector2

#### 过滤选择器

	// 用法：$('selector: filterWord')
		// filterWord
			// first, last, even, odd, 
			// eq(index), gt(index), lt(index), 组合使用时，下标会重定位
			// not(selector2)	否定选择器
			// header 			title选择器h1-h6
			// 可以组合使用

#### 内容包含选择器

	// 也是过滤选择器
	// 内容是文本的	
		// filterWord
			// tag1:contains(tag2)
			// empty
	// 内容是标签的  // tag1:has(tag2)
	// 内容是父元素的，包含文本节点和标签 // parent

#### 表单相关选择器
	
	单选框复选框选中	checked
	下拉菜单选中		$('option'):selected
	



	