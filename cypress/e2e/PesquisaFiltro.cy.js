describe('Testar todos os filtros na página de produtos', () => {
  it('Deve acessar a categoria "Women" e aplicar todos os filtros disponíveis', () => {
    // Acessa a página inicial da categoria "Women"
    cy.visit('http://www.automationpractice.pl/index.php?');

    // Alterar o estilo de display para 'block' para garantir que os filtros sejam acessíveis
    cy.get('ul.submenu-container.clearfix.first-in-line-xs').invoke('css', 'display', 'block');

    // Forçar o clique no filtro "Dresses", ignorando erros de sobreposição
    cy.contains('a', 'Dresses')
      .should('be.visible')
      .click({ force: true });

    // Aplicar o filtro de tamanho (M)
    cy.get('input[name="layered_id_attribute_group_2"]').check().should('be.checked');

    // Aplicar o filtro de estilo (Maxi Dress)
    cy.get('input[name="layered_id_feature_21"]').check().should('be.checked');

    // Aplicar o filtro de composição (Cotton)
    cy.get('input[name="layered_id_feature_5"]').check().should('be.checked');

    // Aplicar o filtro de estilo (Casual)
    cy.get('input[name="layered_id_feature_11"]').check().should('be.checked');

    // Aplicar o filtro "In Stock"
    cy.get('input[name="layered_quantity_1"]').check().should('be.checked');

    // Aplicar o filtro "New"
    cy.get('input[name="layered_condition_new"]').check().should('be.checked');

    // Verificar se os filtros estão aplicados corretamente na seção de filtros ativos
    cy.get('.layered_filter').should('contain.text', 'Dresses');
    cy.get('.layered_filter').should('contain.text', 'M');
    cy.get('.layered_filter').should('contain.text', 'Maxi Dress');
    cy.get('.layered_filter').should('contain.text', 'Cotton');
    cy.get('.layered_filter').should('contain.text', 'Casual');
    cy.get('.layered_filter').should('contain.text', 'In stock');
    cy.get('.layered_filter').should('contain.text', 'New');

    // Aplicar o filtro "Casual Dresses" (categoria específica)
    cy.get('input[name="layered_category_9"]').check().should('be.checked');

    // Verificar se o filtro "Casual Dresses" foi ativado corretamente
    cy.get('.layered_filter').should('contain.text', 'Casual Dresses');

    // Validar o número de produtos exibidos após a aplicação dos filtros
    cy.get('.product_list')
      .find('.product-container')
      .should('have.length.greaterThan', 0);

    // Verificar os detalhes do primeiro produto filtrado
    cy.get('.product-container')
      .first()
      .within(() => {
        cy.get('.product-name').should('exist'); // Verifica se o nome do produto está visível
        cy.get('.color_to_pick_list').should('exist'); // Verifica se as cores estão disponíveis
      });
  });
});
