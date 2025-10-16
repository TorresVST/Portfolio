// Arquivo JS base para o template
console.log("Template Base carregado com sucesso!");

// Exemplo de interação simples
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert("Este é apenas um exemplo. Adicione suas funções aqui!");
    });
  }
});
