import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from './axiosConfig'
import { useEffect, useState, createContext } from "react";

export const Appstate =createContext()

function App() {
    
  const [user, setuser] = useState({})

  const token = localStorage.getItem('token')
  const navigate=useNavigate()
  async function checkUser() {
    try {
      const {data}=await axios.get('users/check' , {
        headers: {
          Authorization:'Bearer ' + token,
        },
        
      }) 
    setuser(data)
    } catch (error) {
      console.log(error.response);
      navigate('/login')
    }
  }

  useEffect(()=> {
    checkUser();
  },[])

  return (
    <Appstate.Provider value={{user,setuser}}>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
      </Routes>
      
    </Appstate.Provider>
  );
}

export default App;
