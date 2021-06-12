import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store";
import './App.css';
import Home from './screen/Home';
import Loader from "./components/Loader";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Home} />
        </div>
      </Router>
      <Loader />
    </Provider>
  );
}

export default App;
