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
