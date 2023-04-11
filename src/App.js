import './App.css';
import Desc from './desc';


function App() {     
  return (
    <div className="App">
      <h1>Samik Shakya</h1>
      <Desc></Desc>

      <table className='tables'>
        <tr>
          <th>Games</th>
          <th>Genre</th>
        </tr>

        <tr>
          <td>Need for speed</td>
          <td>Car Racing</td>
        </tr>

        <tr>
          <td>GTA</td>
          <td>Open World</td>
        </tr>

        <tr>
          <td>COD</td>
          <td>FPS</td>
        </tr>
        </table>

      
    </div>
  );
}

export default App;
