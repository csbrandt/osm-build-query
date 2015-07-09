(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


var OSMBuildQuery = function(key, bounds) {
   var bbox; // (lower lat., lower lon., upper lat., upper lon.)
   var lat = [];
   var lon = [];
   var coordinates = bounds.geometry.coordinates[0];
   var lowerLat;
   var lowerLon;
   var upperLat;
   var upperLon;

   for (var c = 0; c < coordinates.length; c++) {
      lon.push(coordinates[c][0]);
      lat.push(coordinates[c][1]);
   }

   lowerLat = Math.min.apply(Math, lat);
   upperLat = Math.max.apply(Math, lat);

   lowerLon = Math.min.apply(Math, lon);
   upperLon = Math.max.apply(Math, lon);

   bbox = lowerLat + ',' + lowerLon + ',' + upperLat + ',' + upperLon;

   /* This query looks for nodes, ways and relations
   with the given key/value combination. */
   var query = '[out:json][timeout:90];' +
      '(' +
      'node["' + key + '"](' + bbox + ');' +
      'way["' + key + '"](' + bbox + ');' +
      'relation["' + key + '"](' + bbox + ');' +
      ');' +
      'out body;' +
      '>;' +
      'out skel qt;';

   return {
      data: query
   };
};

/** @module osm-build-query */
module.exports = OSMBuildQuery;

},{}]},{},[1]);
