[![NPM](https://nodei.co/npm/osm-build-query.png?downloads=true&stars=true)](https://nodei.co/npm/osm-build-query/)

Build a query for the [OSM Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) that retrieves all elements within the bounding feature

Installation
-------------
    $ npm install osm-build-query

Function
--------
    OSMBuildQuery(key, bounds)
> **key**:  *string*,  Tag name
>
> **bounds**:  *object*,  GeoJSON bounding feature
>
> **Returns**
>
> *object*, with data property that contains the query string

Running Tests
--------------
Install the development dependencies:

    $ npm install

Then run the tests:

    $ npm test

Code Coverage
--------------
Install the development dependencies:

    $ npm install

Then run coverage

    $ npm run coverage

View coverage reports

    $ firefox coverage/lcov-report/index.html

Browser Bundle
---------------
    $ npm run build
