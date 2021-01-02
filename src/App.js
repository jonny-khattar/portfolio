import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { NotFound } from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-Container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
