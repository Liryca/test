import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import UserList from './components/UsersList/UserList';
import Filter from './components/Filter/Filter';



function App() {


 


  // const userList = useAppSelector((state: any) => state.users);
  // const dispatch = useAppDispatch();

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


