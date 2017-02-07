// 1.插件名jquery.插件名.js  规范性, 避免跟其他人的插件重名
// 2.自定义的插件中尽量避免使用$, 如果需要通过jQuery传参
// 3.插件结尾一定要写; 
// 4.$.extend添加的是全局的方法  $.fn.extend  添加到原型上(实例方法)


;(function ($) {
	
	// $.extend(jsonObj);  此方法可以给jQuery扩展方法(全局、实例)

	// 全局的方法
	$.extend({
		'nav':function () {
			
			$('.nav').css({
				'listStyle':'none',
				'margin':'0px',
				'padding':'0px',
				'display':'none'
			});			

			$('.nav').parent().hover(function () {
				
				$(this).find('.nav').slideDown('normal');

			}, function () {
				$(this).find('.nav').stop().slideUp('normal');
			});

		}

	});

	// 实例方法:
	// fn:$的prototype
	$.fn.extend({
		'nav':function () {
			$(this).find('.nav').css({
				'listStyle':'none',
				'margin':'0px',
				'padding':'0px',
				'display':'none'
			});			

			$(this).children('li').hover(function () {
					
				$(this).find('.nav').slideDown('normal');

			}, function () {
				$(this).find('.nav').stop().slideUp('normal');
			});
		}
	});
})(jQuery);
