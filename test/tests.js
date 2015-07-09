(function() {
  var OSMBuildQuery, bounds, expect, key, request;

  OSMBuildQuery = require('../');

  expect = require('expect.js');

  request = require('request');

  key = 'natural';

  bounds = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [[[-122.71082412045891, 37.834057], [-122.71082412045891, 38.01372], [-122.48306391589622, 38.01372], [-122.48306391589622, 37.834057], [-122.71082412045891, 37.834057]]]
    },
    "properties": {}
  };

  describe('OSMBuildQuery', function() {
    return it('should return results without error', function(done) {
      this.timeout(5000);
      return request.post({
        url: 'http://overpass.osm.rambler.ru/cgi/interpreter',
        form: OSMBuildQuery(key, bounds)
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body).elements).to.not.be.empty();
        return done();
      });
    });
  });

}).call(this);
