import { Basket } from './components/Basket';
import { Pizza } from './components/Pizza';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Pizza />
        <Basket />
      </div>
    </>
  );
}

export default App;
