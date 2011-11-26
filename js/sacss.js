
var Box = function($element,color){
  this.width = 100;
  this.height = 50;

  $element.css({
    'background-color':color
  });
};

//Box.prototype = {
//  updateWidth: function(width){
//    this.$element.animate({
//      width: width
//    }, 500);
//  }
//}

$( function() {
  var box1 = new Box($('#box1'), 'red');
  var box2 = new Box($('#box2'), 'blue');

  box1.width = 59;
  box2.width = 109;

//  box1.updateWidth(box1.width);
//  box2.updateWidth(box2.width);

  console.log(box1);
});

