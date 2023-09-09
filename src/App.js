import './App.css';
import NavBar from './Component/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoud from './Content/404';
import Main from './Main';

function App() {
  return (

    <div className='App'>


      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} >
          </Route>
          <Route path="/*" element={<NotFoud />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
