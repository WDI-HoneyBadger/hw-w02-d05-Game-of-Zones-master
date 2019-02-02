$(document).ready(function() {
    
    var $body = $('body');

function createDuck(){
    var speedOfMove = Math.floor(Math.random() * 2500);
    var $duck = $('<div/>').addClass('duck');
    $body.append($duck);
  
    setInterval(function(){
      $duck.toggleClass('flap');
    }, 250); 

    $duck.css({
      'left' : Math.random() * window.innerWidth+'px',
      'top': Math.random() * window.innerHeight +'px'
    });
  
    setInterval(function(){
      $duck.animate({
        'left' : Math.random() * window.innerWidth +'px',
        'top': Math.random() * window.innerHeight +'px'
      });
    },speedOfMove);

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

    var $image = $('<img/>').attr('src', 'images/shot.png');
    $(this).append($image);

    $(this).delay(1000).queue(function() { 
      $(this).remove(); 
      checkForWinner();
    });

  });
  
  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  function checkForWinner(){
    var $ducks= $('body').find('div').length;
    if ($ducks === 0){
      alert('YOU WIN!');
    }
  }

  // FIN. You win 1 trillion tokens.  Play the day away!

})