describe('Pagina de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos de formulario corretamente para cadastar um novo usuário', () => {
    cy.cadastrar('Eduardo da Silva', 'du@email.com', 'Senha123')
  })
})