$(function() {
	var
		$win = $(window),
		$banner = $('.banner'),
		width, height;

	function setPosition() {
		width = ($win.width() / 2) - ($banner.width() / 2);
		height = ($win.height() / 2) - ($banner.height() / 2);

		if (width <= 0 || height <= 0) {
			$banner.addClass('banner-sm');
		} else {
			$banner.removeClass('banner-sm');
		}

		width = width > 0 ? width : 0;
		height = height > 0 ? height : 0;

		$banner.css({
			top: height,
			left: width
		});
	}

	setPosition();
	$win.resize(setPosition);
});