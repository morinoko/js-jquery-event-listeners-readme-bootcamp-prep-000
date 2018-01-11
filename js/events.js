//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $(document).on('load', function() {
    let img = $('img');
    img.addClass('tasty');
  });
}

function pressIt() {
  $('input#typing').on('keydown', function(key) {
    if (key.which === 71 ) {
      alert('You pressed the G key!');
    }
  });
}

$(document).ready(function(){
// call functions when page loads
  getIt();
  frameIt();
  pressIt();
});
