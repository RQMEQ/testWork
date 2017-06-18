"use strict";

(function() {

	var $h = function(selector) {

		return document.querySelectorAll(selector);
		
	}



	$h.on = function(selector, eventType, callback) {

		var elem = document.querySelector(selector);

		if (elem == null) {

			çonsole.warn('No elements found!');
			return;
		}

		elem.addEventListener(eventType, callback);
	}


	$h.d = function (parent, type, child, callback) {

		parent = document.querySelector(parent);
		if (parent == null) {


			console.log('No elements found!');
			return;
		}
		parent.addEventListener(type, function(e){

			var target = e.target;
			while (target != parent) {
				if (target.matches(child)){

					callback.call(target, e);
					return;
				}
				target = target.parentNode;	
			}
		});
		
	} 



	window.$h = $h;
})();

/*$h.on('.nav', 'click', function() {

});*/

//$h('.nav').style.color='red';	


