import './App.css';
import Search from '../Search/Search';
import Users from '../Users/Users';
import Tabs from '../Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <div className='app-top-bar'>
        <h1 className='title'>Поиск</h1>
        <Search />
        <Tabs/>
      </div>
      <Users />
    </div>
  );
}

export default App;


