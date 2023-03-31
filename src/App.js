import './App.css';
import MapContainer from './component/MainMapContainer/MapContainer';
import SearchPlacs from './component/MainSearchPlace/SearchPlace';
import Nav from './component/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SearchPlacs></SearchPlacs>
    </div>
  );
}

export default App;
