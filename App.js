
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import About from "./pages/About";
import AddEmployeeDetails from './pages/AddEmployeeDetails';
import AllUsers from "./pages/AllUsers";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import LoginPage from './pages/LoginPage'
import NewUser from "./pages/NewUser";
import AddEmployeeAssigned from './ProtectedRoutes/AddEmployeeAssigned';
import BranchManager from "./ProtectedRoutes/BranchManager";
import CEOandPrincipal from "./ProtectedRoutes/CEOandPrincipal";
import Home from "./ProtectedRoutes/Home";
import HR from "./ProtectedRoutes/HR";
import HRAUTHENTICATED from './ProtectedRoutes/HRAUTHENTICATED';

import RMandTelecallers from "./ProtectedRoutes/RMandTelecallers";
import ZonalManager from "./ProtectedRoutes/ZonalManager";

export default function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)







  return (
<>
        {/* <button onClick={()=>setIsAuthenticated(!isAuthenticated)}>submit</button> */}
{ 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
    
          {/* <Route path="about" element={<About/>} />
          <Route path="error" element={<Error />} />
          <Route path="allusers" element={<AllUsers/>}/> */}
         
          <Route path="/loginpage" element={ <LoginPage/> } />
          <Route path='/addemployeedetails' element={<AddEmployeeDetails/>}/>
          <Route path="/branchmanager" element={ <BranchManager auth={'props :branchmanager'}/>}/>
          <Route path="/ceoandprincipal" element={<CEOandPrincipal auth={'props: ceo and principal'}/>}/> 
           <Route path='/addemployeeassigned' element={  <AddEmployeeAssigned/>}/>
           <Route path='/hrauthenticated' element={<HRAUTHENTICATED/>}/>
         {/* <Route path="/newuser" element={<NewUser/>}/>
        
         <Route path="/hr" element={<HR auth={'sidd'}/>}/>
        
         
         */}
     
     {/* <Route path="home" element={ <Home/> }/>
    <Route path="rmandtelecallers" element={<RMandTelecallers auth={'sales !'}/>}/>
       <Route path="zonalmanager" element={<ZonalManager auth={'MD'}/>}/> */}
  
        </Route>
      </Routes>
    </BrowserRouter>
   }
 

{/* <InputTodo/>
<ListTodos/> */}

{/* <AddEmployeeDetails/> */}
 

  
    </>
  
  );
}