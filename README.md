# Catuapi Frontend

Aplicação web desenvolvida como parte do MVP da disciplina **Desenvolvimento Full Stack Básico (PUC-Rio)**.  
O projeto consiste em uma **SPA (Single Page Application)** em HTML, CSS e JavaScript puro para **cadastrar, listar, editar e excluir cafés especiais**, consumindo uma API desenvolvida em Flask.

---

## 🚀 Objetivo
O **Catuapi** busca ser um sistema simples e prático para o gerenciamento de cafés especiais, permitindo:

- Cadastrar cafés com informações de nome, produtor, variedade, processo e notas sensoriais.
- Listar todos os cafés cadastrados em uma tabela.
- Editar cafés existentes.
- Excluir cafés cadastrados.

---

## 🛠 Tecnologias Utilizadas
- **HTML5** para a estrutura da página  
- **CSS3** para a estilização  
- **JavaScript (ES6)** para as interações e chamadas à API  
- **Font Awesome** para ícones  

---

## 📂 Estrutura do Projeto
catuapi_front/  
index.html  # Página principal da aplicação  
src/  
- styles/  
-- styles.css  # Estilos customizados  
- javascript/  
-- script.js   # Lógica da aplicação e consumo da API  

---

## ⚙️ Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/catuapi_front.git
   cd catuapi_front
   
2. Certifique-se de que o **backend (Flask API)** esteja rodando em: http://localhost:5000/catuapi/cafes

3. Abra o arquivo `index.html` diretamente no navegador (não é necessário servidor local).  
Basta dar **duplo clique** no arquivo `index.html` ou abrir manualmente pelo navegador.

---

## 🔗 Integração com o Backend
Este frontend consome as seguintes rotas da API:

- **GET** `/catuapi/cafes` → Lista todos os cafés  
- **POST** `/catuapi/cafes` → Cadastra um novo café  
- **PUT** `/catuapi/cafes/{id}` → Atualiza um café existente  
- **DELETE** `/catuapi/cafes/{id}` → Remove um café  

---

## 🎨 Funcionalidades
- Formulário de cadastro de cafés especiais  
- Seção de notas sensoriais (doçura, acidez, corpo e amargor)  
- Tabela interativa que exibe os cafés cadastrados  
- Botões para **editar** e **deletar** registros  
- Interface responsiva e estilizada  

---

## 👨‍💻 Autor
Desenvolvido por **Gabriel Boniolo** como parte do MVP da disciplina *Engenharia de Software - PUC-Rio* 
