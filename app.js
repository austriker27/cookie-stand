'use strict';

//an array for all the hours the store is open
var storeHrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// create constructor with properties
function Store(store, minCust, maxCust, avgCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSold = [];
  this.genRandomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.calcCookiesSold = function() {
    this.cookiesSold = [];
    this.totalCookiesSold = 0;
    for (var i = 0; i < storeHrs.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.genRandomCust());
      // console.log('this is hourly Cookies' + hourlyCookieSales);
      this.cookiesSold.push(hourlyCookieSales);
      // console.log('this is cookies Sold' + this.cookiesSold);
      this.totalCookiesSold += hourlyCookieSales;
      // console.log('this is total cookies sold' + this.totalCookiesSold);
    }
  };
  this.dailySalesReport = function() {
    this.calcCookiesSold();
    var bodyHead = document.getElementsByTagName('table')[0];
    var tableBodyHead = document.createElement('tr');
    bodyHead.appendChild(tableBodyHead);
    var rowStore = document.createElement('tr');
    rowStore.innerHTML = Store.store;
    for (var i = 0; i < storeHrs.length; i++) {
      var storeSales = document.createElement('tr');
      storeSales.innerHTML = this.cookiesSold[i];
      bodyHead.appendChild(storeSales);
    }
  };
};

// set up an array for stores

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var stores = [pike, seatac, seattleCenter, capitolHill, alki];

function tableHead() {
  var headerSpot = document.getElementById('sales-list');
  var salesTable = document.createElement('table');
  headerSpot.appendChild(salesTable);
  var tableRow = document.createElement('tr');
  salesTable.appendChild(tableRow);
  var topLeft = document.createElement('th');
  tableRow.appendChild(topLeft);
  for (var i = 0; i < storeHrs.length; i++) {
    var storeHour = document.createElement('th');
    storeHour.innerHTML = storeHrs[i];
    tableRow.appendChild(storeHour);
  }
  var topRight = document.createElement('th');
  topRight.innerHTML = 'Daily Location Total';
  tableRow.appendChild(topRight);
}

tableHead();

function tableFooter() {
  var footerSpot = document.getElementByTagName('table');
  var totalsTable = document.createElement('tr');
  totalsTable.innerHTML = 'totals';
  footerSpot.appendChild(totalsTable);
  for (var i = 0; i < storeHrs.length; i++) {
    var storeTotals = document.createElement('tr');
    storeTotals.innerHTML = this.totalCookiesSold;
    footerSpot.appendChild(storeTotals);
  }
}

//
// function forloop() {
//   for (var i = 0; i < stores.length; i++) {
//     // console.log(stores);
//     stores[i].dailySalesReport();
//   }
// };
// forloop();
// replacing for loop with manual function calls because for loop hates me
tableHead();
pike.dailySalesReport();
seatac.dailySalesReport();
seattleCenter.dailySalesReport();
capitolHill.dailySalesReport();
alki.dailySalesReport();
tableFooter();
