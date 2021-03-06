// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top; // setting the instantiation of Dancer's top to top-parameter
  this.left = left; // setting the instance of Dancer's left to left-param
  this.timeBetweenSteps = timeBetweenSteps; // setting timeBetween steps
  this.$node = $('<span class="dancer"></span>'); // applying jQuery node to dancer

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var dance = this; // need to have a 'that' so that it can not be overridden by the setTimeoutFunction's this
  setTimeout(function() { 
    dance.step(); 
  }, dance.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(styleSettings);
};


