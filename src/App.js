import './App.css';
import SampleComponent from './sampleComponent';
import ApiReducer from './reducer/apiReducer';
function App(props) {
  console.log(props,"props",props.store)
  return (
    <div className="App">
      <SampleComponent/>
      
    </div>
  );
}

export default App;
