import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router'
import useAuth from '../hooks/useAuth'
import AllUsers from './AllUsers'

const LoginPage = () => {
  const [isname,setisName] = useState('')
  const [ispassword,setisPassword] = useState('')
  const navigate = useNavigate()


const handleSubmit=()=>{
  localStorage.setItem('/loginpage',true)
  if(isname.toLowerCase()==='branch' && ispassword=== "123"){
    navigate('/branchmanager')    
  } 
  localStorage.setItem('/loginpage',true)
   if (isname.toLowerCase()==='ceo' && ispassword==="123"){
    navigate('/ceoandprincipal')
  }
 localStorage.setItem('/loginpage',true )
if(isname.toLowerCase()==="addemp" && ispassword==="123"){
  navigate('/addemployeeassigned')
}
}  



 

useEffect(()=>{
let handleSubmit = localStorage.getItem('loginpage')
if(!handleSubmit){
  navigate('/loginpage')
}
},[])

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     const body = {isname,ispassword}
//   const submitData = await fetch(`http://localhost:8000/loremipsom`,{
//     method:'POST',
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify(body)
//   })
// }




  return (
    <>
    <h4 style={{display:'grid',justifyContent:'center'}}> Welcome back! Please verify login credentials</h4>
   
    <form onSubmit={handleSubmit} style={{paddingTop:'50px'}}>
      <div style={{display:'grid',justifyContent:'center'}}>
      <label style={{display:'grid',justifyContent:'center'}} htmlFor="isname">Name</label>
       <input type="text" name='isname' value={isname} onChange={(e)=>setisName(e.target.value)} autoComplete='off' required /> <br />
      </div>

      <div style={{display:'grid',justifyContent:'center'}}>
      <label style={{display:'grid',justifyContent:'center'}} htmlFor="password">Password</label>
       <input type="text" name='isPassword' value={ispassword} onChange={(e)=>setisPassword(e.target.value)} autoComplete='off' required/> <br />
      <button type='submit'>submit</button>
      </div>
   
    </form>
    

    </>
  )
}

export default LoginPage