describe('Verificar criação de conta com dados válidos', () => {
    it('Deve criar uma nova conta com sucesso e verificar o conteúdo da página de confirmação', () => {
        // Dado que o usuário esteja na página de login
        cy.visit('http://automationpractice.pl/index.php?controller=authentication&back=my-account');

        // Quando o usuário inserir um email válido para criar uma conta
        const email = 'uai@exemplo.com';  
        cy.get('input[id="email_create"]').type(email); // Preenchendo o campo de e-mail

        // E clicar no botão "Create an account"
        cy.get('button[id="SubmitCreate"]').click(); // Botão de criação de conta

        // Então o usuário será redirecionado para a página de criação de conta
        cy.url().should('include', 'account-creation');
        
        // Verificar se o título da página de criação de conta está visível
        cy.contains('Your personal information').should('be.visible');
        
        // Preencher os campos do formulário de criação de conta
        cy.get('input[id="customer_firstname"]').type('Ana');  // Preencher o primeiro nome
        cy.get('input[id="customer_lastname"]').type('Braga');  // Preencher o sobrenome
        cy.get('input[id="passwd"]').type('abcd12345');  // Senha com pelo menos 5 caracteres

        // Confirmar a inscrição na newsletter
        cy.get('input[id="newsletter"]').check();  // Marcar a caixa de newsletter

        // Preencher a data de nascimento (utilizando o select)
        cy.get('select[id="days"]').select('15');  // Selecionar o dia
        cy.get('select[id="months"]').select('6');  // Selecionar o mês
        cy.get('select[id="years"]').select('2004');  // Selecionar o ano

        // E clicar no botão para criar a conta
        cy.get('button[id="submitAccount"]').click();  // Submeter o formulário de criação de conta

        // Então o usuário será redirecionado para a página de confirmação de conta
        cy.url().should('include', 'my-account'); // Verifica se o redirecionamento aconteceu
        cy.contains('My account').should('be.visible'); // Mensagem de boas-vindas
        
        // Validar via API (se houver algum endpoint de confirmação de criação de conta)
    
    });
});
