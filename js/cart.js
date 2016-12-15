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
	$(".address_item").click(function() {
		//这里有鬼
		$(this).find("input").prop('checked', true);
		setaddress();

	})
	$(".ifinvoicenot").click(function() {
		$(this).parent().next().toggle();
	})

	$(".submit_address").click(function() {
		addaddresslist();
	})
	$(".edit").click(function() {
		var $this=$(this);
        edit($(this));
	})
	$(".delete").click(function() {
		$(this).parents("li").remove();

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

	function addaddresslist() {
		var name = $("#consignee").val();
		var phone = $("#phone_mob").val();
		var s1 = $("#s1").val();
		var s2 = $("#s2").val();
		var s3 = $("#s3").val();
		var address = $("#address").val();
		var addressliHtml = '<li>' +
			'<p><em class="name">' + name + '</em>(<em class="phone">' + phone + '</em>)</p>' +
			' <p class="all-address">' + s1 + '&nbsp;' + s2 + '&nbsp;' + s3 + '&nbsp;' + address + '</p>' +
			'<p class="new_line"><br></p>' +
			'<p class="address_action">' +
			'<span class="edit"><i class="edit_icon"></i>编辑</span>' +
			'<span class="delete"><i class="delete_icon"></i>删除</span>' +
			'</p>' +
			'</li>';
		if($.trim(name) != "" && $.trim(phone) != "" && $.trim(s1) != "" && $.trim(address) != "") {
			$("#addresslist").append(addressliHtml);
			clearaddress();
		}
	}

	function clearaddress() {
		$("#consignee").val("");
		$("#phone_mob").val("");
		$("#s1").val("");
		$("#s2").val("");
		$("#s3").val("");
		$("#address").val("");
	}

	function edit($this) {
		var name = $this.parents("li").find(".name").text();
		var phone = $this.parents("li").find(".phone").text();
		var allAddress = $this.parents("li").find(".all-address").html();
		var addressArray = allAddress.split("&nbsp;");
		var s1 = addressArray[0];
		var s2 = addressArray[1];
		var s3 = addressArray[2];
		var addressinfo = addressArray[3];
		$("#consignee").val(name);
		$("#s1").val(s1);
		$("#s1").trigger("change");
		$("#s2").val(s2);
		$("#s2").trigger("change");
		$("#s3").val(s3);
		$("#address").val(addressinfo);
		$("#phone_mob").val(phone);
	}
})