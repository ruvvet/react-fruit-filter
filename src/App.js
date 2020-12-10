import FruitContainer from './components/FruitContainer';

import './App.css';

function App() {
  const fruits = [
    'watermelon',
    'mandarins',
    'cherries',
    'peaches',
    'grapes',
    'apples',
    'bananas',
    'oranges',
    'kiwis',
    'strawberries',
    'blueberries',
    'raspberries',
  ];
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
