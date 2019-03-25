'use strict';

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.view = 0;
  this.click = 0;
}


var bag = new Product('bag.jpg', './img/bag.jpg');
var banana = new Product('banana.jpg', './img/banana.jpg');
var bathroom = new Product('bathroom.jpg', './img/bathroom.jpg');
var boots = new Product('boots.jpg', './img/boots.jpg');
var breakfast = new Product('breakfast.jpg', './img/breakfast.jpg');
var bubblegum = new Product('bubblegum.jpg', './img/bubblegum.jpg');
var chair = new Product('chair.jpg', './img/chair.jpg');
var cthulhu = new Product('cthulhu.jpg', './img/cthulhu.jpg');
var dogDuck = new Product('dog-duck.jpg', './img/dog-duck.jpg');
var dragon = new Product('dragon.jpg', './img/dragon.jpg');
var pen = new Product('pen.jpg', './img/pen.jpg');
var petSweep = new Product('pet-sweep.jpg', './img/pet-sweep.jpg');
var scissors = new Product('scissors.jpg', './img/scissors.jpg');
var shark = new Product('shark.jpg', './img/shark.jpg');
var sweep = new Product('sweep.png', './img/sweep.png');
var tauntaun = new Product('tauntaun.jpg', './img/tauntaun.jpg');
var usb = new Product('usb.gif', './img/usb.gif');
var waterCan = new Product('water-can.jpg', './img/water-can.jpg');
var wineGlass = new Product('wine-glass.jpg', './img/wine-glass.jpg');

var allProductsArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, usb, waterCan, wineGlass];




var randomProductSet = function () {
  var randomIndex1 = Math.floor(Math.random() * allProductsArray.length);
  var randomProduct1 = allProductsArray[randomIndex1];
  document.getElementById('left').src = randomProduct1.path;

  var randomIndex2 = Math.floor(Math.random() * allProductsArray.length);
  var randomProduct2 = allProductsArray[randomIndex2];
  document.getElementById('middle').src = randomProduct2.path;

  var randomIndex3 = Math.floor(Math.random() * allProductsArray.length);
  var randomProduct3 = allProductsArray[randomIndex3];
  document.getElementById('right').src =randomProduct3.path;
};

randomProductSet();

/* --------things to attempt to figure out/use -------------

i need to turn all of the products into ojects?

i need to pull a random picture from the allProducts arrary
Math.random() * allProductsArray.length??

i need to shove 3 different images into the html img tags
documnet.body.write? ----i don't know

i need to turn them into clickable things and track what gets clicked event listener
document.getElementById("").addEventListener('click')

i need to get new images when an image is clicked

document.getElementById("left").src <--- something happens with this?

i need to beat my head agaisnt the wall until i don't want to spaz at everyone near me or have a full on anxiety attack

*/