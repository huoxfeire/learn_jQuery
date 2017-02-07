## jQuery-ui

    jQuery-ui包含了许多维持状态的小部件（widget），与典型的jquery插件使用模式略有不同
    jQuery-ui包含jquery-ui-interaction(交互) jquery-ui-widgets(小部件) jquery-ui-effects(效果库)

### interaction

    交互部件是一些与鼠标交互相关的内容

#### 拖拽

    $().draggable()
    使元素变得可拖拽

#### 检测进入

    $().droppable(jsonObj)
    当一个可拖动的盒子拖拽完后（松开鼠标），进行操作

#### 盒子大小重定义

    $().resizable()

#### 是否可选择

    $().selectable()
    选中会添加类ui-selectee ui-selected

### widgets

    jquery-ui小部件：主要是一些页面的扩展，只要复合某种结构，就能为结构加上样式

       手风琴效果
    $("#accordion").accordion();

       日期选择
    $('#datepicker').datepicker();

       弹框
    $('#dialog').dialog();

       选项切换
    $("#tabs").tabs();

       进度条君
    $('#progressbar').progressbar({
      max:100
    });

       进度条设置值
    $('#progressbar').progressbar('value', 60);

### effects

    用于提供丰富的动画效果，让动画不再局限于jQuery的animate()方法

    1.animate(),能改变颜色属性
    可以修改颜色:将颜色转换为rbg的方式, 通过修改rgb值实现颜色的渐变

    2.class
    addClass/removeClass/toggleClass/hasClass
    addClass(className, duration, easings, callback)
    easings 贝塞尔曲线名或函数
    看参数就知道，加类的时候会有动画效果

