var SpiderMan = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpiderMan.prototype = Object.create(Dancer.prototype);
SpiderMan.prototype.constructor = SpiderMan;

SpiderMan.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
