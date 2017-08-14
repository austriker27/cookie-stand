'use strict';

var cookieStand = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,

 genRandomCust: function() {
    return Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust;

  var cookiesPerHour: function () {
    return this.avgCookies * this.getRandomCust;

  }
};




  //
  // randomCustomers: Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers),
  // cookiesPerHour: this.avgCookies * this.randomCustomers,
  //
  // cookiesPerHour: function () {
  //   this.avgCookies * genRandomCust;


var cookieShops = {
  shop: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,



var cookieShops = {
  shop: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,


var cookieShops = {
  shop: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,

var cookieShops = {
  shop: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
