import './App.css';
import SampleComponent from './sampleComponent';
import ApiReducer from './reducer/apiReducer';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import SocketHome from './components/socketHome';
import SocketChatRoom from "./components/socketChatroom"
import NewApp from './newComponents/app';
function App(props) {
  return (
    <div>
      <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<NewApp/>} />
        <Route exact path="/oldSocket" element={<SocketHome/>} />
        <Route  path="/:roomId" element={<SocketChatRoom/>} />
        <Route path="/hotelApp"  element={<SampleComponent/>}  />
      </Routes>
    </Router>
    </div>
    </div>
  );
}
 
export default App;
