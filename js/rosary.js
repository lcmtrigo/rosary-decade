$(document).ready(function() {
	var count = 0;

	$(".back").click(function() {
		$(".bead").html(--count);
		$(".forward").removeClass("limit")
		if (count <= 0) {
			count = 0;
			$(".bead").html(count);
			$(".back").addClass("limit")
		};
	})

	$(".forward").click(function() {
		$(".bead").html(++count);
		$(".back").removeClass("limit")
		if (count >= 10) {
			count = 10;
			$(".bead").html(count);
			$(".forward").addClass("limit")
		};
	});

	$(".reset").click(function() {
		count = 0;
		$(".bead").html(count);
		$(".back").addClass("limit")
		$(".forward").removeClass("limit")
	});

});