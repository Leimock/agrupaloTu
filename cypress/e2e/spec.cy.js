describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("passes", () => {
    cy.get("input").type("2");
    cy.get("textarea").type("Ivana\nJuana");
    cy.get("#make_group").click();
    cy.get("#final_groups").contains(/Grupo 1: (Ivana|Juana),(Ivana|Juana)/);
  });

  it("passes", () => {
    cy.get("input").type("2");
    cy.get("textarea").type("Ivana\nJuana\nAna");
    cy.get("#make_group").click();
    cy.get("#final_groups").contains(
      /Grupo 1: (Ivana|Juana|Ana),(Ivana|Juana|Ana)Queda sin grupo: (Ivana|Juana|Ana)/
    );
  });

  it("passes", () => {
    cy.get("textarea").type("Ivana\nJuana\nAna");
    cy.get("#make_group").click();
    cy.get("#final_groups").contains(
      "Debes definir el tamaño de los grupos con un entero"
    );
  });

  it("passes", () => {
    cy.get("input").type("2");
    cy.get("#make_group").click();
    cy.get("#final_groups").contains("Debes añadir al menos un nombre");
  });

  it("passes", () => {
    cy.get("input").type("2");
    cy.get("#make_group").click();
    cy.get("#final_groups").contains("Debes añadir al menos un nombre");
  });

  it("passes", () => {
    cy.get("input").type("2");
    cy.get("textarea").type("Ivana\nJuana");
    cy.get("#clean").click();
    cy.get("#final_groups").should('have.value',"");
    cy.get("input").should('have.value',"");
    cy.get("textarea").should('have.value',"");
  });
});
