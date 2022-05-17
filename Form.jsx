import React from 'react'
import {useState,useEffect} from 'react'
import { Button, table, Modal } from 'react-bootstrap'

const Form = () => {
const [isname,setisName] = useState('')
const [age,setAge] = useState('')
const [isOccupation,setIsOccupation]=useState('')
const [isSalary,setisSalary] = useState('')
const [ispassword,setisPassword] = useState('')

const [listUsers,setListUsers] = useState([])
const [isEdit,setIsEdit] = useState('')
const [visible, setVisible] = useState(false);
const btnClose = () => setVisible(false);
const btnShow = () => setVisible(true);

const handleSubmit=async(e)=>{
    e.preventDefault()
    const body = {isname,age,isOccupation,isSalary,ispassword}
const submitData = await fetch(`http://localhost:8000/loremipsom`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
})
}




const updateHandle= async(list)=>{
// const body = {isname,age,isOccupation,isSalary,ispassword}
// const response = await fetch(`http://localhost:8000/loremipsom/${list.id}`,{
//     method:'PUT',
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify(body)
// })



}
    return (
    <>
   <form onSubmit={handleSubmit}>
       <label htmlFor="isname">Name</label>
       <input type="text" name='isname' value={isname} onChange={(e)=>setisName(e.target.value)} />

       <label htmlFor="age">Age</label>
       <input type="text" name='age' value={age} onChange={(e)=>setAge(e.target.value)}/>

     

       <label htmlFor="isPosition">occupation</label>
       <input type="text" name='isOccupation' value={isOccupation} onChange={(e)=>setIsOccupation(e.target.value)}/>

       <label htmlFor="isSalary">salary</label>
       <input type="text" name='isSalary' value={isSalary} onChange={(e)=>setisSalary(e.target.value)}/>

       <label htmlFor="password">Password</label>
       <input type="text" name='isPassword' value={ispassword} onChange={(e)=>setisPassword(e.target.value)}/>
       <button type='submit'>submit</button>
       
       </form> 
   


<Modal.Header closeButton>
            <Modal.Title>
              UPDATE CUSTOMER DETAILS
            </Modal.Title>
          </Modal.Header>
   <Modal/>       

<form onSubmit={handleSubmit}>
       <label htmlFor="isname">Name</label>
       <input type="text" name='isname' value={isEdit.name} onChange={(e)=>setIsEdit(e.target.value)} />

       <label htmlFor="age">Age</label>
       <input type="text" name='age' value={age} onChange={(e)=>setAge(e.target.value)}/>

     

       <label htmlFor="isPosition">occupation</label>
       <input type="text" name='isOccupation' value={isOccupation} onChange={(e)=>setIsOccupation(e.target.value)}/>

       <label htmlFor="isSalary">salary</label>
       <input type="text" name='isSalary' value={isSalary} onChange={(e)=>setisSalary(e.target.value)}/>

       <label htmlFor="password">Password</label>
       <input type="text" name='isPassword' value={ispassword} onChange={(e)=>setisPassword(e.target.value)}/>
       <button type='submit'>submit</button>
       
       </form> 





    </>
  )
}

export default Form