## jQuery补充

### 事件补充

    jQuery中hover也是一种事件类型,在jQuery中更像是一个函数，当鼠标移入的时候会调用func1，当鼠标移出的时候会调用func2
    $().hover(func1, func2)

### 模拟操作

    模拟操作是模拟用户的操作
      1.直接调用事件函数的可以触发事件

      2.$().trigger(eventType, [param1. param2]);
      3.triggerHandler

      trigger和triggerHandler区别
        1.trigger不仅触发指定事件，还会触发默认的功能
          submit提交按钮默认功能能被触发，a默认功能不能被触发
        2.trigger选择器匹配到的所有元素都会进行模拟操作
        3.trigger会触发事件冒泡，将子元素的事件传递给父元素

      triggerHandler仅触发匹配到的第一个元素的指定事件，不会冒泡

### 工具函数

    $.trim() 去除字符串两端的空格

    数组相关
      $().each(function(index, ele))
      $.each(arr, function(index, value))

      $().map(function(ele, index))  返回新数组，返回值由return决定
      $.map(arr, function(index, value))

      $.grep(arr, function(ele, index)) 过滤数组

    $.unique()  去重  直接去除原数组中重复的对象(内存地址相同)

    $.param()  将json对象拼接成参数字符串格式

    $(selector).get()  获得由选择器指定dom元素
