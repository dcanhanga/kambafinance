export default function initApp() {
	const form = {
		form: document.querySelector("[data-form='form']"),
		inDescription: document.querySelector("[data-form='description']"),
		inAmount: document.querySelector("[data-form='amount']"),
		inTransactionTypeRadioEls: document.querySelectorAll(
			"[data-form='transaction-type'][name='transaction-type']"
		),
		inDate: document.querySelector("[data-form='date']"),

		getFormData() {
			const { inDescription, inAmount, inDate } = this;
			const selectedTransactionTypeRadioEl = [
				...form.inTransactionTypeRadioEls,
			].find((radio) => radio.checked);
			return {
				description: inDescription.value,
				amount: utilities.formatAmountToCurrency(inAmount.value),
				transactionType: selectedTransactionTypeRadioEl.value,
				date: inDate.value,
			};
		},
	};

	const utilities = {
		formatAmountToCurrency(amount) {
			let amountFormatted = Number(amount).toLocaleString("pt-AO", {
				style: "currency",
				currency: "AOA",
				minimumFractionDigits: 2,
			});
			return amountFormatted;
		},
	};
	form.form.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log(form.getFormData());
	});

	/*
  const AllTransactions = [];
  const utilities = {
    formatAmount() {},
  };

  /*

  const dom = {
    createTr(transaction) {
      const tr = document.createElement("tr");
      tr.innerHTML = this.contentTr(transaction);
      return tr;
    },
    contentTr(transaction) {
      const amount = transaction.amount;
      const contentTr = ` <td>Crianção de WebSite</td>
              <td class="income">${amount},00 Kz</td>
              <td>12/09/03</td>
              <td><img src="./assets/img/minus.svg" alt="Remover transação" title="Remover transação"></td>`;
      return contentTr;
    },

    addTransactionIntoDom(transaction) {
      const tbody = document.querySelectorAll(
        "[data-transactionTable='tbody']"
      );
      const tr = this.createTr(transaction);
      tbody.appendChild(tr);
    },
  };

  const tbody = document.querySelectorAll(
        "[data-transactionTable='tbody']"
      );
     tbody.appendClield()
  dom.addTransactionIntoDom();

  */
}
/*
const form = {
  formEl: document.querySelector("[data-form='form']"),
  descriptionInputEl: document.querySelector("[data-form='description']"),
  amountInputEl: document.querySelector("[data-form='amount']"),
  transactionTypeRadioEls: document.querySelectorAll("[data-form='transaction-type'][name='transaction-type']"),
  dateInputEl: document.querySelector("[data-form='date']"),

  getFormData() {
    const selectedTransactionTypeRadioEl = [...form.transactionTypeRadioEls].find(radio => radio.checked);
    return {
      description: form.descriptionInputEl.value,
      amount: form.amountInputEl.value,
      transactionType: selectedTransactionTypeRadioEl.value,
      date: form.dateInputEl.value,
    };
  }
};

form.formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form.getFormData());
});

*/
