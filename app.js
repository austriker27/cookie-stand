'use strict';

//an array for all the hours the store is open
var storeHrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// set up an array for stores
var stores = ['pike', 'seatac', 'seattle center', 'capitol hill', 'alki'];

// create constructor with properties
function Store(store, minCust, maxCust, avgCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSold = [];
  this.totalCookiesSold = 0;
  this.genRandomCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.calcCookiesSold = function () {
    this.cookiesSold = [];
    this.totalCookieSolds = 0;
    for (var i = 0; i < storeHrs.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.genRandomCust());
      this.cookiesSold.push(hourlyCookieSales);
      this.totalCookiesSold += hourlyCookieSales;
    }
  };
  this.dailySalesReport = function() {
    this.calcCookiesSold();
    var placeSpot = document.getElementById('sales-list');

    var locationName = document.createElement('h2');
    locationName.innerText = this.place;
    store.appendChild(locationName);

    var list = document.createElement('ul');
    placeSpot.appendChild(list);

    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSold + ' cookies';
    list.appendChild(listItems);

    for (var i = 0; i < storeHrs.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = storeHrs[i] + ': ' + this.cookiesSold[i] + ' cookies';
      list.appendChild(listItems);
    }
  };

  this.genRandomCust();
  this.calcCookiesSold();

  for (var i = 0; i < stores.length; i++) {
    stores[i].dailySalesReport();
  }
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//
//
//
//
//
//
//
//
//
//
//
// //first cookie stand
// var pike = {
//   location: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesSold:[],
//   // totalCookiesSold: [],
//   genRandomCust: function() {
//     return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
//   },
//   calcCookiesSold: function() {
//     this.cookiesSold = [];
//     for (var i = 0; i < 14; i++) {
//       var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
//       this.cookiesSold.push(Math.round(hrlyCookiesSold));
//     }
//   }
// };
//
// pike.genRandomCust();
// pike.calcCookiesSold();
//
// //adding shop location name to the list
// var stores = document.getElementById('shopLocation');
// stores.textContent = pike.location;
//
// //for loop that should add list items for the hour of day and sales
// for (var i = 0; i < hourOfDay.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hourOfDay[i] + ': ' + pike.cookiesSold[i] + ' cookies sold.';
//   list.appendChild(newLi);
// }
//
// //for loop to calc totals
// var sumOne = 0;
// for (var i = 0; i < pike.cookiesSold.length; i++) {
//   var totalLi = document.createElement('li');
//   sumOne = sumOne + pike.cookiesSold[i];
// }
// totalLi.innerText = 'Total: ' + sumOne + ' cookies';
// total.appendChild(totalLi);
//
// var seaTac = {
//   location: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesSold:[],
//   genRandomCust: function() {
//     return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
//   },
//   calcCookiesSold: function() {
//     this.cookiesSold = [];
//     for (var i = 0; i < 14; i++) {
//       var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
//       this.cookiesSold.push(Math.round(hrlyCookiesSold));
//     }
//   }
// };
//
// seaTac.genRandomCust();
// seaTac.calcCookiesSold();
//
// //adding shop location name to the list
// var stores = document.getElementById('shopLocation2');
// stores.textContent = seaTac.location;
//
// //for loop that should add list items for the hour of day and sales
// for (var i = 0; i < hourOfDay.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hourOfDay[i] + ': ' + seaTac.cookiesSold[i] + ' cookies sold.';
//   list2.appendChild(newLi);
// }
//
// var sumOne = 0;
// for (var i = 0; i < seaTac.cookiesSold.length; i++) {
//   var totalLi = document.createElement('li');
//   sumOne = sumOne + seaTac.cookiesSold[i];
// }
// totalLi.innerText = 'Total: ' + sumOne + ' cookies';
// total2.appendChild(totalLi);
//
// var seattleCenter = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesSold:[],
//   genRandomCust: function() {
//     return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
//   },
//   calcCookiesSold: function() {
//     this.cookiesSold = [];
//     for (var i = 0; i < 14; i++) {
//       var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
//       this.cookiesSold.push(Math.round(hrlyCookiesSold));
//     }
//   }
// };
//
// seattleCenter.genRandomCust();
// seattleCenter.calcCookiesSold();
//
// //adding shop location name to the list
// var stores = document.getElementById('shopLocation3');
// stores.textContent = seattleCenter.location;
//
// //for loop that should add list items for the hour of day and sales
// for (var i = 0; i < hourOfDay.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hourOfDay[i] + ': ' + seattleCenter.cookiesSold[i] + ' cookies sold.';
//   list3.appendChild(newLi);
// }
//
// var sumOne = 0;
// for (var i = 0; i < seattleCenter.cookiesSold.length; i++) {
//   var totalLi = document.createElement('li');
//   sumOne = sumOne + seattleCenter.cookiesSold[i];
// }
// totalLi.innerText = 'Total: ' + sumOne + ' cookies';
// total3.appendChild(totalLi);
//
// var capitolHill = {
//   location: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesSold:[],
//   genRandomCust: function() {
//     return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
//   },
//   calcCookiesSold: function() {
//     this.cookiesSold = [];
//     for (var i = 0; i < 14; i++) {
//       var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
//       this.cookiesSold.push(Math.round(hrlyCookiesSold));
//     }
//   }
// };
//
// capitolHill.genRandomCust();
// capitolHill.calcCookiesSold();
//
// //adding shop location name to the list
// var stores = document.getElementById('shopLocation4');
// stores.textContent = capitolHill.location;
//
// //for loop that should add list items for the hour of day and sales
// for (var i = 0; i < hourOfDay.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hourOfDay[i] + ': ' + capitolHill.cookiesSold[i] + ' cookies sold.';
//   list4.appendChild(newLi);
// }
//
// var sumOne = 0;
// for (var i = 0; i < capitolHill.cookiesSold.length; i++) {
//   var totalLi = document.createElement('li');
//   sumOne = sumOne + capitolHill.cookiesSold[i];
// }
// totalLi.innerText = 'Total: ' + sumOne + ' cookies';
// total4.appendChild(totalLi);
//
// var alki = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesSold:[],
//   genRandomCust: function() {
//     return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
//   },
//   calcCookiesSold: function() {
//     this.cookiesSold = [];
//     for (var i = 0; i < 14; i++) {
//       var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
//       this.cookiesSold.push(Math.round(hrlyCookiesSold));
//     }
//   }
// };
//
// alki.genRandomCust();
// alki.calcCookiesSold();
//
// //adding shop location name to the list
// var stores = document.getElementById('shopLocation5');
// stores.textContent = alki.location;
//
// //for loop that should add list items for the hour of day and sales
// for (var i = 0; i < hourOfDay.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hourOfDay[i] + ': ' + alki.cookiesSold[i] + ' cookies sold.';
//   list5.appendChild(newLi);
// }
//
// var sumOne = 0;
// for (var i = 0; i < alki.cookiesSold.length; i++) {
//   var totalLi = document.createElement('li');
//   sumOne = sumOne + alki.cookiesSold[i];
// }
// totalLi.innerText = 'Total: ' + sumOne + ' cookies';
// total5.appendChild(totalLi);
//
