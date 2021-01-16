import './styles/App.css'
import MajorArcana from './components/MajorArcana'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      {MajorArcana.map(card => (
        <Card img={card.front} />
      ))}
    </div>
  );
}

export default App;
