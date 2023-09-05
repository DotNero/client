
//import './styles/App.css';
//import "./App.css";
import Navbar from './elements/navigation-bar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import About from './pages/about';
import ForCompany from './pages/for-company';
import ForStudent from './pages/for-student' ;
import Help from './pages/help';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Home from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/for-company' component={ForCompany} />
        <Route path='/for-student' component={ForStudent} />
        <Route path='/help' component={Help} />
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
