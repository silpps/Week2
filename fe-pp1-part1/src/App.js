import './App.css';
import logo from './images/logo.svg';
import IdCard from './components/IdCard.js';
import RandomOne from './components/Random.js';

function App() {
  return (
    <div>
          <div className="container">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="picture" className="picture" />
          <div className="text-container">
          <IdCard firstName="John" 
          lastName="Doe" 
          gender="male" 
          height={178} 
          birth={new Date("1992-07-14").toDateString()} />
          </div>
      </div>
      <div>
          <RandomOne min={1} max={100}/>
      </div>
    </div>
  );
}

export default App;
