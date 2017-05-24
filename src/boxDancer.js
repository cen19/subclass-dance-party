var BoxDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('boxDancer');

};

BoxDancer.prototype = Object.create(BlinkyDancer.prototype);
BoxDancer.prototype.constructor = BoxDancer;

// ==Inherited step from Blinky==
// BoxDancer.prototype.step = function () {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };



