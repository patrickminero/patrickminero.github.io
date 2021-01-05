//variables
const carousel = document.querySelector('.carousel');

// button menu 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  if(elems){
    var instances = M.FloatingActionButton.init(elems, {
      // direction: 'left',
      hoverEnabled: false,
    });
  }
  
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  if(elems){
    var instances = M.Carousel.init(elems, {
    });
  }
});
