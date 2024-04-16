import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Lobby from './components/Lobby';
import { Provider } from 'react-redux';
import store from "./redux/store";
import UserDashboard from './components/Dashboard/UserDashboard'
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='lobby' element={<Lobby />}/>
          <Route path='users/:userId' element={<UserDashboard />}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
