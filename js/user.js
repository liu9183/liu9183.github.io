$(document).ready(function(){
	 judgeorder();
	 $(".order_action_cancel").on("click",function(){
            $(this).parents(".order_form").remove();
            judgeorder();
        })
})
function judgeorder(){
	 if($(".order_form").length<1){
                $(".null_order").show();
            }
}
