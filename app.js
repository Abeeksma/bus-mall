'use strict';
var totalClicks = 0;

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.view = 0;
  this.click = 0;
}

var bag = new Product('bag', './img/bag.jpg');
var banana = new Product('banana', './img/banana.jpg');
var bathroom = new Product('bathroom', './img/bathroom.jpg');
var boots = new Product('boots', './img/boots.jpg');
var breakfast = new Product('breakfast', './img/breakfast.jpg');
var bubblegum = new Product('bubblegum', './img/bubblegum.jpg');
var chair = new Product('chair', './img/chair.jpg');
var cthulhu = new Product('cthulhu', './img/cthulhu.jpg');
var dogDuck = new Product('dog-duck', './img/dog-duck.jpg');
var dragon = new Product('dragon', './img/dragon.jpg');
var pen = new Product('pen', './img/pen.jpg');
var petSweep = new Product('pet-sweep', './img/pet-sweep.jpg');
var scissors = new Product('scissors', './img/scissors.jpg');
var shark = new Product('shark', './img/shark.jpg');
var sweep = new Product('sweep', './img/sweep.png');
var tauntaun = new Product('tauntaun', './img/tauntaun.jpg');
var usb = new Product('usb', './img/usb.gif');
var waterCan = new Product('water-can', './img/water-can.jpg');
var wineGlass = new Product('wine-glass', './img/wine-glass.jpg');

var allProductsArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, usb, waterCan, wineGlass];


var randomIndexArray = function () {
  var arrayClone = allProductsArray.slice(0);           //clone to prevent removing items from the original array. ZERO MULTILATION ALLOWED!
  var displayArray = [];
  var a; 
  
  a = Math.floor(Math.random() * arrayClone.length);
  console.log(arrayClone.length);
  displayArray.push(arrayClone[a]);                     // pushing a random item from clone to displayArray 
  arrayClone.splice(a, 1);                              // remove item at index a from arrayClone so no duplicates can be picked
  
  a = Math.floor(Math.random() * arrayClone.length);
  console.log(arrayClone.length);
  displayArray.push(arrayClone[a]);
  arrayClone.splice(a, 1);
 
  a = Math.floor(Math.random() * arrayClone.length);
  console.log(arrayClone.length);
  displayArray.push(arrayClone[a]);
  return displayArray;
};


var randomProductSet = function () {
  var productsDonePicked = randomIndexArray();

  var randomProduct1 = productsDonePicked[0];
  document.getElementById('left').src = randomProduct1.path;
  document.getElementById('left').addEventListener('click', function(){
    randomProduct1.click++;
    totalClicks++;
  });

  var randomProduct2 = productsDonePicked[1];
  document.getElementById('middle').src = randomProduct2.path;
  document.getElementById('middle').addEventListener('click', function(){
    randomProduct2.click++;
    totalClicks++;
  });

  var randomProduct3 = productsDonePicked[2];
  document.getElementById('right').src =randomProduct3.path;
  document.getElementById('right').addEventListener('click', function(){
    randomProduct3.click++;
    totalClicks++;
    console.log(totalClicks);
  });
};



randomProductSet();

