import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const BranchManager = ({auth}) => {
const navigate = useNavigate()

  useEffect(()=>{
let login = localStorage.getItem('/loginpage')
if(login) {
  navigate('/branchmanager')
}
},[])

  return (
      
<>
<h2>welcome to the LMV IT services 
YOU ARE AUTHENTICATED AS BRANCH MANAGER
    BranchManager {auth}
</h2>



    </>
  )
}

export default BranchManager