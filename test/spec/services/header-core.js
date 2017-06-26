'use strict';

describe('Service: headerCore', function () {

  // load the service's module
  beforeEach(module('eastsideplayApp'));

  // instantiate service
  var headerCore;
  beforeEach(inject(function (_headerCore_) {
    headerCore = _headerCore_;
  }));

  it('should do something', function () {
    expect(!!headerCore).toBe(true);
  });

});
