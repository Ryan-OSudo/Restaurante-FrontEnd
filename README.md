# 🍔 Delivery System Interface: Frontend Angular

![Angular](https://img.shields.io/badge/Angular-18.1.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)

Esta é a interface web do **Sistema de Delivery UNASP**, desenvolvida em **Angular 18**. O projeto foca em uma experiência de usuário (**UX**) fluida e responsiva para o gerenciamento de pedidos em tempo real.

---

## 👥 Créditos e Colaboração

Este projeto foi desenvolvido em conjunto por uma equipe dedicada para a disciplina de *Desenvolvimento Fullstack*.

### **Integrantes do Grupo:**
* 👨‍💻 **Ryan Gonçalves** (Responsável pelo Repositório Frontend)
* 👨‍💻 **Rodrigo Matos**
* 👨‍💻 **Gabriel Pedro**
* 👨‍💻 **Jackson Borges**
* 👨‍💻 **Edilson Mafra**
* 👨‍💻 **Julio Aparecido**

---

## 🔗 Ecossistema do Projeto

Para que a experiência seja completa, este frontend deve estar conectado à API de backend correspondente.

| Camada | Tecnologia | Repositório |
| :--- | :---: | :--- |
| **Frontend (Este)** | Angular 18 | [🚀 Repositório Atual](https://github.com/Ryan-OSudo/Restaurante-FrotnEnd) |
| **Backend (API)** | Spring Boot | [⚙️ Backend Original](https://github.com/RodrigoSMatos/Comanda-Digital-Completo) |

---

## 🎯 Funcionalidades da Interface

O sistema é dividido em visões estratégicas para diferentes fluxos do restaurante:

* **🛒 Menu & Carrinho:** Interface intuitiva para seleção de pratos e fechamento de pedidos.
* **👨‍🍳 Painel da Cozinha:** Gestão de comandas com atualizações em tempo real para a produção.
* **🚚 Gestão de Delivery:** Monitoramento logístico desde o despacho até a entrega.
* **📜 Histórico:** Dashboard para consulta de pedidos finalizados e métricas básicas.

---

## 🛠️ Tecnologias Utilizadas

* **Angular 18:** Utilização de *Signals* e arquitetura modular de componentes.
* **TypeScript:** Garantia de tipagem estática e segurança no desenvolvimento.
* **RxJS:** Gerenciamento eficiente de fluxos assíncronos e chamadas à API.
* **SASS:** Estilização avançada para componentes responsivos.

---

## 🚀 Como Iniciar a Aplicação

### 1. Pré-requisitos
Certifique-se de ter instalado:
* **Node.js** (LTS recomendado)
* **Angular CLI** (`npm install -g @angular/cli`)

### 2. Instalação e Execução

> [!WARNING]
> **Atenção:** Certifique-se de que a API Backend esteja rodando em `http://localhost:8080` para que os dados sejam carregados corretamente.

```bash
# 1. Clone o repositório
git clone [https://github.com/Ryan-OSudo/Restaurante-FrotnEnd.git](https://github.com/Ryan-OSudo/Restaurante-FrotnEnd.git)

# 2. Acesse a pasta do projeto
cd Restaurante-FrotnEnd

# 3. Instale as dependências do npm
npm install

# 4. Inicie o servidor de desenvolvimento
ng serve
