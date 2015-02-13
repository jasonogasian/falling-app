function AppClass($el, options) {
	this.$el = $el;

	slides = { 		// Match class names of cards
		'login': 0,
		'reg': 1,
		'sensors': 2,
		'netw': 3,
		'comm': 4,
		'contacts': 5,
		'emergency': 6,
	}

	this.Carousel = options.carousel;

	this.bind = function(card) {

		// Append templates
		$('.nav-buttons').append(window.forwardBackButtons.innerHTML);

		var signIn = $el.find( '.card.login form' );
		var signUp = $el.find( '.card.login .sign-up' );
		var next = $el.find( '.nav-controls .next' );
		var prev = $el.find( '.nav-controls .back' );

		// Click handlers
		self = this;
		signIn[0].onsubmit = function() {
			self.Carousel.next();
			return false;
		}
		next.click(this.Carousel.next);
		prev.click(this.Carousel.prev);
	}
}


function CarouselClass($el) {
	this.$el = $el;
	this.cards = $el.find('.card');
	this.active = $el.find('.card.active');
	this.EVENTS = {};

	_this = this;

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


$(document).ready(function() {
	window.App = new AppClass( $('#content'), {
		carousel: new CarouselClass( $('.oobe') )
	});
	App.bind();
});