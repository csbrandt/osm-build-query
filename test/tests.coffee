OSMBuildQuery = require('../')
expect = require('expect.js')
request = require('request')
key = 'natural'
bounds = {
  "type": "Feature"
  "geometry":
    "type": "Polygon"
    "coordinates": [
      [
         [-122.71082412045891, 37.834057],
         [-122.71082412045891, 38.01372],
         [-122.48306391589622, 38.01372],
         [-122.48306391589622, 37.834057],
         [-122.71082412045891, 37.834057]
      ]
    ]
  "properties": {}
}

describe 'OSMBuildQuery', ->

   it 'should return results without error', (done) ->
      @timeout(10000)
      request.post {
        url: 'http://overpass.osm.rambler.ru/cgi/interpreter'
        form: OSMBuildQuery(key, bounds)
      }, (error, response, body) ->
         expect(response.statusCode).to.equal(200)
         expect(JSON.parse(body).elements).to.not.be.empty()
         done()
