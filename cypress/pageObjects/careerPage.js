
class CareerPage {

    jobTitleField() {
        return cy.get('#keywordSearch');
    }

    searchButton() {
        return cy.get('.input-group-btn');
    }
}
export const careerPage = new CareerPage();
