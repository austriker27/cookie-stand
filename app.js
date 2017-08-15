'use strict';

//an array for all the hours the store is open
var hourOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//first cookie stand
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
    this.cookiesSold = [];
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

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand.cookiesSold[i] + ' cookies sold.';
  list.appendChild(newLi);
}

//for loop to calc totals
var sumOne = 0;
for (var i = 0; i < cookieStand.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + cookieStand.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total.appendChild(totalLi);

var cookieStand2 = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    this.cookiesSold = [];
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(Math.round(hrlyCookiesSold));
    }
  }
};

cookieStand2.genRandomCust();
cookieStand2.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation2');
stores.textContent = cookieStand2.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand2.cookiesSold[i] + ' cookies sold.';
  list2.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < cookieStand2.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + cookieStand2.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total2.appendChild(totalLi);

var cookieStand3 = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    this.cookiesSold = [];
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(Math.round(hrlyCookiesSold));
    }
  }
};

cookieStand3.genRandomCust();
cookieStand3.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation3');
stores.textContent = cookieStand3.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand3.cookiesSold[i] + ' cookies sold.';
  list3.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < cookieStand3.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + cookieStand3.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total3.appendChild(totalLi);

var cookieStand4 = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    this.cookiesSold = [];
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(Math.round(hrlyCookiesSold));
    }
  }
};

cookieStand4.genRandomCust();
cookieStand4.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation4');
stores.textContent = cookieStand4.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand4.cookiesSold[i] + ' cookies sold.';
  list4.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < cookieStand4.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + cookieStand4.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total4.appendChild(totalLi);

var cookieStand5 = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesSold:[],
  genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;
  },
  calcCookiesSold: function() {
    this.cookiesSold = [];
    for (var i = 0; i < 14; i++) {
      var hrlyCookiesSold = this.avgCookies * this.genRandomCust();
      this.cookiesSold.push(Math.round(hrlyCookiesSold));
    }
  }
};

cookieStand5.genRandomCust();
cookieStand5.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation5');
stores.textContent = cookieStand5.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + cookieStand5.cookiesSold[i] + ' cookies sold.';
  list5.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < cookieStand5.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + cookieStand5.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total5.appendChild(totalLi);
