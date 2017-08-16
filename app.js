'use strict';

//an array for all the hours the store is open
var storeHrs = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var stores = [];

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
      this.cookiesSold.push(hourlyCookieSales);
      this.totalCookiesSold += hourlyCookieSales;
    }
  };
  this.dailySalesReport = function() {
    this.calcCookiesSold();
    var bodyHead = document.getElementsByTagName('table')[1];
    var tableBodyHead = document.createElement('tr');
    bodyHead.appendChild(tableBodyHead);
    var rowStore = document.createElement('td');
    rowStore.innerText = this.store;
    tableBodyHead.appendChild(rowStore);
    for (var i = 0; i < storeHrs.length; i++) {
      var storeSales = document.createElement('td');
      storeSales.innerText = this.cookiesSold[i];
      tableBodyHead.appendChild(storeSales);
    }
  };
  stores.push(this);
};

//prior instances of stores
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//table header that lists out the names of the places
function render() {
  var headerSpot = document.getElementById('sales-list');
  var salesTable = document.createElement('table');
  headerSpot.appendChild(salesTable);
  var tableRow = document.createElement('tr');
  salesTable.appendChild(tableRow);
  var topLeft = document.createElement('td');
  tableRow.appendChild(topLeft);
  for (var i = 0; i < storeHrs.length; i++) {
    var storeHour = document.createElement('td');
    storeHour.innerText = storeHrs[i];
    tableRow.appendChild(storeHour);
  }
  var topRight = document.createElement('th');
  topRight.innerHTML = 'Daily Location Total';
  tableRow.appendChild(topRight);
}
render();

//filling the table footer with cookie totals
function tableFooter() {
  var footerSpot = document.getElementsByTagName('table')[1];
  var totalsTable = document.createElement('tr');
  footerSpot.appendChild(totalsTable);
  for (var i = 0; i < storeHrs.length; i++) {
    var storeTotals = document.createElement('tr');
    storeTotals.innerText = ' ';
    totalsTable.appendChild(storeTotals);
  }
  var bottomRight = document.createElement('tr');
  bottomRight.innerText = 'Totals';
  footerSpot.appendChild(bottomRight);
};

//for loop that runs daily cookie sales for every store
for (var i = 0; i < stores.length; i++) {
  stores[i].dailySalesReport();
}

//calling the table footer
tableFooter();

// send user input from form into constructor
function harvestAndPost(event) {
  event.preventDefault();
  var newStore = new Store();
  newStore.store = this.elements['location'].value;
  newStore.minCust = this.elements['minCustomers'].value;
  newStore.maxCust = this.elements['maxCustomers'].value;
  newStore.avgCookies = this.elements['avgCookiesPerCust'].value;
  newStore.dailySalesReport();
}

//once submit is submitted run the harvest and post function
var submitInfo = document.getElementById('salesForm');
submitInfo.addEventListener('submit', harvestAndPost);
