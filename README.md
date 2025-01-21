# Projeto de Automação de Testes - E-commerce

Este repositório contém os cenários de testes automatizados para a página de login e filtros do site **Automation Practice**. Os testes foram desenvolvidos para validar a funcionalidade e garantir a qualidade da aplicação.

## Cenários de Teste

### 1. Testar Filtro de Cor "Yellow" na Página de Produtos

**Objetivo:** Garantir que o filtro de cor "Yellow" seja aplicado corretamente na página de produtos e que os produtos exibidos atendam ao filtro.

**Passos:**
- Dado que o usuário está na página de categorias de "Women".
- Quando o usuário clicar no filtro "Dresses" e aplicar o filtro de cor "Yellow".
- Então a página deve mostrar os produtos filtrados com a cor amarela visível no primeiro produto.

**Resultado Esperado:**
- O filtro "Yellow" aparece na seção de filtros ativos.
- Pelo menos um produto exibido após a aplicação do filtro de cor amarela.

---

### 2. Testar Todos os Filtros na Página de Produtos

**Objetivo:** Validar se todos os filtros (como tamanho, estilo, composição, etc.) são aplicados corretamente e se os produtos exibidos atendem aos critérios dos filtros.

**Passos:**
- Dado que o usuário está na página da categoria "Women".
- Quando o usuário aplica filtros de tamanho, estilo, composição, entre outros.
- Então os filtros aplicados devem ser refletidos na seção de filtros ativos, e a lista de produtos deve ser filtrada corretamente.

**Resultado Esperado:**
- A lista de produtos deve refletir as opções de filtro aplicadas, como tamanho, estilo, e disponibilidade.
- O número de produtos exibidos deve ser maior que zero após aplicar os filtros.

---

### 3. Verificar Criação de Conta com Dados Válidos

**Objetivo:** Garantir que o usuário consiga criar uma conta com dados válidos e ser redirecionado para a página de confirmação de conta.

**Passos:**
- Dado que o usuário está na página de login.
- Quando o usuário insere um e-mail válido e preenche os dados para criar uma conta.
- Então a conta do usuário deve ser criada e o usuário será redirecionado para a página de confirmação de conta.

**Resultado Esperado:**
- O usuário deve ser redirecionado para a página de criação de conta.
- O título da página "Your personal information" deve ser visível.
- O usuário deve ser redirecionado para a página de confirmação de conta após completar o formulário de criação.

## Dependências do Projeto

Este projeto utiliza as seguintes dependências para executar os testes:

- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end.
- [Node.js](https://nodejs.org/en/) - Ambiente de execução de JavaScript.
- [NPM](https://www.npmjs.com/) - Gerenciador de pacotes.

### Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/automation-practice-tests.git
   cd automation-practice-tests
