export default function initApp() {
	const transactions = {
		all: [
			{
				id: 1,
				description: "Criação de WebSite",
				amount: "120 000,00 KZ",
				transactionType: "incomes",
				date: "2015-04-06",
			},
			{
				id: 2,
				description: "Luz",
				amount: "6000,00 KZ",
				transactionType: "expenses",
				date: "2015-04-06",
			},
			{
				id: 3,
				description: "Água",
				amount: "6000,00 KZ",
				transactionType: "expenses",
				date: "2015-04-06",
			},
		],
		incomes() {
			const income = this.all
				.filter(item => item.transactionType === "incomes")
				.map(item => utilities.formatAmount(item.amount));
			return income;
		},
	};
	const dom = {
		tbody: document.querySelector("[data-transactionTable='tbody']"),
		addTransactionIntoDom(transaction) {
			this.tbody.appendChild(this.createTr(transaction));
		},
		createTr(transaction) {
			const tr = document.createElement("tr");
			tr.innerHTML = this.contentTr(transaction);
			return tr;
		},
		contentTr(transaction) {
			const cssClass =
				transaction.transactionType === "incomes" ? "income" : "expense";
			const signal = transaction.transactionType === "incomes" ? "" : "-";
			const contentTr = ` <td>${transaction.description}</td>
              <td class="${cssClass}">${signal}${" "}${transaction.amount}</td>
              <td>${transaction.date}</td>
              <td><img src="./assets/img/minus.svg" alt="Remover transação" title="Remover transação"></td>`;
			return contentTr;
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
			const amountFormatted = Number(amount.replace(/\D/g, "")) /100; ;
			return amountFormatted;
		},
	};
	transactions.all.forEach((transaction) => {
		dom.addTransactionIntoDom(transaction);
	});
	console.log(transactions.incomes());
	console.log(utilities.formatAmount("120 000,00 KZ"));
}
