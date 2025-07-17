# 🔐 Simulador de Phishing Educacional — Captura de Login Falsa (Segurança da Informação)

Este projeto foi desenvolvido com fins **educacionais** para uma aula de **Segurança da Informação**, com o objetivo de demonstrar como ataques de engenharia social (como phishing) podem ser estruturados tecnicamente. O backend simula o funcionamento de um servidor malicioso que registra credenciais digitadas em uma tela de login falsa (espelho).

⚠️ **Aviso Legal:** Este projeto deve ser utilizado apenas em ambientes controlados e com consentimento explícito dos envolvidos. Seu uso indevido pode configurar crime.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- dotenv
- Swagger UI
- Nodemon
- CSV via `fs` (módulo nativo do Node)
- HTML
- CSS
- JavaScript

---

## 📁 Estrutura do Projeto

```text
frontend/               # Frontend estático (HTML, CSS, JS)
├── img/
├── index.html
├── styles.css
└── script.js
backend/
├── logs/                # Onde os dados capturados serão armazenados
│   └── login.csv
├── src/                 # Código-fonte
│   ├── index.ts         # Inicialização do servidor
│   ├── swagger.ts       # Setup do Swagger
│   ├── routes/          # Rotas da aplicação
│   │   └── loginRoutes.ts
│   └── controllers/     # Lógica de captura de login
│       └── loginController.ts
├── swagger.json         # Documentação da API (OpenAPI)
├── .env                 # Configurações de ambiente (porta, etc.)
├── tsconfig.json        # Configuração do TypeScript
└── package.json
README.md
```

---

## ⚙️ Configuração Inicial

1. Clone o projeto:

```bash
git clone https://github.com/heclair/backend_seginfo.git
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com a porta desejada (exemplo abaixo):

```env
PORT=3000
```

4. Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

5. Abra o frontend: abra o arquivo frontend/index.html no navegador (não precisa de servidor web, é estático).

---

## 📌 Endpoints Disponíveis

### `POST /login`

Captura os dados enviados pelo frontend falso.

- **Body JSON:**

```json
{
  "email": "usuario@exemplo.com",
  "password": "123456"
}
```

- **Resposta:**

```json
"Login recebido"
```

As credenciais (com timestamp e IP) serão armazenadas no arquivo: `logs/login.csv`.

---

### 📘 Documentação Swagger

Acesse no navegador:

```
http://localhost:3000/docs
```

A documentação da API permite testar a rota `/login` diretamente via Swagger UI.

---

## ✅ Requisitos de Segurança Didáticos

- Simular o funcionamento de backends utilizados em ataques de phishing;
- Demonstrar a importância da verificação de URLs, certificados e domínios;
- Promover discussões sobre boas práticas de autenticação e proteção de dados.

---

## 🔒 Uso Ético

Este projeto **não deve ser utilizado para capturar dados reais de terceiros**. Utilize apenas para fins de conscientização e treinamentos internos autorizados.

---

## 📄 Licença

Este projeto é apenas para **fins educacionais**. Uso indevido é de responsabilidade do usuário.
