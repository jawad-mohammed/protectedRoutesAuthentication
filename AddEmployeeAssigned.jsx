import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const AddEmployeeAssigned = () => {
const navigate = useNavigate()



const [allEmployees,setAllEmployees]=useState({
 name:'',
 email:'',
 DOJ:'',
 password:'',
 managerid:''   
})
const [role,setRole] = useState(['HR','ADMIN','BACKEND','CEO','SALES'])



useEffect(()=>{
let login = localStorage.getItem('/loginpage')
if(login){
navigate('/addemployeeassigned')
}


},[])

const handleChange=(e)=>{
const res = setAllEmployees({...allEmployees,[e.target.name]:e.target.value})

}
const roleSelect=(e)=>{

    const res = e.target.value
    console.log(res);
    }
    

const handleSubmit=async(e)=>{
e.preventDefault()
console.log(allEmployees.name+allEmployees.email+allEmployees.DOJ+allEmployees.password+allEmployees.managerid);
}


return (
    <>
    <h2>Add Employee Assigned</h2>

    <form onSubmit={handleSubmit} style={{display:'grid',justifyContent:'center'}}>
<label htmlFor="name">Name</label><br />
<input type="text" name='name' value={allEmployees.name} onChange={handleChange}/><br />
<label htmlFor="email">Email</label><br />
<input type="text" name='email' value={allEmployees.email} onChange={handleChange}/><br />
<label htmlFor="DOJ">Date Of Joining</label> <br />
<input type="date" name='DOJ' value={allEmployees.DOJ} onChange={handleChange}/><br />
<label htmlFor="password">Password</label> <br />
<input type="text" name='password' value={allEmployees.password} onChange={handleChange}/><br />
<select onChange={roleSelect} id="">
{role.map((elem,id)=>{
    return(<option key={id} value={elem}>{elem}
    
    </option>)
})}
</select><br />
<label htmlFor="managerid">Manager Id</label> <br />
<input type="text" name='managerid' value={allEmployees.managerid} onChange={handleChange}/> <br />

<button type='submit'>submit</button>
    </form>


    
    
    </>
  )
}

export default AddEmployeeAssigned