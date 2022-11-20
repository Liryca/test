import './App.css';
import SearchUser from '../SearchUser/SearchUser';
import UserList from '../Users/Users';
import Filter from '../Filter/Filter';

function App() {
  return (
    <div className="App">
    
      <div className='app-top-bar'>
        <h1 className='title'>Поиск</h1>
        <SearchUser />
        <Filter/>
      </div>

     
      <UserList />
    </div>
  );
}

export default App;


