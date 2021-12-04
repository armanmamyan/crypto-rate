import { useState } from "react";
import axios from "axios";
import ExchangeRate from "./ExchangeRate";

const currencies = ["BTC", "ETH", "SOL", "XRP", "ADA", "LTC", "USD"];
const conversionResponseObjName = 'Realtime Currency Exchange Rate';
const EXCHANGE_RATE = '5. Exchange Rate';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const [choosenPrimaryCurrency, setChoosenPrimaryCurrency] = useState("BTC");
  const [choosenSeocndaryCurrency, setChoosenSeocndaryCurrency] = useState("BTC");
  const [exchangeRate, setExchangeRate] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: choosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: choosenSeocndaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "c6f976e248mshe6bc768cf0dfd6fp167445jsn111e3ac2ff2e",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const exchangeData= data[conversionResponseObjName];
        const rate = exchangeData[EXCHANGE_RATE];
        const finalResult = rate * amount;
        
        setExchangeRate(Number(rate).toFixed(4));
        setResult(finalResult.toFixed(4))

      })
      .catch(function (error) {
        
    });
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="currency-table">
        <label htmlFor="currency-amount-1">Primary Currecy</label>
        <input
          type="number"
          name="currency-amount-1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name="currency-option-1"
          id="currencyOptions"
          className="currency-options"
          value={choosenPrimaryCurrency}
          onChange={(e) => setChoosenPrimaryCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="currency-table">
        <label htmlFor="currency-amount-2">Secondary Currecy</label>
        <input
          type="number"
          name="currency-amount-2"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          disabled={true}
        />
        <select
          name="currency-option-2"
          id="currencyOptions"
          className="currency-options"
          value={choosenSeocndaryCurrency}
          onChange={(e) => setChoosenSeocndaryCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button
        id="conver-btn"
        type="button"
        className="conver-btn"
        onClick={convert}
      >
        Convert
      </button>
      <ExchangeRate 
        exchangeRate={exchangeRate} 
        choosenSeocndaryCurrency={choosenSeocndaryCurrency}
        choosenPrimaryCurrency={choosenPrimaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
