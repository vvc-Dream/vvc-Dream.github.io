$(document).ready(function(){
  $('body').delegate('a', 'click', function (event) {
			var href = $(this).attr('href');
            event.preventDefault();
			$.ajax({
              		type:'GET',
              		url:href,
              		success:function(data){
						var _content = $(data).find("#pjax-content").html();
              			$('#pjax-content').html(_content);
              		}
              	});
            window.history.pushState({url:href},null,href);
        });
  
  window.addEventListener("popstate", function() {
              	$.ajax({
              		type:'GET',
              		url:location.href,
              		success:function(data){
						var _content = $(data).find("#pjax-content").html();
              			$('#pjax-content').html(_content);
              		}
              	});										
	          });
  
});