import './App.css';
import MapContainer from './component/MapContainer';
import SearchPlacs from './component/SearchPlace';
import Nav from './component/Nav';
import Bottombar from './component/BottomBar'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SearchPlacs></SearchPlacs>
    </div>
  );
}

export default App;
