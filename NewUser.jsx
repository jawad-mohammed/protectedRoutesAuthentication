// import React from 'react'
// import {useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
// const NewUser = () => {
//   const [isname,setisName] = useState('')
//   const [age,setAge] = useState('')
//   const [isOccupation,setIsOccupation]=useState('')
//   const [isSalary,setisSalary] = useState('')
//   const [ispassword,setisPassword] = useState('')

  
// const handleSubmit=async(e)=>{
//   e.preventDefault()
//   const body = {isname,age,isOccupation,isSalary,ispassword}
// const submitData = await fetch(`http://localhost:8000/loremipsom`,{
//   method:'POST',
//   headers:{"Content-Type":"application/json"},
//   body:JSON.stringify(body)

// })
// alert('submitted your data')
// }

//   return (
//     <>
//      <h4 style={{display:'grid',justifyContent:'center'}}> Welcome to CRMib <br /> Please Enter Your Details </h4>
//     <form onSubmit={handleSubmit} style={{paddingTop:'50px'}}>
//       <div style={{display:'grid',justifyContent:'center'}}>
//        <label style={{display:'grid',justifyContent:'center'}} htmlFor="isname">Name</label>
//        <input type="text" name='isname' value={isname} onChange={(e)=>setisName(e.target.value)} autoComplete='off' required /> <br />
//        </div>
//        <div style={{display:'grid',justifyContent:'center'}}>
//        <label style={{display:'grid',justifyContent:'center'}} htmlFor="age">Age</label>
//        <input type="text" name='age' value={age} onChange={(e)=>setAge(e.target.value)} autoComplete='off' required/> <br />
//        </div>
     
//       <div style={{display:'grid',justifyContent:'center'}}>
//        <label style={{display:'grid',justifyContent:'center'}} htmlFor="isPosition">occupation</label>
//        <input type="text" name='isOccupation' value={isOccupation} onChange={(e)=>setIsOccupation(e.target.value)} autoComplete='off' required/> <br />
//        </div>
       
//        <div style={{display:'grid',justifyContent:'center'}}>
//        <label style={{display:'grid',justifyContent:'center'}} htmlFor="isSalary">salary</label>
//        <input type="text" name='isSalary' value={isSalary} onChange={(e)=>setisSalary(e.target.value)} autoComplete='off' required/> <br />
//        </div>
      
//       <div style={{display:'grid',justifyContent:'center'}}>
//        <label style={{display:'grid',justifyContent:'center'}} htmlFor="password">Password</label>
//        <input type="text" name='isPassword' value={ispassword} onChange={(e)=>setisPassword(e.target.value)} autoComplete='off' required/> <br />
//        <button style={{display:'grid',justifyContent:'center'}} type='submit'>submit</button>
//        </div>
       
       
//        </form> 
   
    
    
//     </>
//   )
// }

// export default NewUser