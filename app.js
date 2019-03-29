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
  var arrayClone = allProductsArray.slice(0); //clone to prevent removing items from the original array. ZERO MULTILATION ALLOWED!
  var displayArray = [];
  var a;

  a = Math.floor(Math.random() * arrayClone.length);
  displayArray.push(arrayClone[a]); // pushing a random item from clone to displayArray
  arrayClone.splice(a, 1); // remove item at index [a] from arrayClone so no duplicates can be picked then returns item

  a = Math.floor(Math.random() * arrayClone.length);
  displayArray.push(arrayClone[a]);
  arrayClone.splice(a, 1);

  a = Math.floor(Math.random() * arrayClone.length);
  displayArray.push(arrayClone[a]);
  return displayArray;
};


var randomProductSet = function () {
  var productsDonePicked = randomIndexArray();

  var oldLeft = document.getElementById('left'); // whats is, the element with ID left originally
  var left = oldLeft.cloneNode(true); //a copy of the element with ID left
  oldLeft.parentNode.replaceChild(left, oldLeft); //on the DOM puts left where oldLeft used to be (done to remove stacking click debuff)

  var oldMiddle = document.getElementById('middle');
  var middle = oldMiddle.cloneNode(true);
  oldMiddle.parentNode.replaceChild(middle, oldMiddle);

  var oldRight = document.getElementById('right');
  var right =oldRight.cloneNode(true);
  oldRight.parentNode.replaceChild(right, oldRight);


  //if to fetch a new picture and add event listener
  if(totalClicks < 25) {
    var randomProduct1 = productsDonePicked[0];
    left.src = randomProduct1.path;
    randomProduct1.view++;
    left.addEventListener('click', function clickLeft(){
      randomProduct1.click++;
      totalClicks++;
      randomProductSet();

    });

    var randomProduct2 = productsDonePicked[1];
    middle.src = randomProduct2.path;
    randomProduct2.view++;
    middle.addEventListener('click', function clickMiddle(){
      randomProduct2.click++;
      totalClicks++;
      randomProductSet();

    });

    var randomProduct3 = productsDonePicked[2];
    right.src =randomProduct3.path;
    randomProduct3.view++;
    right.addEventListener('click', function clickRight(){
      randomProduct3.click++;
      totalClicks++;
      randomProductSet();

    });
  }
  else {
    localStorage.setItem ('allProductsArray', JSON.stringify(allProductsArray));
    endFunction(allProductsArray);
  }
};

var endFunction = function (endFunctionArray) {
  console.log('25 or bigger');

  var labelNames = [];
  var clickData = [];
  var veiwData = [];

  for (var i = 0; i < endFunctionArray.length; i++){
    labelNames.push(endFunctionArray[i].name);
    clickData.push(endFunctionArray[i].click);
    veiwData.push(endFunctionArray[i].view);
  }

  //----------chart js------------//
  var ctx = document.getElementById('datagraph').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: labelNames,
      datasets: [{
        label: 'Poduct Votes',
        backgroundColor: 'rgb(169,169,169)',
        borderColor: 'rgb(169,169,169)',
        data: clickData,
      },
      {
        label: 'View Count',
        data: veiwData,
        
      }]
    },

    options: {}
  });

};

var loadData = function () {
  if (localStorage['allProductsArray'] ) {
    endFunction(JSON.parse(localStorage.getItem('allProductsArray')));
  }
  else { randomProductSet();
  }
};

loadData();
/* local storage??

localStorage.setItem ('allProductsArray', JSON.stringify(allProductsArray));
var "whatever im getting" = JSON.parse(localStorage.getItem('thing i get'));
*/