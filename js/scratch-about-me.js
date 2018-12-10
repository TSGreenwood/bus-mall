'use strict';

// //Initial username
var userName =prompt('Hello, what is your name?');
console.log('Hello, ' + userName + '.');

// //question 1
// var purpose =prompt('Are you here on purpose?');
// console.log(purpose + 'returns whether' + userName + 'is here on purpose');

// var purposeRes = (purpose.toUpperCase());
// console.log('ensures user response is all caps');

// if(purposeRes === 'YES') {
//   alert('Correct! Welcome to the site, ' + userName);
// }
// else {
//   alert('Incorrect, ' + userName + 'You should have better things to see.');
//   console.log('evaluates the return value of' + purposeRes);
// }

// //question 2
// var likeSite =prompt('Do you like my website?');
// console.log(likeSite + 'returns whether they are polite enough to say they like my website');

// var likeSiteRes = (likeSite.toUpperCase());
// console.log('ensures user response is all caps');

// if(likeSiteRes === 'YES') {
//   alert('Correct! It is very polite of you to say that.');
// }
// else {
//   alert('Incorrect. Fortunately you can make your own web site.');
//   console.log('evaluates the return value of' + likeSiteRes);
// }
// //question 3
// var cleanAir =prompt('Is the air outdoors more polluted than the air indoors?');
// console.log(cleanAir + 'returns whether' + userName + 'knows about Sick Building Syndrome');

// var cleanAirRes = (cleanAir.toUpperCase());
// console.log('ensures user response is all caps');

// if(cleanAirRes === 'NO') {
//   alert('Correct! ' + userName + ', you must already be hip to offgassing and Sick Building Syndrome.');
// }
// else {
//   alert('Incorrect. Due to offgassing from building materials and limited circulation, the air indoors is much more polluted than outdoor air. I hate to break it to you.');
//   console.log('evaluates the return value of' + cleanAirRes);
// }

// //Question 4
// var nasa =prompt('Did NASA do some terrific studies on how to clean the air inside space stations?');
// console.log(nasa + 'returns whether' + userName + 'knows about NASA clean air study');

// var nasaRes = (nasa.toUpperCase());
// console.log('ensures user response is all caps');

// if(nasaRes === 'YES') {
//   alert('Correct! They needed ways to clean the air circulating inside the space station.');
// }
// else {
//   alert('Incorrect. NASA did some great studies with some very practical results.');
//   console.log('evaluates the return value of' + nasaRes);
// }
// //Question 5
// var plant =prompt('Was the solution houseplants?');
// console.log(plant + 'returns whether' + userName + 'knows about even more about the NASA clean air study');

// var plantRes = (plant.toUpperCase());
// console.log('ensures user response is all caps');

// if(plantRes === 'YES') {
//   alert('Correct! ' + userName + ', are you Bill Wolverton? Because you know something about air remediation. I highly reccomend you check out the list of the 12 best air purifying housplants.');
// }
// else {
//   alert('Incorrect. NASA determined that some of your basic houseplants are the best way to clean the air of volatile organic compounds. ' + userName + ', I highly reccomend you check out the list of the 12 best air purifying housplants. It will cheer you up and prepare you for the next bit.');
//   console.log('evaluates the return value of' + plantRes);
// }

//question 6, first try

function sixthQuestion() {
  var guessCounter = 0;
    alert('How many plants do I have? You get 4 guesses, please use integers.');
    
    while (guessCounter < 5); {
      var manyPlants = prompt('How many plants do I have?');
      manyPlants = parseInt(manyPlants);
      console.log(manyPlants);

      if (manyPlants === 5) {
          alert('You guessed it, I have 5 plants.');
          break;
      }

      else if (manyPlants < 5); {
         guessCounter ++;
         alert('That\'s not enough plants for me.');
      }
      else if((manyPlants < 5); {
        guessCounter ++;
        alert('That\'s not enough plants for me.');
      }
    
      if (guessCounter === 4);{
        alert('We don\'t have to play this anymore. I have 5 plants.');
      }
    }
      
// var guessCounter = 4;
// function sixthQuestion() {
//   var manyPlants = prompt('How many plants do I have? You get  '+ guessCounter + ' guesses.');
//   manyPlants = parseInt(manyPlants);
//   console.log(manyPlants);

//   if (manyPlants !== 5); {
//     if (manyPlants < 5); {
//       // guessCounter --;
//       alert('That\'s not enough plants for me.');
//       // if (guessCounter > 0); {
//         manyPlants = prompt('How many plants do I have? You get  '+ guessCounter + ' guesses.');
//         manyPlants = parseInt(manyPlants);
//       }
//       else (manyPlants > 5); {
//         // guessCounter --;
//         alert('That\'s too many plants for me.');
//         // if (guessCounter > 0); {
//           manyPlants = prompt('How many plants do I have? You get  '+ guessCounter + ' guesses.');
//           manyPlants = parseInt(manyPlants);
//         }
//         }
  
//     }
//     else (manyPlants === 5); {
//       alert('You guessed it, I have 5 plants.');
//     }
//   }
// }


// sixthQuestion();


// if (manyPlants === 5) {
//   alert('You guessed it, I have 5 plants.');
//   break;
// }
// else if (manyPlants > 5) {
//   // guessCounter --;
//   // if (manyPlants > 5); {
//   guessCounter --;
//   console.log(manyPlants);
//   console.log(guessCounter);
//   alert('That\'s too many plants for me.');
//   if (guessCounter > 0);
//   prompt('You have ' + guessCounter + ' more guesses.');
//   manyPlants = parseInt(manyPlants);
// }

// if (manyPlants > 5) ; {
//   guessCounter --;
//   alert('That\'s not enough plants for me.');
//   if (guessCounter > 0); {
//     prompt('You have ' + guessCounter + ' more guesses.');
//     manyPlants = parseInt(manyPlants);
//   }
// }


// parseInt(manyPlants1);
// console.log('Turns first user answer string into an integer.');

// if (manyPlants1 < 5) {
//   alert('That\'s not enough plants for me.');
// }
// else if (manyPlants1 > 5) {
//   alert('That\'s too many plants for me.');
// }
// else {
//   alert('You got it, I have 5 plants. I\'m going to ask you this question 3 more times anyway.');
// }
// //question 6, second try
// var manyPlants2=prompt('How many plants do I have? You get 3 more guesses.');
// console.log('Returns second user answer as a string');

// parseInt(manyPlants2);
// console.log('Turns second user answer string into an integer.');

// if (manyPlants2 < 5) {
//   alert('That\'s not enough plants for me.');
// }
// else if (manyPlants2 > 5) {
//   alert('That\'s too many plants for me.');
// }
// else {
//   alert('You got it, I have 5 plants. I\'m going to ask you this question 2 more times anyway.');
// }

//Question 6, third try
// var manyPlants3=prompt('How many plants do I have? You get 2 more guesses.');
// console.log('Returns third user answer as a string');

// parseInt(manyPlants3);
// console.log('Turns third user answer string into an integer.');

// if (manyPlants3 < 5) {
//   alert('That\'s not enough plants for me.');
// }
// else if (manyPlants3 > 5) {
//   alert('That\'s too many plants for me.');
// }
// else {
//   alert('You got it, I have 5 plants.I\'m going to ask you this question one more time anyway.');
// }
// //Question 6, fourth try
// var manyPlants4=prompt('How many plants do I have? This is the last one.');
// console.log('Returns fourth user answer as a string');

// parseInt(manyPlants4);
// console.log('Turns fourth user answer string into an integer.');

// if (manyPlants4 < 5) {
//   alert('That\'s not enough plants for me. I have 5.');
// }
// else if (manyPlants4 > 5) {
//   alert('That\'s too many plants for me. I have 5');
// }
// else {
//   alert('You got it, I have 5 plants.');
// }

// //Question 7
// var plants=['philodendron', 'fern', 'snake plant', 'dracaena'];
// var guess = prompt('Can you guess one type of my houseplants? I have 4 varieties and you get 6 tries.');
// var guessRes = (guess.toLowerCase());
// console.log('ensures user response is all caps');

// for(var i = 0; i <plants.length; i++) {
//   if(guessRes === plants[i]) {
//     alert('Right!');
//     break;
//   } else {
//     alert('Try again.');
//     //break;
//   }
// }
// }
