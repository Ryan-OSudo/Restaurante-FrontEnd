# 🍔 Delivery System Interface: Frontend Angular

![Angular](https://img.shields.io/badge/Angular-18.1.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)

Esta é a interface web do **Sistema de Delivery UNASP**, desenvolvida em **Angular 18**. O projeto foca em uma experiência de usuário (**UX**) fluida e responsiva para o gerenciamento de pedidos.

---

## 🔗 Ecossistema do Projeto

Para que a experiência seja completa, este frontend deve estar conectado à API de backend.

| Camada | Tecnologia | Repositório |
| :--- | :---: | :--- |
| **Frontend (Atual)** | Angular 18 | [Acessar Repo](https://github.com/Ryan-OSudo/frontendRestauranteAngular) |
| **Backend (API)** | Spring Boot | [Acessar Repo](https://github.com/RodrigoSMatos/Comanda-Digital-Completo) |

---

## 🎯 Funcionalidades da Interface

O sistema é dividido em visões estratégicas:

* **🛒 Menu & Carrinho:** Navegação, seleção de itens e cálculo de totais.
* **👨‍🍳 Painel da Cozinha:** Visualização de pedidos em tempo real para produção.
* **🚚 Gestão de Delivery:** Acompanhamento de entregas.
* **📜 Histórico:** Consulta de todos os pedidos concluídos.

---

## 🛠️ Tecnologias Utilizadas

* **Angular 18:** Arquitetura baseada em componentes e *Signals*.
* **TypeScript:** Desenvolvimento com tipagem estática e segura.
* **RxJS:** Tratamento de fluxos de dados e requisições HTTP.
* **Angular CLI:** Ferramenta de build e automação de desenvolvimento.

---

## 🚀 Como Iniciar a Aplicação

### 1. Pré-requisitos
Certifique-se de ter instalado:
* **Node.js** (LTS)
* **Angular CLI** (`npm install -g @angular/cli`)

### 2. Instalação

> [!WARNING]
> **Atenção:** Certifique-se de que a API Backend esteja rodando em `http://localhost:8080` antes de iniciar.

```bash
# Clone o repositório
git clone [https://github.com/Ryan-OSudo/frontendRestauranteAngular](https://github.com/Ryan-OSudo/frontendRestauranteAngular)

# Acesse a pasta
cd frontendRestauranteAngular

# Instale as dependências
npm install

# Inicie o servidor
ng serve
