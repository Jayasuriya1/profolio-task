import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar';
import Banner from './banner';
import About from './about';
import Myskill from './myskill';
import Project from './project';
import ContactMe from './contactme';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner/>
    <About/>
    <Myskill/>
    <Project/>
    <ContactMe/>
  </div>
  );
}

export default App;
