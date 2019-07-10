'use strict';

// ProductVoter.imgElement0 = document.getElementById('qualityProduct0');
// ProductVoter.imgElement1 = document.getElementById('qualityProduct1');
// ProductVoter.imgElement2 = document.getElementById('qualityProduct2');
ProductVoter.randomProduct0 = document.getElementById('qualityProduct0');

var allProducts = []; // array of product objects
var productsDisplayed = []; //this will be an array of current index values
var randomIndex = []; //this will be 6 used indices
var numberClicked = [];
var numberShown = [];

// Let's build our friendly constructor:
function ProductVoter(filepath, altText) {
  this.filepath = filepath;
  this.altText = altText;
  this.numberClicked = 0;
  this.numberShown = 0;
  allProducts.push(this);
}

//end constructor, great job.

// Instantiate:
new ProductVoter('img/bag.jpg', 'bag');
new ProductVoter('img/banana.jpg','banana');
new ProductVoter('img/bathroom.jpg','bathroom');
new ProductVoter('img/boots.jpg', 'boots');
new ProductVoter('img/breakfast.jpg', 'breakfast');
new ProductVoter('img/bubblegum.jpg', 'bubblegum');
new ProductVoter('img/chair.jpg','chair');
new ProductVoter('img/cthulhu.jpg','cthulhu');
new ProductVoter('img/dog-duck.jpg', 'dog-duck');
new ProductVoter('img/dragon.jpg', 'dragon');
new ProductVoter('img/pen.jpg', 'pen');
new ProductVoter('img/pet-sweep.jpg','pet-sweep');
new ProductVoter('img/scissors.jpg','scissors');
new ProductVoter('img/shark.jpg', 'shark');
new ProductVoter('img/sweep.jpg', 'sweep');
new ProductVoter('img/tauntaun.jpg', 'tauntaun');
new ProductVoter('img/unicorn.jpg','unicorn');
new ProductVoter('img/usb.jpg','usb');
new ProductVoter('img/water-can.jpg', 'water-can');
new ProductVoter('img/wine-glass.jpg', 'wine-glass');

//randomly generate a number to use as an index value
function ranNum() {
  var random = Math.random() * allProducts.length;
  var roundedDown = Math.floor(random);
  return roundedDown;
}


// Render images to screen
var renderImages = function() {

  var randomIndex0 = 0;
  randomIndex0 = ranNum();
  for (var i = 0; i < 6; i++)
  {
    if (!randomIndex.includes(randomIndex0)) {
      randomIndex.unshift(randomIndex0);
    }
    else {randomIndex0 = ranNum();
    }
  }


  console.log('first index value on screen',randomIndex0);

  var randomProduct0 = allProducts[randomIndex0]; //feeds that random index value to allProducts
  randomIndex.unshift(randomIndex0);

  console.log('integers of randomIndex:',randomIndex);

  if ((randomIndex.length) > 6); { //pop the 7th element off randomIndex
    randomIndex.pop;

    return(randomIndex0);

  }

  // for (var j = 0; j < 6; j++) {
  //   if (!randomIndex.includes(randomIndex0)) {
  //     randomIndex.unshift(randomIndex0);
  //   }
  //   else {randomIndex0 = ranNum();
  //   }
  // }
  // console.log(randomIndex); //integers

  // console.log(randomProduct0); //object

  // ProductVoter.randomProduct0 = document.getElementById('qualityProduct0');

  // end selection of first qualityProduct0
};


renderImages();
