function AppClass($el, options) {
	this.$el = $el;

	slides = { 		// Match class names of cards
		'login': 0,
		'reg': 1,
		'data': 2,
		'sensors': 3,
		'netw': 4,
		'comm': 5,
		'contacts': 6,
		'emergency': 7,
	}

	this.Carousel = options.carousel;

	if (!localStorage.contacts) {
		var contacts = {
			nonEm: CONTACTS.nonEm,
			em: CONTACTS.em
		}
		localStorage.contacts = JSON.stringify(contacts);
	}
}

AppClass.prototype.bind = function(card) {

	// Append templates
	$('.nav-buttons').append(window.forwardBackButtons.innerHTML);

	var signIn = this.$el.find( '.card.login form' );
	var signUp = this.$el.find( '.card.login .sign-up' );
	var next = this.$el.find( '.nav-controls .next' );
	var prev = this.$el.find( '.nav-controls .back' );

	// Click handlers
	var _this = this;
	signIn[0].onsubmit = function() {
		_this.Carousel.next();
		return false;
	}
	next.click(this.Carousel.next);
	prev.click(this.Carousel.prev);

	$('.circle-button').on('touchstart', function() {
		$(this).addClass('active');
	});
	$('.circle-button').on('touchend', function() {
		$(this).removeClass('active');
	});
	$('.circle-button').on('touchcancel', function() {
		$(this).removeClass('active');
	});
}


AppClass.prototype.populate = function() {

	// Populate sensors page with sensor availability
	var _populateSensors = function() {
		for (var sensor in window.sensors) {
			var avail = window.sensors[sensor];

			var _sensorOn = function($el) {
				$el.removeClass('off');
				$el.addClass('on');
			}

			var _sensorOff = function($el) {
				$el.removeClass('on');
				$el.addClass('off');
			}

			switch (sensor) {
	      case 'accelerometer':
	      	$el = $('.sensor-row.acc .sensor-indicator');
	      	if (avail)
	      		_sensorOn($el);
	      	else
	      		_sensorOff($el);
	      	break; 
	      case 'gyro':
	      	$el = $('.sensor-row.gyro .sensor-indicator');
	      	if (avail)
	      		_sensorOn($el);
	      	else
	      		_sensorOff($el);
	      	break; 
	      case 'gps':
	      	$el = $('.sensor-row.gps .sensor-indicator');
	      	if (avail)
	      		_sensorOn($el);
	      	else
	      		_sensorOff($el);
	      	break; 
	      case 'heartrate':
	      	$el = $('.sensor-row.hr .sensor-indicator');
	      	if (avail)
	      		_sensorOn($el);
	      	else
	      		_sensorOff($el);
	      	break; 
	      case 'proximity':
	      	$el = $('.sensor-row.prox .sensor-indicator');
	      	if (avail)
	      		_sensorOn($el);
	      	else
	      		_sensorOff($el);
	      	break; 
	      case 'barometer':
	      	$el = $('.sensor-row.bar .sensor-indicator');
	    		if (avail)
	    			_sensorOn($el);
	    		else
	    			_sensorOff($el);
	    		break;
	      case 'cell':
	      	$el = $('.sensor-row.cell .sensor-indicator');
	    		if (avail)
	    			_sensorOn($el);
	    		else
	    			_sensorOff($el);
	    		break;
	      case 'wifi':
	      	$el = $('.sensor-row.wifi .sensor-indicator');
	    		if (avail)
	    			_sensorOn($el);
	    		else
	    			_sensorOff($el);
	    		break;
	    }
	  }
	}

	var _populateContacts = function() {
		var contacts = JSON.parse(localStorage.contacts);
		if (!contacts) return;

		var $nonEm = $('.card.contacts .sensor-list.module');
		var $em = $('.card.emergency .sensor-list.module');

		for (var idx in contacts.nonEm) {
			var contact = contacts.nonEm[idx];

			var row = $(window.contactRow.innerHTML);
			row.find('.sensor-label').html(
				contact.firstName + ' ' + 
				contact.lastName + '<p>' + 
				contact.relationship + '</p>'
			);
			$nonEm.append(row);
		}

		for (var idx in contacts.em) {
			var contact = contacts.em[idx];

			var row = $(window.contactRow.innerHTML);
			row.find('.sensor-label').html(
				contact.firstName + ' ' + 
				contact.lastName + '<p>' + 
				contact.relationship + '</p>'
			);
			$em.append(row);
		}


	}

	_populateSensors();
	_populateContacts();
};


function CarouselClass($el) {
	this.$el = $el;
	this.cards = $el.find('.card');
	this.active = $el.find('.card.active');
	this.EVENTS = {};

	var _this = this;

	this.next = function() {
		var current = _this.active.index() - 1;
		if (current < _this.cards.length - 1)
			_this._slide(current+1);
	}

	this.prev = function() {
		var current = _this.active.index() - 1;
		if (current > 0)
			_this._slide(current-1, true);
	}

	this._slide = function(idx, goBack) {
		if (idx == null) {
			idx = 0; // Default
		}

		this.active.removeClass('active');
		$(this.cards[idx]).removeClass('out').removeClass('back').addClass('active');
		window.setTimeout( function() {
			if (goBack)
				_this.active.addClass('out');
			else
				_this.active.addClass('back');
			_this.active = _this.$el.find('.active');
		}, 550);
	}

	this.on = function(evt, cb) {
		this.EVENTS[evt] = cb;
	}

	this._trigger = function(evt) {
		this.EVENTS[evt].call(arguments);
	}
}

window.appReady = function() {
	window.App = new AppClass( $('#content'), {
		carousel: new CarouselClass( $('.oobe') )
	});
	App.bind();
	App.populate();
}

//
// Dev Only
//
if (window.navigator.platform == 'MacIntel') {
	$(document).ready( function() {
		$('#overlay').hide();
		window.sensors = {
	    accelerometer: true,
	    gyro: false,
	    gps: true,
	    heartrate: false,
	    proximity: false,
	    barometer: false,
	    cell: true,
	    wifi: false
		}
		window.appReady();
	});
}
else {
	$('#overlay').hide();
	$('body').append( $('<script type="text/javascript" src="cordova.js"></script>') );
}


function setAgeInput() {
	$('.card.reg input.age').val(event.target.value);
}


function closeOverlay() {
	$('#overlay').hide().find('.wrapper').empty();
}


function addContact(isEmergency) {
	var ovr = $('#overlay');
	ovr.find('.wrapper').append(window.contactEditForm.innerHTML);
	ovr.show();
}


function createContact(form) {
	

	closeOverlay();
	return false;
}


function sendSms(tel, msg) {
	if (window.sms) {
		var good = function(msg) {
			console.log("SMS Sent: "+tel);
		}
		var bad = function(err) {
			console.error("Failed sending SMS: "+err);
		}

		var message = {
			phoneNumber: tel,
			textMessage: msg
		}

		sms.sendMessage (message, good, bad);
	}
}

