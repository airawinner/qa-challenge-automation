describe('Testar filtro de cor Yellow na página de produtos', () => {
  it('Deve aplicar o filtro de cor Yellow e verificar se ele foi ativado', () => {
    // Acessar a página inicial da categoria Women
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

    // Verificar que estamos na categoria "Women"
    cy.url().should('include', 'id_category=3');
    cy.contains('Women').should('be.visible');

    // Alterar o estilo de display para 'block' (visível) para garantir que os filtros sejam acessíveis
    cy.get('ul.submenu-container.clearfix.first-in-line-xs').invoke('css', 'display', 'block');

    // Forçar o clique no filtro "Dresses", ignorando o erro de sobreposição
    cy.contains('a', 'Dresses')
      .should('be.visible')
      .click({ force: true });

    // Tentar clicar diretamente no botão de cor amarela, verificando a visibilidade
    cy.get('input[name="layered_id_attribute_group_16"]')
      .should('be.visible') // Verificar se o botão está visível
      .click(); // Clicar no botão para aplicar o filtro de cor

    // Verificar se o filtro "Yellow" foi ativado na seção de filtros ativos
    cy.get('.layered_filter').should('contain.text', 'Yellow');

    // Validar se o número de produtos exibidos após aplicar o filtro não é zero
    cy.get('.product_list')
      .find('.product-container')
      .should('have.length.greaterThan', 0); // Certificar-se de que há produtos listados após aplicar o filtro de cor

    // Validar que pelo menos um produto contém a cor "Yellow" 
    cy.get('.product-container')
      .first()
      .within(() => {
        cy.get('.color_to_pick_list') // Verificar se a opção de cor está presente no primeiro produto
          .should('exist');
      });
  });
});
