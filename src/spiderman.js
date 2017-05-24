var SpiderMan = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpiderMan.prototype = Object.create(Dancer.prototype);
SpiderMan.prototype.constructor = SpiderMan;


