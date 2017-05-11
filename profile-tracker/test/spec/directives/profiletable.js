'use strict';

describe('Directive: profileTable', function () {

  // load the directive's module
  beforeEach(module('profileTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<profile-table></profile-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the profileTable directive');
  }));
});
