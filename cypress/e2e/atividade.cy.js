    describe('Teste da atividade', () => {
        it('Visitar a tela principal e clicar no botão: "Ver pets disponiveis para adoção"', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.contains('a','Ver pets disponíveis para adoção').click();
        });

        it('Visitar a tela principal e clicar no botão: "navegar pelo header"', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.get('.header__home').click()
        });

        it('Visitar a tela de login', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.contains('a', 'Fazer login').click();
        });

        it('voltar a home pelo icone do header', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.get('.header__home').click()
        });

        it('Visite a home e clique no botao: "Falar com o responsável"', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/home');
            cy.get('.header__message').click()
        });
    });