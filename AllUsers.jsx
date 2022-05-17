import React from 'react'
import {useState,useEffect} from 'react'
const AllUsers = () => {
  const [listUsers,setListUsers] = useState([])

  const fetchData = async()=>{
    const res = await fetch(`http://localhost:8000/loremipsom`)
    const jsonData = await res.json()
    setListUsers(jsonData)
}
useEffect(()=>{
fetchData()
},[listUsers])

const deleteHandle=async(idd)=>{
const deleting = await fetch(`http://localhost:8000/loremipsom/${idd}`,{
    method:'DELETE'
})
setListUsers(listUsers.filter((list)=>list.id!== idd))
}

  return (
    <>
    
    {listUsers.map((list)=>{
        return(<div key={list.id}>
        <li>Name - {list.name}</li>
        <li>Age  - {list.age}</li>
        <li>Occupation - {list.occupation}</li>
     
        <li> Salary - {list.salary}</li>
        <li> Password - {list.password}</li>
        <button onClick={()=>deleteHandle(list.id)}>delete</button>
        {/* <button onClick={()=>updateHandle(list)}>update</button> */}
      <hr />
        </div>)
    })}
    
    
    </>
  )
}

export default AllUsers