'use strict';

var cookieStand = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSold:[],
  // totalCookiesSold: [],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(Math.round(hrlyCookiesSold));
    }
  }
};

cookieStand.genRandomCust();
cookieStand.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation');
stores.textContent = cookieStand.location;

//an array for all the hours the store is open
var hourOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//for loop that should add list items for the hour of day and sales

// var ul = document.createElement('ul');
// ul.id = 'list';

for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand.cookiesSold[i] + ' cookies sold.';
  list.appendChild(newLi);
}

var cookieShops = {
  shop: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(hrlyCookiesSold);
    }
  }
};

var cookieShops = {
  shop: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(hrlyCookiesSold);
    }
  }
};

var cookieShops = {
  shop: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(hrlyCookiesSold);
    }
  }
};

var cookieShops = {
  shop: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(hrlyCookiesSold);
    }
  }
};
