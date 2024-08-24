
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
           
          </Routes>
        </Router>
    </div>
  );
}

export default App;
