var BoxDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

BoxDancer.prototype = Object.create(Dancer.prototype);
BoxDancer.prototype.constructor = BoxDancer;

BoxDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// BoxDancer.prototype.size = function() {
//   this.$node.resize();
// };

