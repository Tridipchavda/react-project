
import { createContext, useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useSearchParams,
  } from "react-router-dom";
import Axios from "axios";
import UserCell from "./UserCell";
import Spinner from "./spinner.gif";


function FetchUsers(props) {

    const[post,setPost] = useState([]);

    useEffect(()=>{
         
            Axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users').then(
                (res)=>{
                    console.log(res.data);
                    setPost(res.data);  
                }
            ).catch((err)=>{
                if(err.message != undefined){
                    setPost([{
                        profile:{
                            firstName:"Error in Axios"
                        }
                    }]);
                    alert("Axios Can't Fetch API");
                }
                console.log(err);
                
            })
      },[]);

    const [profileId,setProfileId] = useState(1);

    const setId = (id) =>{
        console.log(id);
        setProfileId(id);
    }

    const dark = 0;
    const light = 1;

    return (
        <>

        <div className="flex flex-row h-[10px] ">
            <div className=" min-h-[100vh] makeScroll min-w-[300px] bg-green-50 opacity-100 font-poppins px-4">
                <div className="h-[20px]">
                </div>
                {post.map((item,count)=>{
                    
                    if(count%2==0){
                        return (
                            UserCell(item,setId,dark,count)
                        );
                    }
                    return (
                        UserCell(item,setId,light,count)
                    );
                })}
               
            </div>
            <div>
            {post[profileId-1]==undefined
            ?
            <div className="card mx-[500px] my-[300px]">
                <img src={Spinner} width="50px" height="50px"/>
            </div>
            :
            <div className="card w-[400px] min-h-[400px] p-3 mx-[300px] my-[40px] rounded-xl border-2">
                <center>
                    <h1 className="text-2xl bg-blue-300 rounded py-3"> User Details </h1>
                    <hr></hr>
                    
                    <img className="object rounded-full mt-3 border-2" src={post[profileId-1].avatar} width="100px" height="100px" 
                    alt="Nn">
                    </img>
                    <p className="text-xl">@{post[profileId-1].profile.username}</p>

                    <p className="min-w-[80%] bg-blue-100 rounded py-1 my-[20px] text-left px-4">
                        {post[profileId-1].Bio}
                    </p>

                    <div className="flex flex-col py-2">
                        <p className="text-left mx-2 text-[13px]">Full Name </p>
                        <p className="min-w-[80%] bg-blue-100 rounded py-1 my-[2px] text-left px-4">
                            {post[profileId-1].profile.firstName} {post[profileId-1].profile.lastName}
                        </p>
                    </div>

                    <div className="flex flex-col py-2">
                        <p className="text-left mx-2 text-[13px]">Job Title </p>
                        <p className="min-w-[80%] bg-blue-100 rounded py-1 my-[2px] text-left px-4">
                            {post[profileId-1].jobTitle}
                        </p>
                    </div>

                    <div className="flex flex-col py-2">
                        <p className="text-left mx-2 text-[13px]">Email </p>
                        <p className="min-w-[80%] bg-blue-100 rounded py-1 my-[2px] text-left px-4">
                            {post[profileId-1].profile.email}
                        </p>
                    </div>
                
                </center>
            </div>
            }
            
        </div>
        </div>
   
        
        </>
    );
}

export default FetchUsers;