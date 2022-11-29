import './App.css';
import Search from '../Search/Search';
import Users from '../Users/Users';
import Tabs from '../Tabs/Tabs';
import Modal from '../Modal/Modal';
import { BrowserRouter, Routes, Route, useLocation, } from "react-router-dom";
import UserDatails from '../UserDatails/UserDatails';


function App() {

  return (


   
    <div className="App">
  
  <section className='app-top-bar'>
          <h1 className='title'>Поиск</h1>
          <Modal />
          <Search />
          <Tabs />
        </section>
        {/* <Users/> */}

      <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path="/:id" element={<UserDatails />}> </Route>
        </Routes>
    

    </div>
  );
}

export default App;


