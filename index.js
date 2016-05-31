var namer = require('color-namer');
var names = namer('#d14');

if(typeof names.html != 'undefined') {
	if(names.html[0].distance === 0) {
		console.log('Color name in HTML is "' + names.html[0].name + '"');
	}
	else console.log('Nearest name in HTML is "' + names.html[0].name + '"');
};
