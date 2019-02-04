$(document).ready(function() {

  var $body = $('body');
  function createDuck() {
   // 1. Can you create a <div> with the class "duck" and name it "duck"
   var $duck = $('<div/>').addClass('duck');
   // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
   $body.append($duck);

   setInterval(function () {
    $duck.toggleClass('flap').css(' image-rendering','-moz-crisp-edges');
   }, 250);

   // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

   var randPosX = Math.floor((Math.random()* window.innerWidth));
   var randPosY = Math.floor((Math.random()* window.innerHeight));

   $duck.css({
    'left': randPosX,
    'top' : randPosY,
  });

   // 4. Try making the duck move to a different location after 1 second
    
   setInterval(function(){
    
    $duck.animate({
      'left':  Math.random() * randPosY,
      'top' : Math.random() * randPosX,
      'bottom': Math.random() * randPosY,
      'right' : Math.random() * randPosX,
    });
  }, 1000)

    return $duck;
 }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
 //    using our fancy new createDuck() function
  for (var i = 0 ; i< 5 ; i++){
   createDuck();
 }
 
  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
 //     the duck when you click on it!
  // 12. After a duck has been clicked on, remove it from the DOM after
 //     a short delay (1 second)
  $('div').on('click', function(){
   $(this).addClass('shot');
    var $shotImg = $('<img/>').attr('src', 'images/shot.png');
   $(this).append($shotImg);

   setTimeout(function () {
    $('.shot').remove();
    checkWinner();
  }, 1000)
  
  });
 
  // 13. Create a new function named checkForWinner() that reads the DOM
 //     to see if there are any ducks left. If not, alert "YOU WIN!"
 
 function checkWinner() {
  if ($body.children().length == 0) {
    alert("YOU WIN!");
  }
}


})



  




