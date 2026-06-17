// Seleciona os elementos do formulário.
const amount = document.querySelector("#amount");

// Evento para capturar quando o conteúdo mudar.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "");

  // Transforma o valor em centavos (exemplo: 150/100 = 1.5 que é equivalente a R$ 1,50).
  value = Number(value) / 100;

  // Repassando para o amount pra impedir de aparecer na tela.
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL.
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Retorna o valor formatado
  return value;
}
