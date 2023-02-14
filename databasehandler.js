const express = require('express');
const cors = require('cors');

const bp = require('body-parser');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({extended:true}));


app.post("/getData",(req,res)=>{
    const selectQuery = "SELECT * FROM `b_user`"

    const id = req.body.id;
    const password = req.body.password;

    var flag = "";
    db.query(selectQuery,(err,result)=>{
        
        console.log(result);
        console.log(err);

        for(var i=0;i<result.length;i++){
            
            if(result[i].username == id && result[i].password == password){
                console.log(result[i].username);
                flag = result[i];
                
                break;
                
            }
        }
        console.log(flag);
        res.send(flag);
    })
    
})


app.post("/addComment",(req,res)=>{
    const id = req.body.id;
    const comment = req.body.comment;

    const addCommentQuery = "INSERT INTO `b_comment`(`feed_id`, `comment`) VALUES (?,?)"

    db.query(addCommentQuery,[id,comment],(err,result)=>{
        console.log(err);

        if(err==null){
            const getCommentQuery = `SELECT * FROM b_feed WHERE feed_id=${id}`;;
    
            db.query(getCommentQuery,(err,result)=>{
                var updatedComments =  parseInt(result[0].n_comments) + 1;
                console.log(updatedComments);
        
                const updateQuery = `UPDATE b_feed SET n_comments=${updatedComments} WHERE feed_id=${id} `;
        
                db.query(updateQuery,(err,result)=>{
                    console.log(err);
                    
                })
            })
        }
    })
    
    res.end("Add Comment Successfully");
});
app.post("/likeThePost",(req,res)=>{

    const id = req.body.id;
    console.log(id);

    const getLikeQuery = `SELECT * FROM b_feed WHERE feed_id=${id}`;;
    

    db.query(getLikeQuery,(err,result)=>{
        var updatedLikes =  parseInt(result[0].n_likes) + 1;
        console.log(updatedLikes);

        const updateQuery = `UPDATE b_feed SET n_likes=${updatedLikes} WHERE feed_id=${id} `;

        db.query(updateQuery,(err,result)=>{
            console.log(err);
            if(err==null){
                res.send("Success");
            }
            else{
                res.send("Data Updation Failed");
            }
        })
    })
    
    
})

app.post("/deletePost",(req,res)=>{

    const id = req.body.id;
    console.log("delete Post");
    const deleteQuery = `DELETE FROM b_feed WHERE feed_id='${id}' `;
    var result="";

    db.query(deleteQuery,(err,result)=>{
        console.log(err);
        console.log(result);    
        
        res.send(result);
    })
    
    
})


app.post("/getPosts",(req,res)=>{
    const selectQuery = `SELECT * FROM b_feed`;
    var result="";

    db.query(selectQuery,(err,result)=>{
        console.log(err);
        console.log(result);    
        
        res.send(result);
    })
    
    
})

app.post("/insertPost",(req,res)=>{
    const insertQuery = "INSERT INTO `b_feed`(`username`, `info`) VALUES (?,?)"
    
    const username = req.body.username;
    const info = req.body.info;

    console.log(username);
    console.log(info);

    db.query(insertQuery,[username,info],(err,result)=>{
        console.log(err);
    })
    send = JSON.stringify({"username":username,"Info":info});
    res.end(send);

})

app.post("/getPassword",(req,res)=>{
    const id = req.body.name;
    const email = req.body.email;
    const selectQuery = `SELECT * FROM b_user WHERE b_user.username = '${id}' and b_user.email = '${email}'`;


    var flag = "";
    db.query(selectQuery,(err,result)=>{
        
        console.log(result);
        console.log(err);
        if(result != undefined){
            flag = result;

            // print(flag["password"]);
        }
        
        res.send(result);
    })
})

app.post("/",(req,res)=>{
    const insertQuery = "INSERT INTO `b_user`(`username`, `email`, `password`) VALUES (?,?,?)"
    
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(username);
    console.log(email);
    console.log(password);

    db.query(insertQuery,[username,email,password],(err,result)=>{
        console.log(err);
    })
    res.send("Data Inserted");
    // res.end("er");

})

app.listen(3001,()=>{
    console.log("Server Started for database Handler at 3001");
})
