import './App.css';
import { json } from './data/data.js';
import Listing from './components/Listing';

function App() {
  const data = json;
  return (
    <Listing items={data} />
  );
}

export default App;
