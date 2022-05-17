import {useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'

const HR = ({auth}) => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    let login = localStorage.getItem('/loginpage')
    if(!login) {
      navigate('/loginpage')
    }
  },[])
  return (
    <>
    HR PAGE {auth}
    </>
  )
}

export default HR