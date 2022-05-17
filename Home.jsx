import {useState} from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Layout from '../pages/Layout'
const Home = () => {
const [name,setName] = useState('')

const [user,setUser] = useState(null)
  const handleLogin= ()=>setUser({id:'1',name:'j',})
  const handleLogout=()=>setUser(null)

  const handleSubmit=()=>{
    if(!user){
        return <Layout />
    }else if(name=='a'){
    
    }

}
{user ? (
    <button onClick={handleLogout}>Sign Out</button>
  ) : (
    <button onClick={handleLogin}>Sign In</button>
  )}


    return (
    <>
    <h2>Authentication required</h2>
    
    <input type="text" name='name' onChange={(e)=>setName(e.target.value)}/>
    <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default Home