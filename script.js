
async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const resultBox = document.getElementById("result");

    if (!amount || amount <= 0) {
      resultBox.textContent = "Please enter a valid amount.";
      return;
    }

    resultBox.textContent = "Converting...";

    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await res.json();
      const rate = data.rates[to];
      const converted = (amount * rate).toFixed(2);
      resultBox.textContent = `${amount} ${from} = ${converted} ${to}`;
    } catch (err) {
      resultBox.style.color = "red";
      resultBox.textContent = "Failed to fetch rates.";
    }
  }
    