'use strict';
// var imgElement0 = document.getElementById('qualityProduct0');
var imgElement0 = document.getElementById('qualityProduct0');
var imgElement1 = document.getElementById('qualityProduct1');
var imgElement2 = document.getElementById('qualityProduct2');

var allProducts = [];
var oldPics = [];
var currentPics = [];



function ProductVoter(filepath, altText) {
  this.filepath = filepath;
  this.altText = altText;
  this.numberClicked = 0;
  this.numberShown = 0;
  allProducts.push(this);
} //end constructor

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
// console.log(allProducts);

//randomly generate a number to use as an index value
function ranNum() {
  var random = Math.random() * allProducts.length;
  var roundedDown = Math.floor(random);
  return roundedDown;
}

function renderImages() {

  currentPics[0] = oldPics[0];
  currentPics[1] = oldPics[1];
  currentPics[2] = oldPics[2];

  console.log(currentPics);

  imgElement0.src = currentPics[0].filepath;
  imgElement1.src = currentPics[1].filepath;
  imgElement2.src = currentPics[2].filepath;

}





// trash array of discarded indices



function getOldPics () {
  while (oldPics.length < 7) {
    var randomIndex = ranNum();
    console.log('get ranNum ' + randomIndex);
    oldPics.push(allProducts[randomIndex]);
  }

}
getOldPics();
renderImages();



// populate that used index value into the trash

// staple.src = allProducts[picker0].idName;
// oldPics[0] = picker0;
// console.log(oldPics[0]);

// Now for the 2nd image
var picker1 = 0;
picker1 = ranNum();
while (!oldPics.includes(picker1)) {
  ranNum();
  picker0 = ranNum();
  console.log('new rando: ' + picker0);
}

render0();




// listen to the image element and add event listener, maybe I need to add three, one for each button?
// ProductVoter.imgElement.addEventListener('click', ProductVoter.randomProduct);
//idName, filepath, caption, numberClicked, numberShown



// ProductVoter.renderProductvoter = function() {
// make our randomIndex number to feed a position in array Goat.allGoats
// var randomIndex = ProductVoter.ranNum();

// now we use that to get our random product: I THINK THIS IS WHAT'S POPULATING MY DISPLAYED ARRAY INSTEAD OF THE PREVIOUS INDEX VALUE USED
// var randomProduct = allProducts[randomIndex];
// randomProduct won't be an array, it'll be a new product for each event.
//now, modify idname:
// ProductVoter.imgElement.altText = randomProduct.altText;
// ProductVoter.imgElement.filepath = randomProduct.filepath;
// ProductVoter.imgElement.caption = randomProduct.caption;
// ProductVoter.imgElement.numberClicked = randomProduct.numberClicked;
// ProductVoter.imgElement.numberShown = randomProduct.numberShown;
// }; //end render function


//where in the HTML to put the 1st wormhole
// var staple = document.getElementById('qualityProduct0');
// var picker0 = 0;
// picture 1 with conditions
// function render0() {
// var picker0 = 0;
// picker0 = ranNum();
// // oldPics.push(picker0);
// console.log('first rando: ' + picker0);
// Now we make our loop to temporarily trash used indices
