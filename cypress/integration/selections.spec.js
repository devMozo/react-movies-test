/// <reference types="Cypress" />
import { URL_MOVIE_API } from '../../app/api/config';

context('Selections', () => {
    beforeEach(() => {
        cy.fixture('categories').as('fxCats');
        cy.fixture('discoverMovie').as('fxDiscMovie');
        cy.fixture('unitMovie').as('fxMovie');

        cy.server();
        cy.route({
            method: 'GET',
            url: `${URL_MOVIE_API}/genre/movie/list**`,
            response: '@fxCats',
        }).as('getGenres');
        cy.route({
            method: 'GET',
            url: `${URL_MOVIE_API}/discover/movie**`,
            response: '@fxDiscMovie',
        }).as('getMovies');
        cy.route({
            method: 'GET',
            url: `${URL_MOVIE_API}/movie/**`,
            response: '@fxMovie',
        }).as('getUnitMovie');

        cy.visit('/');
        cy.wait('@getGenres');

        cy.get('[data-cy=CategoryItem]')
            .first()
            .within(() => {
                cy.get('[data-cy=CategoryItem-link]').click();
            });
    });

    it('See a movie', () => {
        cy.wait('@getMovies');

        cy.get('[data-cy=MovieItem]')
            .first()
            .within(() => {
                cy.get('[data-cy=MovieItem-link]').click();
            });

        cy.wait('@getUnitMovie');
    });

    it('Go to the home', () => {
        cy.get('[data-cy=HeaderHome-link]').click();

        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/');
        });
    });
});
