import './App.css';
import Header from "./Components/Header";
import { useState } from 'react';
import EnterComponent from './Components/log&sign';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ReaderLogin from './Components/ReaderLogin';
import Signin from './Components/SignIn';
import ReaderProfile from './Components/ReaderProfile';
import ForgotPassword from './Components/ForgotPassword';
import e from 'cors';
import FetchUsers from './Components/FetchUsers';


function App() {

  const [t_email,setE] = useState("");
  const [t_username,setN] = useState("");

  const setProfile = (username,email) =>{
      
      setE(email);
      setN(username);

      console.log(username,email);
      console.log(t_username,t_email);
  };
  return (
    <>
    
    {/* <Router>
      <Header/>
      
    <Routes>
      <Route path="/landing" element={<EnterComponent/>}></Route>
      <Route path="/ReaderLogin" element={<ReaderLogin setProfile={setProfile} />}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/GetPassword" element={<ForgotPassword />}></Route>
      <Route path="/ReaderProfile" element={<ReaderProfile id={t_username} email={t_email}/>}></Route>
    </Routes>
    
    </Router> */}
    <FetchUsers/>
    </>
  );
}

export default App;
