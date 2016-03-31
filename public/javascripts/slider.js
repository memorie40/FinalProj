
$(window).load(function(){
		var pages = $('#container li'), current=0;
		var currentPage,nextPage;
		var handler=function(){
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
				else
					current=current-1;
				nextPage = pages.eq(current);	

				nextPage.css("marginLeft",-600);
				nextPage.show();
				nextPage.animate({ marginLeft: 0 }, 800,function(){
					currentPage.hide();
				});
				currentPage.animate({ marginLeft: 600 }, 800,function(){
					$('#container .button').bind('click',handler);
				});
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
				nextPage = pages.eq(current);	

				nextPage.css("marginLeft",600);
				nextPage.show();
				nextPage.animate({ marginLeft: 0 }, 800,function(){
				});
				currentPage.animate({ marginLeft: -600 }, 800,function(){
					currentPage.hide();
					$('#container .button').bind('click',handler);
				});
			}
		}

		$('#container .button').click(handler);
		
});

