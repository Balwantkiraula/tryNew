import React,{useState} from 'react';

const Display = (props) =>{
  const [id, setId]=useState('');
  const [price, setPrice]=useState('');
  const [dis, setDis]=useState('');
 const addTableHandler= (event) =>{
  event.preventDefault();
 props.onAddUser(id, price, dis);
  setId('')
  setPrice('')
  setDis('')

 }
 const changeIdHandler = (event) =>{
  setId(event.target.value)
 }
 const changePriceHandler = (event) =>{
  setPrice(event.target.value)
 }
 const changeDisHandler = (event) =>{
  setDis(event.target.value)
 }
  
  return (
    <form  onSubmit={addTableHandler}>
    <label> Choose Id : </label>
    <input type='number' 
    value={id}
    onChange={changeIdHandler}
   ></input>
    <label> Choose Price : </label>
    <input type='number' 
    value={price}
    onChange={changePriceHandler}
   ></input>


    <label> Choose Dishname : </label>
    <input 
    type='text' 
    value={dis}
    onChange={changeDisHandler}
    ></input>


    <label
    > ChooseTable : </label>
    <select >
      <option value='Table1'> Table1 </option>
      <option value='Table2'> Table2 </option>
      <option value='Table3'> Table3 </option>
    </select >
    <button >
      Add To Bill</button>
      <h1>Orders</h1>
        <h1>Table1</h1>
        <h1>Table2</h1>
        <h1>Table3</h1>
      
  </form>
  
  
  )
}
export default Display;
