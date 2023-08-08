
class CareerPageAssertion {

    verifyUrlWithSearchTitle(title) {
        cy.url().should('contain', `keywords=${title}`);
    }

    verifySearchResultFromMultipleLocations(searchJobTitle) {
        cy.get('.phs-filter-panels div[data-ph-at-text="country"]').scrollIntoView().find('button').click();
        cy.get('#CountryBody ul li').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.result-text').invoke('text')
                    .then((text) => {
                        cy.log(`Job opening with ${searchJobTitle} available in country ${text}`);
                    });
            })

        cy.get('.phs-jobs-list .result-count').invoke('text').as('jobcount')
        cy.get('@jobcount').then((jobcount) => {
            cy.log(`Total job found: ${jobcount}`)
        })

        cy.get('.phs-jobs-list ul .jobs-list-item').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.job-title span').invoke('text')
                    .then((text) => {
                        cy.log(`Job opening with title ${text}`);
                    })
            })
    }

    verifySearchResultWithSingleLocation(country) {
        cy.get('.tag .facet-tag').should('have.text', country);
        cy.get('.phs-jobs-list .result-count').invoke('text').as('jobcount')
        cy.get('@jobcount').then((jobcount) => {
            cy.log(`Total number of jobs found in ${country}: ${jobcount}`)
        })
        cy.get('.phs-jobs-list ul .jobs-list-item').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.job-location').should('include.text', country);
            })
    }
}
export const careerPageAssertion = new CareerPageAssertion();
