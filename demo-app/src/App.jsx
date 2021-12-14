
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <LatestRelease/>
      <Footer  fixed="bottom"/>
    </div>
  );
}

export default App;
