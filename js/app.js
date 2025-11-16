let transactionManager;
let chartManager;

document.addEventListener('DOMContentLoaded', function() {
    transactionManager = new TransactionManager();
    chartManager = new ChartManager(transactionManager);
    document.getElementById('transactionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sistema financeiro pronto para uso!');
    });
});
