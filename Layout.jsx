import {useState} from 'react'
import {Link , Outlet} from 'react-router-dom'
const Layout = () => {
    const [toggle,setToggle] = useState('HR authenticated')
  return (
    <>
<nav style={{display:'flex',justifyContent:'space-around',padding:'5px',gap:'2px'}}>
    <ul>
   
        {/* <button>
            <Link to='/about'>About</Link>
        </button>
        <button>
            <Link to="/error">Error</Link>
        </button>
        <button>
            <Link to='allusers'>Allusers</Link>
        </button> */}
        
        <button>
            <Link to="/loginpage">Login Page</Link>
        </button>
        <button>
            <Link to="/addemployeedetails">Register</Link>
        </button>
        <button>
       <Link to='/loginpage'>Branch Manager</Link>
     </button>
     <button>
    <Link to='/loginpage'>CEO | Principal</Link>
</button>
<button>
    <Link to='/loginpage'>Add employee assigned</Link>
</button>
<button>
    <Link to='/loginpage'>HR AUTHENTICATED</Link>
</button>

        {/*
        
        <button>
            <Link to="/loginpage">Login Page</Link>
        </button>
        <button>
           <Link to='/hr'>Hr</Link>
        </button>
      <button>
       <Link to='/branchmanager'>Branch Manager</Link>
     </button>
 
*/}







{/* <button>
    <Link to='/home'>Home</Link>
</button>

<button>
    <Link to='/rmandtelecallers'>RM| Telecallers</Link>
</button>
<button>
    <Link to='/zonalmanager'>Zonal Manager</Link>
</button> */}


    </ul>
</nav>
<Outlet/>



    </>
  )
}

export default Layout
