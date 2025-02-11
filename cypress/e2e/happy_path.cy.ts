import { APP_PATHS } from '../../src/common/constants/app_paths';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('test dutaxidil gel path', () => {
    cy.wait(1000);
    cy.get('#home_continue_button').click();
    cy.url().should('include', '/questions');
    //step1
    cy.get('#option-5').click();
    cy.get('#option-continue-button').click();
    //step2
    cy.get('#question-title').contains(
      'h1',
      '¿Hay antecedentes de caída del cabello en tu familia?',
    );
    cy.get('#option-2').click();
    cy.get('#option-continue-button').click();
    //step3
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de las siguientes condiciones médicas?',
    );
    cy.get('#option-4').click({ force: true });
    cy.get('#option-continue-button').click();
    //step4
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de estas condiciones de salud mental?',
    );
    cy.get('#option-6').click({ force: true });
    cy.get('#option-continue-button').click();
    //recomendation
    cy.url().should('include', '/recomendation');
    cy.wait(1000);
    //Verificar que el tratamiento sea el adecuado
    cy.get('#treatment-name').contains('h2', 'DUTAXIDIL® Gel');
    cy.get('#select-recomendation').click();
    cy.get('#question-title').contains('h1', 'Resumen');
  });

  it('test dutaxidil capsulas path', () => {
    cy.wait(1000);
    cy.get('#home_continue_button').click();
    cy.url().should('include', '/questions');
    //step1
    cy.get('#option-5').click();
    cy.get('#option-continue-button').click();
    //step2
    cy.get('#question-title').contains(
      'h1',
      '¿Hay antecedentes de caída del cabello en tu familia?',
    );
    cy.get('#option-2').click();
    cy.get('#option-continue-button').click();
    //step3
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de las siguientes condiciones médicas?',
    );
    cy.get('#option-7').click({ force: true });
    cy.get('#option-continue-button').click();
    //step4
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de estas condiciones de salud mental?',
    );
    cy.get('#option-6').click({ force: true });
    cy.get('#option-continue-button').click();
    //recomendation
    cy.url().should('include', '/recomendation');
    cy.wait(1000);
    //Verificar que el tratamiento sea el adecuado
    cy.get('#treatment-name').contains('h2', 'DUTAXIDIL® Cápsulas');
    cy.get('#select-recomendation').click();
    cy.get('#question-title').contains('h1', 'Resumen');
  });

  it('test minoxidil capsulas path', () => {
    cy.wait(1000);
    cy.get('#home_continue_button').click();
    cy.url().should('include', '/questions');
    //step1
    cy.get('#option-5').click();
    cy.get('#option-continue-button').click();
    //step2
    cy.get('#question-title').contains(
      'h1',
      '¿Hay antecedentes de caída del cabello en tu familia?',
    );
    cy.get('#option-2').click();
    cy.get('#option-continue-button').click();
    //step3
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de las siguientes condiciones médicas?',
    );
    cy.get('#option-0').click({ force: true });
    cy.get('#option-continue-button').click();
    //step4
    cy.get('#question-title').contains(
      'h1',
      '¿Tienes o has tenido alguna de estas condiciones de salud mental?',
    );
    cy.get('#option-6').click({ force: true });
    cy.get('#option-continue-button').click();
    //recomendation
    cy.url().should('include', '/recomendation');
    cy.wait(1000);
    //Verificar que el tratamiento sea el adecuado
    cy.get('#treatment-name').contains('h2', 'Minoxidil® Cápsulas');
    cy.get('#select-recomendation').click();
    cy.get('#question-title').contains('h1', 'Resumen');
  });
});
