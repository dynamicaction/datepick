/* http://keith-wood.name/datepick.html
   English UK localisation for jQuery Datepicker.
   Written by Stuart. */
(function($) {
	$.datepick.regional['en-US'] = {
		monthNames: ['Xxxxxxx','Xxxxxxxx','Xxxxx','Xxxxx','Xxx','Xxxx',
		'Xxxx','Xxxxxx','Xxxxxxxxx','Xxxxxxx','Xxxxxxxx','Xxxxxxxx'],
		monthNamesShort: ['Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx',
		'Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx'],
		dayNames: ['Xxxxxx', 'Xxxxxx', 'Xxxxxxx', 'Xxxxxxxxx', 'Xxxxxxxx', 'Xxxxxx', 'Xxxxxxxx'],
		dayNamesShort: ['Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx', 'Xxx'],
		dayNamesMin: ['Xx','Xx','Xx','Xx','Xx','Xx','Xx'],
		dateFormat: 'dd/mm/yyyy', firstDay: 1,
		renderer: $.datepick.defaultRenderer,
		prevText: 'Xxxx', prevStatus: 'Xxxx xxx xxxxxxxx xxxxx',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: 'Xxxx xxx xxxxxxxx xxxxx',
		nextText: 'Xxxx', nextStatus: 'Xxxx xxx xxxx xxxxx',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: 'Xxxx xxx xxxx xxxx',
		currentText: 'Xxxxxxx', currentStatus: 'Xxxx xxx xxxx xxxx',
		todayText: 'Xxxxx', todayStatus: 'Xxxx xxxxx\'x xxxxx',
		clearText: 'Xxxxx', clearStatus: 'Xxxxx xxx xxxxxxx xxxx',
		closeText: 'Xxxx', closeStatus: 'Xxxxx xxxxxxx xxxxxx',
		yearStatus: 'Xxxx x xxxxxxxxx xxxx', monthStatus: 'Xxxx x xxxxxxxxx xxxxx',
		weekText: 'Xx', weekStatus: 'Xxxx xx xxx xxxx',
		dayStatus: 'Xxxxxx DD, M d', defaultStatus: 'Xxxxxx x xxxx',
		isRTL: false
	};
	$.datepick.setDefaults($.datepick.regional['en-US']);
})(jQuery);
