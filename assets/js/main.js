$(function() {
	var $hnb = $('html, body'),
		$smileys = $('.smiley'),
		$drawers = $('.drawer'),
		$drawerOpeners = $('[data-drawer]'),
		$tabOpeners = $('[data-tab]'),
		$sliderBgs = $('[data-slider-bg]');

	function convertSmiley(el) {
		el.html(emojione.toImage(el.text()))
	}

	function openDrawer(e) {
		var $o = $(this),
			selector = $o.attr('data-drawer');

		$drawers.removeClass('active');
		$(selector).addClass('active');

		$hnb.addClass('no-scroll');

		e && e.preventDefault();
	}

	function openTab(e) {
		var $t = $(this),
			$tp = $t.parents('li'),
			selector = $t.attr('data-tab'),
			$tab = $(selector);

		// tab
		$tab
			.siblings('.tab')
			.removeClass('active');
		$tab
			.addClass('active')
			.parents('.drawer__content__inner')
			.animate({
				scrollTop: 0
			}, 500);

		// link highlight
		$tp
			.siblings()
			.removeClass('active');
		$tp
			.addClass('active');

		e && e.preventDefault();
	}

	function drawerInit() {
		$drawers
			.detach()
			.appendTo('body')
			.find('.drawer__close')
			.on('click', function(e) {
				$(this)
					.parents('.drawer')
					.removeClass('active');

				$hnb.removeClass('no-scroll');
				
				e.preventDefault();
			});

		$drawerOpeners.each(function() {
			$(this).on('click', openDrawer);
		});
	}

	function tabInit() {
		$tabOpeners.each(function() {
			$(this).on('click', openTab);
		});
	}

	function bgSliderInit() {

	}
	
	// convert all smileys paralelly
	$smileys.each(function() {
		var $s = $(this);
		setTimeout(function() {
			convertSmiley($s);
		}, 10)
	});

	// init all the drawers
	drawerInit();

	// init all tabs
	tabInit();
});