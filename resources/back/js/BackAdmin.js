
jQuery(document).ready(function($)
	{
		$(document).on('click', '.expandable .header', function()
			{
				if($(this).parent().hasClass('active'))
					{
						$(this).parent().removeClass('active');
					}
				else
					{
						$(this).parent().addClass('active');	
					}
			})	
		
		
		
		
		
		$(document).on('click', '.tab-nav li', function()
			{
				$(".active").removeClass("active");
				$(this).addClass("active");
				
				var nav = $(this).attr("nav");
				
				$(".box li.tab-box").css("display","none");
				$(".box"+nav).css("display","block");
		
			})



	});	







