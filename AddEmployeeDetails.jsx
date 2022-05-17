import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import IndianStates from './IndianStates'
const AddEmployeeDetails = () => {
    const [locations, setLocations] = useState([])
    const [branchmumbai,setBranchMumbai] = useState(true)
    const [branchHyderabad,setBranchHyderabad]=useState(true)
    const [allUsers , setAllUsers ] = useState([])
const onSubmit=async(values)=>{
    try {
        const result = values
       console.log(result);
      const response = await fetch("http://localhost:8000/testcustomerupdation",{
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
      })
      } catch (error) {
        console.log(error)
      }
    }


    const formik = useFormik({
        initialValues: {
            empId: '',
            firstName: '',
            lastName: '',
            mobileNum: '',
            email: '',
            password: '',
            gender: '',
            lup: '',
            UUD: '',
            location: '',
            branch:'',
            states:'',
             region:'',
            role:''
        },onSubmit
 // setAllUsers(response)
})
//  const onSubmit=async(values)=>{
// console.log(values);
//  }


    return (
        <>
        <p>Registration form for management</p>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ display: 'grid',  flexWrap:'wrap',justifyContent:'center' }}>
                    <label htmlFor="empId">Employee Id</label><br />
                    <input type="text" name='empId' value={formik.values.empId} onChange={formik.handleChange} /><br />
                    <label htmlFor="firstName">FirstName</label> <br />
                    <input type="text" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} /> <br />
                    <label htmlFor="lastName">Last name</label> <br />
                    <input type="text" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} /> <br />
                    <label htmlFor="mobileNum">Mobile Num</label> <br />
                    <input type="text" name='mobileNum' value={formik.values.mobileNum} onChange={formik.handleChange} /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange} /> <br />
                    <label htmlFor="gender">Gender</label>
                    <select name="gender"
                     {...formik.getFieldProps('gender')}>
                        <option value="">select</option>
                        <option value="Mr">Mr</option>
                        <option value="Miss">Miss</option>
                        <option value="Mrs">Mrs</option>
                    </select> <br />
                    <label htmlFor="lup">Last Updated Date</label> <br />
                    <input type="date" name='lup' value={formik.values.lup} onChange={formik.handleChange} /> <br />
                    <label htmlFor="UUD">User Updated Date</label> <br />
                    <input type="date" name='UUD' value={formik.values.UUD} onChange={formik.handleChange} /> <br />
                    <label htmlFor="location">Location</label> <br />
                    <select name="location"
                    {...formik.getFieldProps('location')}
                    >
                        <option value="location">select</option>
                        <option value="MAHARASTRA">MAHARASTRA</option>
                        <option value="HYDERABAD" >HYDERABAD</option>
                    </select> <br />
                 
                   {branchmumbai && <div>
                    <label htmlFor="branch">Branch</label> <br />
                    <select name="branch" {...formik.getFieldProps('branch')}>
                        <option value="">select</option>
                        <option value="MUMBAI">MUMBAI</option>
                    </select> 
                   </div>}
                   
                   {branchHyderabad &&
                    <div>
                   <label htmlFor="branch">Branch</label>
                    <select name="branch" {...formik.getFieldProps('branch')}>
                        <option value="">select</option>
                        <option value="SOMAJIGUDA">SOMAJIGUDA</option>
                        <option value="BEGUMPET">BEGUMPET</option>
                        <option value="HIMAYATNAGAR">HIMAYATNAGAR</option>
                    </select> <br />
                   </div> 
                   }
                    <label htmlFor="states">State</label>
                   
                   <select  name="states" {...formik.getFieldProps('states')}
                 >
                   <option value="AN">Andaman and Nicobar Islands</option>
                   <option value="AP">Andhra Pradesh</option>
                   <option value="AR">Arunachal Pradesh</option>
                   <option value="AS">Assam</option>
                   <option value="BR">Bihar</option>
                   <option value="CH">Chandigarh</option>
                   <option value="CT">Chhattisgarh</option>
                   <option value="DN">Dadra and Nagar Haveli</option>
                   <option value="DD">Daman and Diu</option>
                   <option value="DL">Delhi</option>
                   <option value="GA">Goa</option>
                   <option value="GJ">Gujarat</option>
                   <option value="HR">Haryana</option>
                   <option value="HP">Himachal Pradesh</option>
                   <option value="JK">Jammu and Kashmir</option>
                   <option value="JH">Jharkhand</option>
                   <option value="KA">Karnataka</option>
                   <option value="KL">Kerala</option>
                   <option value="LA">Ladakh</option>
                   <option value="LD">Lakshadweep</option>
                   <option value="MP">Madhya Pradesh</option>
                   <option value="MH">Maharashtra</option>
                   <option value="MN">Manipur</option>
                   <option value="ML">Meghalaya</option>
                   <option value="MZ">Mizoram</option>
                   <option value="NL">Nagaland</option>
                   <option value="OR">Odisha</option>
                   <option value="PY">Puducherry</option>
                   <option value="PB">Punjab</option>
                   <option value="RJ">Rajasthan</option>
                   <option value="SK">Sikkim</option>
                   <option value="TN">Tamil Nadu</option>
                   <option value="TG">Telangana</option>
                   <option value="TR">Tripura</option>
                   <option value="UP">Uttar Pradesh</option>
                   <option value="UT">Uttarakhand</option>
                   <option value="WB">West Bengal</option>
               </select> 

                 <label htmlFor="region">Region</label>
                    <select name="region" {...formik.getFieldProps('region')}>
                        <option value="">select</option>
                        <option value="south">South</option>
                        <option value="east">East</option>
                        <option value="west">West</option>
                        <option value="north">North</option>
                        <option value="central">Central</option>
                    </select> <br />
                  
                    <label htmlFor="role">Role</label>
                    <select name="role" {...formik.getFieldProps('role')}>
                        <option value="">select</option>
                        <option value="HR">HR</option>
                        <option value="accountant">Accountant</option>
                        <option value="operationteam">Operation Team</option>
                        <option value="zonalmanager">Zonal Manager</option>
                        <option value="regionalmanager">Regional Manager</option>
                        <option value="relationshipmanager">Relationship Manager</option>
                        <option value="seniorrelationshipmanager">Sr. Relationship Manager</option>
                        <option value="branchmanager">Branch Manager</option>
                        <option value="claimsmanager">Claims Manager</option>
                        <option value="backendexecutive">Backend Executive</option>
                        <option value="director">Director</option>
                        <option value="admin">Admin</option>
                        <option value="telecaller">Telecaller</option>
                        <option value="teamleader">TeamLeader</option>
                        <option value="principalofficer">Principal Officer</option>
                        <option value="md">MD</option>
                        <option value="ceo">CEO</option>
                    </select> <br />

<button type='submit'>submit</button>



                </div>
            </form>





        </>
    )
}

export default AddEmployeeDetails