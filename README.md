
# hw-w02d05: Duck Hunt / Game of Zones
![](https://media.giphy.com/media/k7UpjV0TawvlK/giphy.gif)

## Requirements:
Part 1 is required, Part 2 is optional!  Part 2 is an EXCELLENT challenge.  You don't have to do it but if you do you'll be very prepared for projects next week :).

## Part 1:  Duck hunt:

Your homework tonight is to finish the duckhunt lab!  Please copy/paste this into the work you did in class and answer the questions in your javascript file:
```javascript
  // 5. ——— Part 2: Here we go! —— 
  // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
  // each time it creates a duck, it appears in a random location. 
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around!

  // 10. Well Done!  

  // ——— Part 3:  We're almost there! —— 

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!
  
  
  ## Part 2:  Game of Zones:
  ![](https://media.giphy.com/media/N1o4vTl8z86hq/giphy.gif)
```

# Game of Zones

When you play the Game of Zones, you win, or ... well you don't die but you might not win. We're going to be building some interactive games using our new knowledge of EVENTS, compounding our previous knowledge of functions and JavaScript fundamentals.

## Setup

You've been provided starter code - no need to edit `index.html` or `style.css`, work only in `starter1.js` for Game 1 and `starter2.js` for Game 2.

Before coding, look through both games and their notes. Be sure to spend at least 15 minutes thinking about how to build a game out before actually touching ANY code. Break down the problem into smaller steps to tackle and give yourself a roadmap of how to proceed.

## Completion

There are two games below and a bonus section. Complete both games for full credit. We want to stress the importance of formatting and spacing your code neatly and consistently. At some point in time we have all written some pretty ugly looking code that didn't follow any convention, but now is a good chance to start tidying up our code. Please read through [Airbnb's style guide](https://github.com/airbnb/javascript).

## Assignment

#### Game 1

What should a user be able to do with the game?

1. When the mouse enters any of the zones change its background color to `green`
2. When the mouse leaves a zone change its background color back to `white`
3. When you click on a zone it locks its color to green.
> **HINT:** You probably need to remove some event listeners _([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))_
4. When all zones are checked green, log a statement of congratulations to the console!

**Before coding anything, write comments on how to approach this game step by step.** Here are some useful questions and notes for you:

- Let's build a function that will turn a zone green. Can we do this with one function that will change any object with the function bound to it via an eventListener?
- Conversely, you might need a function that will change the background of the zone to clear or white or none
- Take a look at `style.css`, we already have styles for a class 'green'. How might this change how you build the functions?
- Shat kind of event listeners do we need? Is there documentation out there for different types of event listeners?
- How would you add an event listener to one DOM element? How about to all DOM elements of a set (e.g. with the same class)
- How can you remove event listeners?
- Which event listeners should be removed?
- When should those event listeners be removed?
- How can you check to see if all the zones are green?
- If you wrote a function to perform that check, when should the check occur?

![](https://i.imgur.com/BvvVElS.png)

#### Game 2

Modify your previous game so that the zones need to be clicked in a particular order. Copy any code you might want to reuse from Game 1 into `starter2.js`, and in `index.html`, switch `starter2.js` to be connected and `starter1.js` to be commented out.

1. Generate an array with the zones `['zone-1', 'zone-2', 'zone-3', 'zone-4']` in a random order - you do not need some shuffling function, just randomize it by hand. This will determine the order in which you need to click the zones.
2. The zones start with no background color.
3. When you hover over a zone it should turn green if it is the next one that needs to be clicked and turn red if it is not.
4. When a correct zone is clicked it should stay green
5. Clicking on an incorrect zone should do nothing.
6. When all zones are green, log a statement of congratulations to the console!

**Before coding anything, write comments on how to approach this game step by step.** Here are some new, useful questions and notes for you:

- What can we reuse from the previous game?
- How can we check if the zone is supposed the next one in the array?
- How can we stop something from happening if we only want an event to occur for a correct click?

## Bonus

Let's revisit both games!

#### Game 1

- When all zones are checked green make them turn yellow after one second, red after another second, and then clear the background color after one last second.
> HINT: Remember [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)?

#### Game 2

- Clicking an incorrect box should make it stay red for one second, then revert back to clear
- When all zones are green remove their backgrounds one by one, with a 1 second delay in between each, in the order that they were clicked

## Submission

Homework is due Sunday before class Remember to work with each other and go to TAs when you need it, but follow the [guidelines](https://git.generalassemb.ly/wdi-nyc-8-28/Course-Information/blob/master/how-to-queue-with-TAs.md) for queuing. Follow the [rules for homework submission](https://git.generalassemb.ly/wdi-nyc-8-28/Course-Information/blob/master/homework.md) for creating your pull request to submit the homework.

