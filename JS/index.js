function enviarRespostas() {
  const respostas = [];

  for (let i = 1; i <= 40; i++) {
    const resposta = document.querySelector(
      `input[name="pergunta${i}"]:checked`
    );
    if (!resposta) {
      alert("Por favor, responda a todas as perguntas.");
      return;
    }
    respostas.push({ pergunta: i, resposta: resposta.value });
  }

  // Simulando o ID do usuário
  const userId = Math.floor(Math.random() * 1000);

  fetch("http://localhost:3000/respostas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, answers: respostas }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Respostas enviadas com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao enviar respostas:", error);
    });
}
