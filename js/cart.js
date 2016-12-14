$(document).ready(function() {
	$(".delbtn").click(function() {
		$(this).parents("li").remove();
		if($(".cartlist").children("li").length < 1) {
			$(".onthebottom").hide();
			$(".cartnull").show();
		}

	})
	$(".clearcart").click(function() {
		$(".cartlist").find("li").each(function() {
			$(this).remove();
		})
		$(".onthebottom").hide();
		$(".cartnull").show();
	})
	$('.address_item').click(function() {
		//这里有鬼
		$(this).find("input").prop('checked', true);
		setaddress();

	})
	$('.ifinvoicenot').click(function() {
		$(this).parent().next().toggle();
	})
	if($("select[name='sheng']").length > 0) {
		new PCAS("sheng", "shi", "qu", "", "", "");
	}

	function setaddress() {
		var addr_id = $("input[name='address_options']:checked").val();
		if(addr_id == 0) {

			$('#address_form').show();
		} else {
			$('#address_form').hide();

		}
	}

})