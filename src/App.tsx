import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import Sort from './components/Sort/Sort';
import UserList from './components/UsersList/UserList';



function App() {

  // const userList = useAppSelector((state: any) => state.users);
  // const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div className='app-top-bar'>
        <h1 className='title'>Поиск</h1>
        <SearchUser />
        <Sort />
      </div>
      <UserList />
    </div>
  );
}

export default App;


