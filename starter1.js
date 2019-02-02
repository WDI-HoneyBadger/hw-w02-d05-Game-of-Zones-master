console.log('starter1.js linked');

//code goes here
$(document).ready(function() {
    // - Unlike a normal closure, we don't have to call it
    // - jQuery will call it when the page is loaded
  
    // first lets grab the <body></body>
    var $body = $('body');
  
   
    // 1. Can you create a <div> with the class "duck" and name it "duck"
   var $new = $('<div/>').addClass('duck');
      $body.append('<div/>');
  
    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
   $setInterval(function(){
   $('duck').toggleClass('falp')
   },250);
    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  
     $new.css({
    'left': '400px',
    'top': '400px',
     });
    // 4. Try making the duck move to a different location after 1 second
   
     $new.animate({
     
  },1000);
  
    // 5. Congratulations!
  })
  function createDuck(){
  for( var i=0 ; i<=5; i++){
    $('duck')=$('<div/>').addClass('duck');
    $body.append('<div/>');
  }};
  
  $('duck').each(function(){
  $(this).css({
  'top': Math.random() * window.innerHeight,
  'left' : Math.random() * window.innerWidth
  })
  }, 1000);
  
  setInterval(function(){
    $('.duck').each(function(){
      $(this).toggleClass('flap');
    });
  }, 250);
  
  
  setInterval(function(){
    $('.duck').each(function(){
      $(this).animate({
        'top' : Math.floor(Math.random() * window.innerHeight) ,
        'left' : Math.floor(Math.random() * window.innerWidth)           
      })
    });
  }, 1000 );
  
  
  $('.duck').on('click', function(){
    $(this).removeClass('duck').addClass('shot');
  
  
  
  
  
  
  
  
  
  
    
  });