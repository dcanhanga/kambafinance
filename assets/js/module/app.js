export default function initApp() {
  let transactions = [];
  const form = {
    transactionDescriptionField: document.querySelector(
      "[data-transaction='description']"
    ),
    transactionAmountField: document.querySelector(
      "[data-transaction='amount']"
    ),
    transactionDateField: document.querySelector("[data-transaction='date']"),
    modal: document.querySelector("[data-modal='modal']"),
    GateValue(description, amount, date) {
      return {
        id: this.transactions.length + 1,
        transactionDescription: description.value,
        transactionAmount: amount.value,
        transactionDate: date.value,
      };
    },
    validateField() {
      const { transactionDescription, transactionAmount, transactionDate } =
        this.GateValue();
      if (
        transactionDescription.trim() === '' ||
        transactionAmount.trim() === '' ||
        transactionDate.trim() === ''
      ) {
        throw new Error('alert');
      }
    },
    submit(event) {
      event.preventDefault();
      try {
        this.validateField();
      } catch (error) {
        alert(error.massage);
      }
      //Verificar se todas as informações foram preenchidas
    },
  };

  // formatar os dados para salvar
  // limpar os feilds dos formularios
  // atualizar aplicação
}
