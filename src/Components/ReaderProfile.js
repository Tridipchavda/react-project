import { createContext, useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useSearchParams,
  } from "react-router-dom";
import Axios from "axios";



function ReaderProfile(props) {

    const [t_email,setE] = useState("");
    const [t_username,setN] = useState("");

    const[info,setInfo] = useState("");
    const[post,setPost] = useState([{}]);

    const insertForm = (e) =>{
        console.log("heeff");
        e.preventDefault();

        Axios.post('http://localhost:3001/insertPost',{username:window.localStorage.getItem('id'),info:info}).then(
            (res)=>{
                
                alert("Post inserted");
                
            }
        )
    }

    const deletePost = (e) =>{

        e.preventDefault();

        Axios.post('http://localhost:3001/deletePost',{id:e.target.id}).then(
            (res)=>{
                
                alert("Post deleted");
                
            }
        )
    }

    const likeThePost = (e) =>{
        e.preventDefault();

        Axios.post('http://localhost:3001/likeThePost',{id:e.target.id}).then(
            (res)=>{
                
                alert("Liked message");
                
            }
        )
    }

    const addComment = (e) =>{
        e.preventDefault();

        var comment = prompt("Enter comment :");
        console.log(comment);
        Axios.post('http://localhost:3001/addComment',{id:e.target.id,comment}).then(
            (res)=>{
                
                alert("Added Comment to Post");
                
            }
        )
    }

    useEffect(()=>{
           if(window.localStorage.getItem('id')==null || window.localStorage.getItem('id')=="" ){
            window.localStorage.setItem('id',props.id);
            window.localStorage.setItem('email',props.email);
         
           }
           else{
               setN(window.localStorage.getItem('id'));
               setE(window.localStorage.getItem('email'));
           }
           Axios.post('http://localhost:3001/getPosts').then(
            (res)=>{
                console.log(res);

                setPost(res.data)
            
                console.log(post);
            }
        )
            
            console.log("Yr");

      },[]);

    return (
        <>

        <div>
            <div className=" min-h-[80px] flex flex-col max-w-full mx-auto bg-green-50 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">

                <div className="flex items-center ml-[5px] px-4 pt-4 justify-between">
                    <div className="w-10 h-10 bg-blue-600 flex items-center rounded-full">
                        <img className="h-10 w-10 mx" src="https://devitt-forand.com/wp-content/uploads/2018/05/person-icon.png" />
                        
                    </div>
                    <div className="w-[1300px] flex items-center">
                        <div className=" mx-[4px] flex flex-col">
                            <div className=" mx-[4px] flex flex-row">
                                <p className="text-xl mx-3 my-3">Email : {t_email}</p>
                                <p className="text-xl mx-3 my-3">Name : {t_username}</p>
                            </div>
                      
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-blue-lighter mt-[20px] flex flex-col">
            <div className="container max-w-[600px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-blue-100 px-6 py-8 rounded-xl shadow-md text-blue-600 w-full">
                    <h1 className="mb-8 text-3xl text-center">Add Feed to Public</h1>
                    <form id="signInForm" method="post" onSubmit={insertForm}>

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="info"
                            placeholder="Enter Feed"
                            value={info}
                            onChange = {(e)=>{setInfo(e.target.value)}}
                            />
                        <button
                            className="w-full text-center py-3 rounded my-1 text-white bg-blue-500"
                        >Add Feed</button>
                    </form>
                </div>

            </div>
            <hr className="mt-5 mb-3"></hr>
            <div class="flex items-center justify-between p-3">
                <p class="text-xl font-bold">Posts for You</p>
               
            </div>
            <center>
                {post.map((item,num)=>{
                    return (
                    <div className='allFeed rounded-xl max-w-[600px] h-[110px] bg-blue-400 my-3' id={item.feed_id}>
                    <div className="w-full">
                        <div>
                            <div class="my-3 mx-5 w-[40px] h-[40px] rounded-[20px] bg-blue-100 float-left text-[20px] pt-1"> ✔️ </div>
                            <p class="pt-3 mx-3 font-semibold text-sm text-left leading-tight">{item.username}</p>
                            <p class="my-1 mx-3 text-left text-sm leading-tight text-dark"> {item.info} </p>
                        </div>
                        <div className="flex mt-3 mx-[270px]">
                        
                        <form id={item.feed_id} method="post" onSubmit={likeThePost}>
                        <button className="text-center rounded py-1 my-1 text-blue bg-blue-100 mx-1 min-w-[100px] "> {item.n_likes} Like</button>
                        </form>
                        
                        <form id={item.feed_id} method="post" onSubmit={addComment}>
                        <button  className="text-center rounded py-1 my-1 text-blue bg-blue-100 mx-1 min-w-[100px] "> 
                            {item.n_comments} Comment
                        </button>
                        </form>

                        <form id={item.feed_id} method="post" onSubmit={deletePost}>
                        <button  className="text-center rounded py-1 my-1 text-blue bg-blue-100 mx-1 min-w-[100px] "> 
                                Delete
                        </button>
                        </form>
                        </div>
                    </div>
                    </div>
                    );
                })
                // : <h1> "No Post Found"</h1>
                }
            </center>
        </div>
        </div>
        
        </>
    );
}

export default ReaderProfile;