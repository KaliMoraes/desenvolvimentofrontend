# Projeto: Series Journal — Fase 1

**Aluno:** Kaliope De Moraes Costa
**Descrição:** Projeto frontend estático (React + Vite) que implementa um CRUD estático para um repositório de séries assistidas (Series Journal). Esta entrega atende aos requisitos da Fase 1: componentização, formulário com validação básica, listagem, edição e remoção, navegação entre páginas e mecanismo de busca básico.

## Tecnologias
- React 18 (componentes funcionais e hooks)
- Vite (ferramenta de build e dev server)
- React Router (navegação entre páginas)

## Como executar
1. Extraia o zip para uma pasta.
2. No terminal, dentro da pasta do projeto, execute:
   ```
   npm install
   npm run dev
   ```
3. Abra o endereço mostrado pelo Vite no navegador (ex.: http://localhost:5173). A rota principal de uso é `/app` (Cadastro / Listagem).

> Observação: este repositório foi entregue sem a pasta `node_modules`. Execute `npm install` para instalar as dependências.

## Estrutura do projeto
```
/src
  /components
    /NavBar
      index.jsx
    /SerieForm
      SerieForm.jsx
    /SerieList
      SerieList.jsx
  /pages
    Home.jsx
    About.jsx
  App.jsx
  main.jsx
  styles.css
index.html
package.json
README.md
```

## Descrição dos componentes
- **NavBar**: barra de navegação com links para as páginas Home, Sobre e Cadastro/Listagem (implementado com React Router).
- **SerieForm**: formulário de cadastro com validação para os campos obrigatórios: Título, Número de Temporadas, Data de Lançamento da Temporada, Diretor, Produtora, Categoria e Data em que assistiu. Exibe mensagens de erro em caso de campo inválido e limpa o formulário após submissão bem-sucedida.
- **SerieList**: lista as séries recebidas via props e apresenta botões "Editar" e "Excluir". Se a lista estiver vazia, é exibida uma mensagem "Nenhuma série cadastrada.".
- **Home / About**: páginas informativas conforme especificado no enunciado.

## Funcionalidades implementadas (checagem dos critérios)
1. **Documentação**: README com instruções de execução, descrição dos componentes e identificação do aluno.
2. **Organização**: componentização clara e estrutura de pastas conforme solicitado.
3. **Interatividade**: formulário completo com validação e feedback visual; submissão sem erros quando válido.
4. **Dinamicidade**: criação, edição, remoção e busca por título/categoria/diretor; atualização imediata da listagem em estado local.

## Observações e decisões de implementação
- Optei por utilizar Vite pela sua simplicidade e velocidade no desenvolvimento local. Componentes foram implementados como funções com Hooks (useState, useEffect, useMemo) para manter código conciso e didático.
- A aplicação é intencionalmente estática (dados em memória) conforme solicitado para a Fase 1; a Fase 2 pode introduzir consumo de API e bibliotecas de UI.

## Prints (exemplos)
- Print 1: Tela inicial (Home). *(Adicione aqui capturas suas antes de submeter.)*
- Print 2: Formulário de cadastro. *(Adicione aqui capturas suas antes de submeter.)*
- Print 3: Listagem com itens cadastrados. *(Adicione aqui capturas suas antes de submeter.)*

## Entrega
Compacte a pasta do projeto (sem `node_modules`) em `kaliope_de_moraes_costa-projeto-fase-1.zip` antes de submeter na plataforma da disciplina.
