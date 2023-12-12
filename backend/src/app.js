const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const respostas = [];

app.post("/respostas", (req, res) => {
  const { userId, answers } = req.body;

  if (!userId || !answers || answers.length !== 40) {
    return res.status(400).json({ error: "Requisição inválida" });
  }

  // Verificando se as respostas estão na faixa de 1 a 4
  if (answers.some((answer) => answer < 1 || answer > 4)) {
    return res
      .status(400)
      .json({ error: "As respostas devem variar de 1 a 4" });
  }

  respostas.push({ userId, answers });

  res.json({ success: true });
});

app.get("/respostas", (req, res) => {
  res.json(respostas);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
