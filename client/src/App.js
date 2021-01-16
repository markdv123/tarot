import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Layouts from './pages/Layouts'
import Reading from './pages/Reading'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
