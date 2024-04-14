import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Lobby from './components/Lobby';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='lobby' element={<Lobby />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
