'use strict';

describe('Service: fetchUrl', function () {

  // load the service's module
  beforeEach(module('myFirstAngularApp'));

  // instantiate service
  var fetchUrl;
  beforeEach(inject(function (_fetchUrl_) {
    fetchUrl = _fetchUrl_;
  }));

  it('should do something', function () {
    expect(!!fetchUrl).toBe(true);
  });

});
