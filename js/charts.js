class ChartManager {
    constructor(transactionManager) {
        this.transactionManager = transactionManager;
        this.categoryChart = null;
        this.balanceChart = null;
    }
    createCategoryChart() {
        const ctx = document.getElementById('categoryChart');
        if (!ctx) return;
        const expenses = this.transactionManager.getExpensesByCategory();
        const labels = Object.keys(expenses);
        const data = Object.values(expenses);
        if (this.categoryChart) this.categoryChart.destroy();
        this.categoryChart = new Chart(ctx, {
            type: 'doughnut',
            data: { labels: labels, datasets: [{ data: data, backgroundColor: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'] }] }
        });
    }
    createBalanceChart() {
        const ctx = document.getElementById('balanceChart');
        if (!ctx) return;
        const transactions = this.transactionManager.getTransactionsSorted();
        if (this.balanceChart) this.balanceChart.destroy();
        this.balanceChart = new Chart(ctx, { type: 'line', data: { labels: [], datasets: [{ label: 'Saldo', data: [] }] } });
    }
    updateCharts() { this.createCategoryChart(); this.createBalanceChart(); }
}
