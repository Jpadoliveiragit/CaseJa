# Documento de Requisitos – Case Já

## 1. Nome do Projeto

Case Já – Sistema de Organização de Casamentos

## 2. Integrantes

- João Pedro Almeida
- Felipe Gabriel

## 3. Objetivo do Sistema

O objetivo do sistema Case Já é auxiliar casais e organizadores de eventos no planejamento de casamentos, centralizando informações importantes em uma única aplicação.

Nesta etapa do projeto, foi desenvolvido um fluxo funcional voltado ao gerenciamento de fornecedores, permitindo cadastrar, consultar, editar e excluir fornecedores relacionados ao casamento.

A proposta busca facilitar a organização do evento, evitando que informações fiquem espalhadas em planilhas, anotações ou conversas separadas.

## 4. Descrição do Fluxo Implementado

O fluxo escolhido para a Etapa 2 foi o gerenciamento de fornecedores.

O usuário pode acessar a tela de fornecedores, visualizar os fornecedores cadastrados, adicionar novos registros, alterar informações existentes e excluir fornecedores que não serão mais utilizados.

Esse fluxo representa uma parte central do sistema, pois a contratação e o controle de fornecedores são atividades importantes durante a organização de um casamento.

## 5. Requisitos Funcionais Implementados

| Código | Requisito funcional | Descrição |
|---|---|---|
| RF01 | Listar fornecedores | O sistema exibe os fornecedores cadastrados pelo usuário. |
| RF02 | Cadastrar fornecedor | O sistema permite cadastrar um novo fornecedor com nome, categoria, telefone, valor estimado e observação. |
| RF03 | Editar fornecedor | O sistema permite alterar os dados de um fornecedor já cadastrado. |
| RF04 | Excluir fornecedor | O sistema permite excluir um fornecedor da lista. |
| RF05 | Armazenar dados localmente | O sistema mantém os dados salvos no navegador utilizando localStorage. |

## 6. Requisitos Não Funcionais Considerados

| Código | Requisito não funcional | Descrição |
|---|---|---|
| RNF01 | Usabilidade | A interface é simples e fácil de utilizar. |
| RNF02 | Organização do código | O projeto possui uma estrutura organizada, separando componentes, páginas e estilos. |
| RNF03 | Responsividade | A aplicação se adapta a diferentes tamanhos de tela. |
| RNF04 | Desempenho | O sistema funciona de forma rápida no navegador. |
| RNF05 | Controle de versão | O desenvolvimento foi registrado utilizando Git e GitHub. |

## 7. Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- Vite
- Git
- GitHub
- LocalStorage

## 8. Justificativa do MVP

O MVP escolhido foi o CRUD de fornecedores, pois representa uma funcionalidade importante dentro do sistema Case Já e permite demonstrar um fluxo completo da aplicação.

Com esse fluxo, foi possível validar a ideia inicial do projeto e criar uma base para futuras funcionalidades, como controle de gastos, tarefas, checklist e agenda do casamento.
