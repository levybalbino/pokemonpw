function checkAnswers() {
  // Respostas corretas para cada pergunta
  const answers = {
    q1: "c",
    q2: "c",
    q3: "c",
    q4: "c",
    q5: "a",
    q6: "c",
    q7: "d",
    q8: "a",
    q9: "a",
    q10: "c"
  };

  let score = 0;
  const totalQuestions = Object.keys(answers).length;

  // Percorre as perguntas e confere respostas
  for (let i = 1; i <= totalQuestions; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === answers[`q${i}`]) {
      score++;
    }
  }

  // Calcula porcentagem arredondada
  const percent = Math.round((score / totalQuestions) * 100);

  // Pega o modal e o texto onde a pontuação será exibida
  const modal = document.getElementById("resultModal");
  const scoreText = document.getElementById("scoreText");

  // Atualiza o texto com a pontuação e a porcentagem
  scoreText.textContent = `Você acertou ${score} de ${totalQuestions} perguntas (${percent}%).`;
  textContent = ''

  // Exibe o modal
  modal.style.display = "block";
}

// Função para fechar o modal quando clicar no "x" ou fora do modal
function setupModal() {
  const modal = document.getElementById("resultModal");
  const closeBtn = document.querySelector(".close");

  // Fecha modal ao clicar no "x"
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Fecha modal ao clicar fora do conteúdo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Configura o modal assim que a página carregar
window.onload = setupModal;
