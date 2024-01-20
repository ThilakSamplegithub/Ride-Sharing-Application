import logo from './logo.svg';
import './App.css';
import Passenger from './Pages/passenger';
import Rider from './Pages/rider';
import Navbar from './Components/NavBar';
import MainRoutes from './Pages/MainRoutes';
import WithSubnavigation from './Components/Navbar2';
function App() {

  return (
    <div className="App">
      <WithSubnavigation/>
      {/* <Navbar/> */}
    <MainRoutes/>
    
    
    </div>
  );
}

export default App;
