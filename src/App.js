import React,{ useState} from 'react';

import './App.css';
import Display from './components/Display';
import UserList from './components/UserList';

function App() {
 const [usersList, setUserList]= useState([])
 const addUserHandler = (uId, Uprice, uDis) =>{
setUserList((prevUsersList) =>{
  return [...prevUsersList, {id: uId, price: Uprice, dis: uDis, id:Math.random().toString()}]
})
 }
  return (
    <div>
      <Display onAddUser={addUserHandler}/>
      <UserList user={usersList}/>
  </div>
  );
}

export default App;
