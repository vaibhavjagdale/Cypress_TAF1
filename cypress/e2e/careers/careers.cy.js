import { careerPageHelper } from '../../helpers/careerPageHelper'

import { careerPageAssertion } from '../../assertion/careerPageAssertion'

describe('Search job funtionality', () => {

  before(() => {
    cy.viewport(1280, 800);
    cy.visit('/');
    cy.get('button').contains('Allow').click();
  });

  it("Search job with title ", () => {
    // Test data
    const searchJobTitle = 'Test'
    const refineCountryName = 'Netherlands'

    // Test Actions
    careerPageHelper.enterJobTitle(searchJobTitle);
    careerPageHelper.clickSearchButton();

    // Test Verification
    careerPageAssertion.verifyUrlWithSearchTitle(searchJobTitle);
    careerPageAssertion.verifySearchResultFromMultipleLocations(searchJobTitle);
    careerPageHelper.refineSearchResultWithCountry(refineCountryName);
    careerPageAssertion.verifySearchResultWithSingleLocation(refineCountryName);
  });
});

