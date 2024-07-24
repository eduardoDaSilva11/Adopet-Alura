describe("Api Adopet", () => {


  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c",
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("msg");
    });
  });

  it("Nome de Perfil", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/adotante/perfil/9b152096-1123-45c5-a19e-aab28e18f920",
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("perfil");
      expect(res.body.perfil.nome).to.be.equal("eduardo da silva");
    });
  });
});
