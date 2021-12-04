import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';


const App = () => {
  return (
    <div className="app">
        <CurrencyConverter/>
        <NewsFeed/>
    </div>
  );
}

export default App;
