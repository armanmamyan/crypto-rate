
const ExchangeRate = ({exchangeData}) => {
    const {exchangeRate, primaryCurrency, seocndaryCurrency} = exchangeData
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate:</h3>
             <h1>{exchangeRate}</h1>
             <p>{primaryCurrency} to {seocndaryCurrency}</p>
        </div> 
    )
}

export default ExchangeRate;