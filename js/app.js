'use strict';
var allProducts = [];
var allProductIdNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
console.log(allProductIdNames);
// I'll connect this to the DOM:
ProductVoter.imgElement = document.getElementById('qualityProduct');

// I want to generate the file paths:
// var allProductFilePaths =[];
// for (var n = 0; n < allProductIdNames.length; n++) {
//   allProductFilePaths[n] = allProductIdNames[n] +'.jpg';
// }
// console.log(allProductFilePaths[4]);

function ProductVoter(idName, filepath, caption, numberClicked, numberShown) {
  this.idName = idName;
  this.filepath = filepath;
  this.caption = caption;
  // numberClicked and numberShown will need to be vars assigned to functions, or maybe prototypes
  this.numberClicked = numberClicked;
  this.numberShown = numberShown;
  ProductVoter.allProducts.push(this);
} //end constructor
new ProductVoter('bag', '\img\bag.jpg', 'Bag', 0, 0);

//randomly generate a number to use as an index value
ProductVoter.ranNum = function() {
  var random = Math.random() * allProducts.length;
  var roundedDown = Math.floor(random);
  return roundedDown;
};

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

//make new instances, remember that your filepath starts at the HTML document, NOT the js file. This means you don't need ..slash
// is there a more efficient way to make my 20 new instances?


// then I want to render 3 selected random images with buttons
ProductVoter.renderProductvoter();

// listen to the image element and add event listener, maybe I need to add three, one for each button?
ProductVoter.imgElement.addEventListener('click', ProductVoter.randomProduct);
//idName, filepath, caption, numberClicked, numberShown









