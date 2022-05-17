
import {useNavigate} from 'react-router-dom'
import { useEffect} from 'react'

const CEOandPrincipal = ({auth}) => {
  const navigate = useNavigate()
useEffect(()=>{
let login = localStorage.getItem('/loginpage')
if(login){
  navigate('/ceoandprincipal')
}
},[])

  return (
    <div>
      welcome to the LMV IT services 
YOU ARE AUTHENTICATED AS 
    CEOandPrincipal {auth}</div>
  )
}

export default CEOandPrincipal

