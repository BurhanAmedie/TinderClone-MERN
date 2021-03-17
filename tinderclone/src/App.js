import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons.js"

function App() {
  return (
    // BEM class baming convention
    <div className="app">

      {/* header */}
      <Header />

      {/* TinderCard */}

      <TinderCards/>

      {/*Button below the swipe */}
        <SwipeButtons />
      </div>
  );
}

export default App;
 