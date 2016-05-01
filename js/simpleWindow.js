//window open
$(".window-button").on("click",function(){
	var target=$(this).attr('target');
	$(".filter").fadeIn();
	$(".window[name="+target+"]").fadeIn();
});

//window close
$(".window-dialog-header-close").on("click",function(){
	$(this).parents(".window").fadeOut();
	$(".filter").fadeOut();
});
$(".window").on("click",function(event){
	　$(".window-dialog-header-close").click();
});
	
//阻止window-dialog事件冒泡到.window
$(".window-dialog").on("click",function(event){
	　event.stopPropagation();
});

 