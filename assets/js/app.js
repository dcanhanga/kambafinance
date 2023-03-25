const storage = {
	get() {
		return JSON.parse(localStorage.getItem("kamba.finance.AOO:transactions")) || [];
	},
	set(transactions) {
		localStorage.setItem(
			"kamba.finance.AOO:transactions",
			JSON.stringify(transactions)
		);
	},
};
const transactions = {
	all: storage.get(),

	add(transaction) {
		this.all.push(transaction);
		App.reload();
	},
	remove(index) {
		this.all.splice(index, 1);
		App.reload();
	},
	incomes() {
		const income = this.all
			.filter((item) => item.transactionType === "incomes")
			.map((item) => utilities.formatAmount(item.amount))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return income;
	},

	expenses() {
		const expense = this.all
			.filter((item) => item.transactionType === "expenses")
			.map((item) => utilities.formatAmount(item.amount))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		if (expense === 0) {
			return expense;
		}
		if (expense > 0) return expense * -1;
	},

	total() {
		return this.incomes() + this.expenses();
	},
};
const dom = {
	tbody: document.querySelector("[data-transactionTable='tbody']"),
	addTransactionIntoDom(transaction, index) {
		this.tbody.appendChild(this.createTr(transaction, index));
	},
	createTr(transaction, index) {
		const tr = document.createElement("tr");
		tr.innerHTML = this.contentTr(transaction, index);
		tr.dataset.index = index;
		return tr;
	},
	contentTr(transaction, index) {
		const cssClass =
			transaction.transactionType === "incomes" ? "income" : "expense";
		const signal = transaction.transactionType === "incomes" ? "" : "-";
		const contentTr = ` <td>${transaction.description}</td>
              <td class="${cssClass}">${signal}${transaction.amount}</td>
              <td>${transaction.date}</td>
              <td><img onclick="transactions.remove(${index})" src="./assets/img/minus.svg" alt="Remover transação" title="Remover transação"></td>`;
		return contentTr;
	},
	upDateBalance() {
		document.querySelector("[data-display='incomes']").innerHTML =
			utilities.formatCurrency(transactions.incomes());
		document.querySelector("[data-display='expenses']").innerHTML =
			utilities.formatCurrency(transactions.expenses());
		document.querySelector("[data-display='total']").innerHTML =
			utilities.formatCurrency(transactions.total());
	},

	clearTransactions() {
		this.tbody.innerHTML = "";
	},
};
const utilities = {
	formatCurrency(amount) {
		const amountFormatted = Number(amount).toLocaleString("pt-AO", {
			style: "currency",
			currency: "AOA",
			minimumFractionDigits: 2,
		});
		return amountFormatted;
	},

	formatAmount(amount) {
		const amountFormatted = Number(amount.replace(/\D/g, "")) / 100;
		return amountFormatted;
	},
	formatDate(date) {
		const splittedDate = date.split("-");
		return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
	},
};

const form = {
	modal: document.querySelector("[data-modal='modal']"),
	form: document.querySelector("[data-form='form']"),
	inTransactionTypeRadioEls: document.querySelectorAll(
		"[data-form='transaction-type'][name='transaction-type']"
	),
	getValue() {
		const selectedTransactionTypeRadioEl = [
			...form.inTransactionTypeRadioEls,
		].find((radio) => radio.checked);

		return {
			inDescription: document.querySelector("[data-form='description']").value,
			inTransactionType: selectedTransactionTypeRadioEl.value,
			inAmount: document.querySelector("[data-form='amount']").value,
			inDate: document.querySelector("[data-form='date']").value,
		};
	},

	formatValue() {
		const generateID = () => Math.round(Math.random() * 100);
		const { inDescription, inTransactionType, inAmount, inDate } =
			this.getValue();
		return {
			id: generateID(),
			description: inDescription.trim(),
			amount: utilities.formatCurrency(Math.abs(Number(inAmount.trim()))),
			date: utilities.formatDate(inDate.trim()),
			transactionType: inTransactionType,
		};
	},
	clearFields() {
		const selectedTransactionTypeRadioEl = [
			...form.inTransactionTypeRadioEls,
		].find((radio) => radio.checked);

		document.querySelector("[data-form='description']").value = "";
		document.querySelector("[data-form='amount']").value = "";
		document.querySelector("[data-form='date']").value = "";
		selectedTransactionTypeRadioEl.checked = false;
	},
	closeModal() {
		this.modal.close();
	},
	submit(event) {
		event.preventDefault();
		console.log(this.formatValue());
		const transaction = this.formatValue();
		transactions.add(transaction);
		this.clearFields();
		this.closeModal();
	},
};

form.form.addEventListener("submit", (event) => {
	form.submit(event);
});
const App = {
	init() {
		transactions.all.forEach((transaction, index) => {
			dom.addTransactionIntoDom(transaction, index);
      storage.set(transactions.all);
		});
    
		dom.upDateBalance();
	},
	reload() {
		dom.clearTransactions();
		App.init();
	},
};

App.init();
