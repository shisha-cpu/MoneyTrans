document.getElementById('convert-button').addEventListener('click', async () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Пожалуйста, введите корректную сумму.');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = amount * rate;

        document.getElementById('conversion-result').textContent = result.toFixed(2);
    } catch (error) {
        console.error('Ошибка при получении данных о курсе валют:', error);
        document.getElementById('conversion-result').textContent = 'Ошибка';
    }
});
