import React from 'react';

const UserList = (props) =>{
    const delHandler= (event) =>{
        event.preventDefault();
        
       }
  return (
    <ul>
    {props.user.map((user) =>(
        <li key={user.id}>
            {user.price}-{user.dis}<button onClick={delHandler}>Delete</button>
        </li>
    ))}
    </ul>
  )
}
export default UserList;
