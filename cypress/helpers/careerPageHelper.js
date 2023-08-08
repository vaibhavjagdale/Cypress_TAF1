
import { careerPage } from '../pageObjects/careerPage'

class CareerPageHelper {

    enterJobTitle(title) {
        careerPage.jobTitleField().clear().type(title).should('have.value', title);
    }

    clickSearchButton(title) {
        careerPage.searchButton().scrollIntoView().click().wait(1000);
    }

    refineSearchResultWithCountry(country) {
        cy.get('.phs-filter-panels div[data-ph-at-text="country"]').scrollIntoView().find('button').click();
        cy.get('#CountryBody ul li').contains(country).parent().find('input[type="checkbox"]').click({ force: true }).should('be.checked').wait(2000);
    }
}
export const careerPageHelper = new CareerPageHelper();
