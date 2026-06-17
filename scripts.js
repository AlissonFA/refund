// Seleciona os elementos do formulário.
const amount = document.querySelector("#amount");

// Evento para capturar quando o conteúdo mudar.
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "") // Aceitando somente números
  amount.value = value // Repassando para o amount pra impedir de aparecer na tela
};
