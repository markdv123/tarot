import './styles/App.css'
import MajorArcana from './components/MajorArcana'

function App() {
  return (
    <div className="App">
      {MajorArcana.map(card => (
        <div>
        <p>{card.name}</p>
        <img src={card.front} style={{width: '200px'}}/>
        </div>
      ))}
    </div>
  );
}

export default App;
