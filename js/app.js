'use strict';
var allProducts = [];
var allProductIdNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
console.log(allProductIdNames);
// I'll connect this to the DOM:
ProductVoter.imgElement = document.getElementById('qualityProduct');



function ProductVoter(idName, filepath, numberClicked, numberShown) {
  this.idName = idName;
  this.filepath = filepath;
  // numberClicked and numberShown will need to be vars assigned to functions, or maybe prototypes
  this.numberClicked = numberClicked;
  this.numberShown = numberShown;
  allProducts.push(this);
  console.log(this);
} //end constructor
new ProductVoter('img/bag.jpg', 'bag', 0, 0);
new ProductVoter('img/banana.jpg','banana', 0, 0);
// new ProductVoter('img/bathroom.jpg','bathroom', 0, 0);
// new ProductVoter('img/boots.jpg','boots', 0, 0);
// new ProductVoter('img/breakfast.jpg','breakfast', 0, 0);
// new ProductVoter('img/bubblegum.jpg','bubblegum', 0, 0);
// new ProductVoter('img/chair.jpg','chair', 0, 0);
// new ProductVoter('img/cthulhu.jpg','cthulhu', 0, 0);
// new ProductVoter('img/dog-duck.jpg','dog-duck', 0, 0);
// new ProductVoter('img/dragon.jpg','dragon', 0, 0);
// new ProductVoter('img/pen.jpg','pen', 0, 0);
// new ProductVoter('img/pet-sweep.jpg','pet-sweep', 0, 0);
// new ProductVoter('img/scissors.jpg','scissors', 0, 0);
// new ProductVoter('img/shark.jpg','shark', 0, 0);
// new ProductVoter('img/sweep.jpg','sweep', 0, 0);
// new ProductVoter('img/tauntaun.jpg','tauntaun', 0, 0);
// new ProductVoter('img/unicorn.jpg','unicorn', 0, 0);
// new ProductVoter('img/usb.gif','usb', 0, 0);
// new ProductVoter('img/water-can.jpg','water-can', 0, 0);
// new ProductVoter('img/wine-glass.jpg','wine-glass', 0, 0);

console.log(allProducts);

//randomly generate a number to use as an index value
function ranNum() {
  var random = Math.random() * allProducts.length;
  var roundedDown = Math.floor(random);
  return roundedDown;
}

ProductVoter.renderProductvoter = function() {
  // make our randomIndex number to feed a position in array Goat.allGoats
  var randomIndex = ProductVoter.ranNum();

  // now we use that to get our random product:
  var randomProduct = allProducts[randomIndex];
  // randomProduct won't be an array, it'll be a new product for each event.
  //now, modify idname:
  ProductVoter.imgElement.idName = randomProduct.idName;
  ProductVoter.imgElement.filepath = randomProduct.filepath;
  ProductVoter.imgElement.caption = randomProduct.caption;
  ProductVoter.imgElement.numberClicked = randomProduct.numberClicked;
  ProductVoter.imgElement.numberShown = randomProduct.numberShown;
}; //end render function


// trash array of discarded indices
var oldPics = [];

//where in the HTML to put the 1st wormhole
var staple = document.getElementById('qualityProduct0');
var picker0 = 0;
// picture 1 with conditions
function render0() {
  var picker0 = 0;
  picker0 = ranNum();
  oldPics.push(picker0);
  console.log('first rando: ' + picker0);
  // Now we make our loop to temporarily trash used indices
  while (picker0 === oldPics[0]) {
    ranNum();
    picker0 = ranNum();
    console.log('new rando: ' + picker0);
  }
  console.log('shiny new rando: ' + picker0);
  oldPics[0] = picker0;
  // populate that used index value into the trash
  staple.src = allProducts[picker0].idName;
  // oldPics[0] = picker0;
  // console.log(oldPics[0]);
}
render0();




// listen to the image element and add event listener, maybe I need to add three, one for each button?
// ProductVoter.imgElement.addEventListener('click', ProductVoter.randomProduct);
//idName, filepath, caption, numberClicked, numberShown









