import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

function ForgotPassword() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    
    const nav = useNavigate();
    const submitForm = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3001/getPassword',{name:name,email:email}).then(
            (res)=>{
                console.log(res);
                if(res.data.length==0){
                    alert("Entered values are not matching with Database");
                }
                else{
                    alert("Your Password is "+res.data[0].password);
                }
            }
        )
    }
    return (
        <div className="bg-green-lighter mt-[50px] flex flex-col">
            <div className="container max-w-[600px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-green-100 px-6 py-8 rounded-xl shadow-md text-green-600 w-full">
                    <h1 className="mb-8 text-3xl text-center">Get Password</h1>
                    <form id="signInForm"method="post" action="/" onSubmit={submitForm}>

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Enter Username"
                            value={name}
                            onChange ={ (e)=>{setName(e.target.value)}}
                             />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange ={ (e)=>{setEmail(e.target.value)}}
                            />

                        <button
                            className="w-full text-center py-3 rounded my-1 text-white bg-green-500"
                            
                        >Get Your Password</button>
                    </form>
                   
                </div>
            </div>
        </div>

    )
}

export default ForgotPassword;