/*export default function initApp() {
  const transactions = [];
  const allTransactios = () => {
    form.getValueFromLocalStorage();
  }; // const futura para manipular transactions e renderizar no html.
  const form = {
    inputDescription: document.querySelector(
      "[data-transaction='description']"
    ),
    inputAmount: document.querySelector("[data-transaction='amount']"),
    inputDate: document.querySelector("[data-transaction='date']"),
    inForm: document.querySelector("[data-form='form']"),
    modal: document.querySelector("[data-modal='modal']"),
    getValue(description, amount, date) {
      const newTransactions = {
        id: transactions.length + 1,
        transactionsDescription: description.value,
        transactionsAmount: amount.value,
        transactionsDate: date.value,
      };
      transactions.push(newTransactions);
      this.saveInLocalStorage(transactions);
    },
    saveInLocalStorage(transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    },
    getValueFromLocalStorage() {
      const transactions =
        JSON.parse(localStorage.getItem('transactions')) || [];
      return transactions;
    },
    closeModal() {
      this.modal.classList.remove('active');
    },
  };
  form.inForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { inputDescription, inputAmount, inputDate } = form;
    form.getValue(inputDescription, inputAmount, inputDate);
    form.closeModal();
  });
}
*/

export default function initApp() {
  let transactions = [];

  const form = {
    inputDescription: document.querySelector(
      "[data-transaction='description']"
    ),
    inputAmount: document.querySelector("[data-transaction='amount']"),
    inputDate: document.querySelector("[data-transaction='date']"),
    inForm: document.querySelector("[data-form='form']"),
    modal: document.querySelector("[data-modal='modal']"),

    getValue() {
      const newTransaction = {
        id: transactions.length + 1,
        description: this.inputDescription.value,
        amount: this.inputAmount.value,
        date: this.inputDate.value,
      };
      transactions.push(newTransaction);
      this.saveInLocalStorage(transactions);
    },

    saveInLocalStorage(transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    },

    getValueFromLocalStorage() {
      return JSON.parse(localStorage.getItem('transactions')) || [];
    },

    closeModal() {
      this.modal.classList.remove('active');
    },
  };

  // Adiciona as transações salvas no localStorage ao array transactions
  const savedTransactions = form.getValueFromLocalStorage();
  if (savedTransactions.length > 0) {
    transactions = savedTransactions;
  }

  function renderTransactions() {
    // renderiza as transações no HTML
  }

  form.inForm.addEventListener('submit', (event) => {
    event.preventDefault();
    form.getValue();
    form.closeModal();
    renderTransactions();
  });
}
