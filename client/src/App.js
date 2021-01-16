import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Layouts from './pages/Layouts'
import Reading from './pages/Reading'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
          component={() => <Home />}
        />
        <Route
          path="/cards"
          component={() => <Cards />}
        />
        <Route
          path="/layouts"
          component={() => <Layouts />}
        />
        <Route
          path="/reading"
          component={() => <Reading />}
        />
      </Switch>
    </div>
  );
}

export default App;
