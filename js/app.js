'use strict';
// We'll connect the pictures to the DOM:
// ProductVoter.imgElement = document.getElementById('options');
ProductVoter.imgElement0 = document.getElementById('qualityProduct0');
ProductVoter.imgElement1 = document.getElementById('qualityProduct1');
ProductVoter.imgElement2 = document.getElementById('qualityProduct2');

// add clicking
// ProductVoter.imgElement0.addEventListener('click', registerVote);
// ProductVoter.imgElement1.addEventListener('click', registerVote);
// ProductVoter.imgElement1.addEventListener('click', registerVote);

// function registerVote(){
//   var currentTarget = event.target.currentSrc.slice(53);
//   console.log (currentTarget);
//   voteCount++;
//   if (voteCount <26) {

//     for (var j = 0 ; j < Product.allProduct.length ; j++) {
//       if(event.target.alt === Product.allProducts[j].name){
//         Product.allProduct[j].votes++;
//         console.log(Product.allProduct[j].votes);
//       }
//     };


// var dummyChart = document.getElementById('dummyChart').getContext('2d');


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

// Variables for random index values
// ProductVoter.randomIndex0 = 0;
// ProductVoter.randomIndex1 = 0;
// ProductVoter.randomIndex2 = 0;

// Render images to screen
var renderImages = function() {


  var randomIndex0 = ranNum();
  for (var i = 0; i < 6; i++)
  {
    if (!randomIndex.includes(randomIndex0)) {
      randomIndex.unshift(randomIndex);
    }
    else {randomIndex0 = ranNum();
    }
  }


  console.log('first index value on screen',randomIndex0);

  var randomProduct0 = allProducts[randomIndex0]; //feeds that random index value to allProducts
  randomIndex.unshift(randomIndex0);

  console.log('first of 6 used indices',randomIndex[0]);

  if ((randomIndex.length) > 6); { //pop the 7th element off randomIndex
    randomIndex.pop;
  }

  for (var j = 0; j < 6; j++) {
    if (!randomIndex.includes(randomIndex0)) {
      randomIndex.unshift(randomIndex0);
    }
    else {randomIndex0 = ranNum();
    }
  }
  console.log(randomIndex);
  //end selection of first qualityProduct0


  //   var randomIndex1 = ranNum();
  //   for (var k = 0; k < 6; k++)
  //   {
  //     if (!randomIndex.includes(randomIndex1)) {
  //       randomIndex.unshift(randomIndex1);
  //     }
  //     else {randomIndex1 = ranNum();
  //     }
  //   }


  //   console.log('second index value on screen',randomIndex1);

  //   var randomProduct1 = allProducts[randomIndex1];
  //   randomIndex.unshift(randomIndex1);

  //   console.log('second of 6 used indices',randomIndex1);

  //   if ((randomIndex.length) > 6); {
  //     randomIndex.pop;
  //   }

  //   for (var l = 0; l < 6; l++) {
  //     if (!randomIndex.includes(randomIndex1)) {
  //       randomIndex.unshift(randomIndex1);
  //     }
  //     else {randomIndex1 = ranNum();
  //     }

  // construct the instances on screen
  ProductVoter.imgElement0.src = randomProduct0.filepath;
  ProductVoter.imgElement0.alt = randomProduct0.altText;

  console.log(randomIndex);
};
// };

// console.log(randomIndex);
// var randomInderanNum();
// console.log('second index value on screen',randomIndex1);
// var randomProduct1 = randomIndex.unshift(randomIndex1);
// console.log('second of six used indirandomIndex);

// var randomIndex2 = ProductVoter.ranNum();
// console.log('third index value on screen',randomIndex2);
// var randomProduct2 = ProductVoter.allProducts[randomIndex2];
// ProductVoter.randomIndex.unshift(randomIndex2);
// console.log('third of six used indices',ProductVoter.randomIndex);



// ProductVoter.imgElement0.src = randomProduct0.filepath;
// ProductVoter.imgElement0.alt = randomProduct0.altText;


// var randomIndex1 = ProductVoter.ranNum();
// var randomProduct1 = ProductVoter.allProducts[randomIndex1];

// ProductVoter.imgElement1.src = randomProduct1.filepath;
// ProductVoter.imgElement1.alt = randomProduct1.altText;

// var randomIndex2 = ProductVoter.ranNum();
// var randomProduct2 = ProductVoter.allProducts[randomIndex2];

// ProductVoter.imgElement2.src = randomProduct2.filepath;
// ProductVoter.imgElement2.alt = randomProduct2.altText;
// };


// randomizing images and removing duplicates
// for (var i = 0; i < 7; i++) {
//   if (!ProductVoter.productsDisplayed.includes(ProductVoter.randomIndex0)) {
//     ProductVoter.productsDisplayed.unshift(ProductVoter.randomIndex);
//   }
//   else {ProductVoter.randomIndex0 = ProductVoter.ranNum();
//   }
// }

// for (var j = 0; j < 7; j++) {
//   if (!ProductVoter.productsDisplayed.includes(ProductVoter.randomIndex1)&&(ProductVoter.randomIndex1)!==(ProductVoter.randomIndex0)) {
//     ProductVoter.productsDisplayed.unshift(ProductVoter.randomIndex);
//   }
//   else {ProductVoter.randomIndex1 = ProductVoter.ranNum();
//   }
// }
// for (var k = 0; k < 7; k++) {
//   if (!ProductVoter.productsDisplayed.includes(ProductVoter.randomIndex2)) {
//     ProductVoter.productsDisplayed.unshift(ProductVoter.randomIndex);
//   }
//   else {ProductVoter.randomIndex2 = ProductVoter.ranNum();
//   }
// }


// Render images to screen
// ProductVoter.renderImages = function() {

//   var randomIndex0 = ProductVoter.ranNum();
//   var randomProduct0 = ProductVoter.allProducts[randomIndex0];

//   ProductVoter.imgElement0.src = randomProduct0.filepath;
//   ProductVoter.imgElement0.alt = randomProduct0.altText;


//   var randomIndex1 = ProductVoter.ranNum();
//   var randomProduct1 = ProductVoter.allProducts[randomIndex1];

//   ProductVoter.imgElement1.src = randomProduct1.filepath;
//   ProductVoter.imgElement1.alt = randomProduct1.altText;

//   var randomIndex2 = ProductVoter.ranNum();
//   var randomProduct2 = ProductVoter.allProducts[randomIndex2];

//   ProductVoter.imgElement2.src = randomProduct2.filepath;
//   ProductVoter.imgElement2.alt = randomProduct2.altText;
// };
// make them clickable and make that matter
// imgElement0.addEventListener('click', registerVote);
// ProductVoter.handleClick = function(event) {
//   ProductVoter.numberClicked++;

//   for (var i = 0; i < ProductVoter.allProducts.length; i++) {
//     if (event.target.alt === ProductVoter.allProducts[i].altText) {
//       ProductVoter.allProducts[i].numberClicked++;
//     }
//   }

// }
// renderImages();

// randomIndex0 = 0;
// randomIndex1 = 0;
// andomIndex2 = 0;





// var allProductAltText = [];
// ProductVoter.allProduct.altText = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];


// We still have a lot to do, but for now we'll move on and make a chart.

// var dummyChart = getElementById('dummyChart').getContext('2d');
// new chart(dummyChart).Bar(barData) { // eslint disable
//   [labels: [1, 2, 3, 4, 5, 7],
//   datasets: [
//     fillColor: "rgb(100, 100, 100)",
//     strokeColor: "black",
//     data: [10, 20, 30, 40, 50, 60]
//   ]
// ]
// }



// We'll make some dummy variables for now

// var dummyVariables = [ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum()];
// console.log(dummyVariables);
// that didn't work, so we'll count up from one.
// var barData = {

// }
// ;

