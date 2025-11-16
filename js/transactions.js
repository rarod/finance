class TransactionManager {
    constructor() {
        this.transactions = this.loadTransactions() || [];
    }

    loadTransactions() {
        const data = localStorage.getItem('transactions');
        return data ? JSON.parse(data) : [];
    }

    saveTransactions() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
        this.saveTransactions();
    }

    removeTransaction(id) {
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.saveTransactions();
    }

    filterTransactions(criteria) {
        return this.transactions.filter(transaction => {
            return Object.keys(criteria).every(key => 
                transaction[key] === criteria[key]
            );
        });
    }

    calculateTotal() {
        return this.transactions.reduce((total, transaction) => {
            return total + transaction.amount;
        }, 0);
    }

    manageGoals(goals) {
        this.goals = goals || [];
        // Logic for managing goals can be implemented here.
    }

    manageDebts(debts) {
        this.debts = debts || [];
        // Logic for managing debts can be implemented here.
    }

    exportData() {
        const data = this.loadTransactions();
        return JSON.stringify(data);
    }

    importData(data) {
        this.transactions = JSON.parse(data);
        this.saveTransactions();
    }
}