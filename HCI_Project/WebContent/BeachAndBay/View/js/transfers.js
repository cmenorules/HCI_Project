$(document).ready(function() {
	$("div.list_club a").click(function(){
		$("div.list_club").css("display", "none");
		$("div.club_detail").css("display", "block");
	});	
});

$(document).ready(function() {
	$("a.back_to_list").click(function(){
		$("div.list_club").css("display", "block");
		$("div.club_detail").css("display", "none");
	});	
});

$(document).ready(function() {
	$("a.back_to_club").click(function(){
		$("div.player_detail").css("display", "none");
		$("div.club_detail").css("display", "block");
	});	
});

$(document).ready(function() {
	$("a.player").click(function(){
		$("div.club_detail").css("display", "none");
		$("div.player_detail").css("display", "block");
	});	
});