$(document).ready(function(){
	$(".add").click(function(){
    	var num=$(".itnums").val();
        if(isNaN(num)||num<1){
        	num=1;
        }else{
        	num++;
        }
    	$(".itnums").val(num);
    	
    })
	$(".reduce").click(function(){
    	var num=$(".itnums").val();
        if(isNaN(num)||num<=1){
        	num=1;
        }else{
        	num--;
        }
    	$(".itnums").val(num);
    	
    })
	$(".addcartbtn").click(function(){
		
		var num=Number($(".itnums").val());
		var productimg=$("#productimg"),
               imgsrc=$("#productimg").children("img").attr("src"),
                x = productimg.offset().left + 30,
                y = productimg.offset().top -10,
                X = $("#n_1").offset().left,
                Y = $("#n_1").offset().top;

        if ($('#flydiv').length <= 0) {
                    $('body').append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50" /></div');
        };
        var $obj=$('#flydiv');
        
        if(!$obj.is(":animated")){
        	 $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function(){
        	 	$obj.animate({'left': X+20,'top': Y,'opacity':0},500,function(){
        	 		 $obj.remove();
        	 		 var number=Number($(".cartnums").text());
        	 		 $(".cartnums").text(num+number);
        	 		 $(".cartnums").show();
        	 		
        	 		 
        	 	});
        	 });
       	
        }
    })
})
