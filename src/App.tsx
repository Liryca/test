import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import UserList from './components/UsersList/UserList';
import { useAppSelector } from './hooks/useSelectorTyped';

function App() {
  const userList = useAppSelector((state: any) => state.users);
  return (
    <div className="App">
      <div className='app-top-bar'>
        <h1 className='title'>Поиск</h1>
        <SearchUser />
        <div className='sort'>
          <p>Все</p>
        {userList.map((i:any) => {
          return <p key={i.id }>{ i.department}</p>
     })}
        </div>
      </div>
      <UserList/>
    </div>
  );
}

export default App;


