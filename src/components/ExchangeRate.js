
const ExchangeRate = ({exchangeRate = '', choosenPrimaryCurrency, choosenSeocndaryCurrency}) => {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate:</h3>
             <h1>{exchangeRate}</h1>
             <p>{choosenPrimaryCurrency} to {choosenSeocndaryCurrency}</p>
        </div> 
    )
}

export default ExchangeRate;