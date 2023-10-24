import data from './etsy.json';
import Listing from './Listing';
import './style.css';

function App() {
  return (
    <div className="App">
      <Listing items = { data }/>
    </div>
  );
}

export default App;
