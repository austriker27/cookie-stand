'use strict';

//an array for all the hours the store is open
var hourOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//first cookie stand
var pike = {
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

pike.genRandomCust();
pike.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation');
stores.textContent = pike.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + pike.cookiesSold[i] + ' cookies sold.';
  list.appendChild(newLi);
}

//for loop to calc totals
var sumOne = 0;
for (var i = 0; i < pike.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + pike.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total.appendChild(totalLi);

var seaTac = {
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

seaTac.genRandomCust();
seaTac.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation2');
stores.textContent = seaTac.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + seaTac.cookiesSold[i] + ' cookies sold.';
  list2.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < seaTac.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + seaTac.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total2.appendChild(totalLi);

var seattleCenter = {
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

seattleCenter.genRandomCust();
seattleCenter.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation3');
stores.textContent = seattleCenter.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + seattleCenter.cookiesSold[i] + ' cookies sold.';
  list3.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < seattleCenter.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + seattleCenter.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total3.appendChild(totalLi);

var capitolHill = {
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

capitolHill.genRandomCust();
capitolHill.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation4');
stores.textContent = capitolHill.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + capitolHill.cookiesSold[i] + ' cookies sold.';
  list4.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < capitolHill.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + capitolHill.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total4.appendChild(totalLi);

var alki = {
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

alki.genRandomCust();
alki.calcCookiesSold();

//adding shop location name to the list
var stores = document.getElementById('shopLocation5');
stores.textContent = alki.location;

//for loop that should add list items for the hour of day and sales
for (var i = 0; i < hourOfDay.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hourOfDay[i] + ': ' + alki.cookiesSold[i] + ' cookies sold.';
  list5.appendChild(newLi);
}

var sumOne = 0;
for (var i = 0; i < alki.cookiesSold.length; i++) {
  var totalLi = document.createElement('li');
  sumOne = sumOne + alki.cookiesSold[i];
}
totalLi.innerText = 'Total: ' + sumOne + ' cookies';
total5.appendChild(totalLi);
