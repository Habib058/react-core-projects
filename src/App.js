import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Details:</h2>
        <Person name="munna" job="football" ></Person>
        <Person name="David" job="Watching" ></Person>

      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div style = {{border:'1px solid red',width:'400px',margin:'20px',backgroundColor:'lightcyan',color:'black'}}>
      <h3>Name:{props.name}</h3>
      <p>Job:{props.job}</p>
    </div>
  );
}

export default App;
