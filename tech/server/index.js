const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "project",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 2,
    },
  })
);


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"parolamea123",
    database:"techcare",
});


app.post("/register", (req,res) =>{
     
    const email = req.body.emailform;
    const password = req.body.passwordform;
    const firstName = req.body.firstNameform;
    const lastName = req.body.lastNameform;
    

    bcrypt.hash(password, saltRounds,(err, hash)=>{
        if(err) {
            console.log(err);
        }
        db.query(
            "SELECT * FROM user WHERE email = ?",
            [email],
            (error,result) =>{
                if(error)
                console.log(error);
                if (result.length>0) {
                    res.send({error:"Email already exists"});
                } else {
                    db.query(
                        "INSERT INTO user (email,password,firstName,lastName) values (?,?,?,?)",
                        [email,hash,firstName,lastName],
                        (error,result) => {
                            if(error)
                            console.log(error);
                            else {
                                res.send({message : "Account has been created"})
                            }
                        }
                    )
                }
            }
        )
    })


    
});

app.post("/login",(req,res) =>{
     
    const email = req.body.emailform;
    const password = req.body.passwordform;
 
    db.query(
        "SELECT * from user where email=?",
        email,
        (error,result) =>{
            console.log(result);
            if(error){
            res.send({err: error});
            } 
            if(result){
            if(result.length >0 ) {
                bcrypt.compare(password,result[0].password, (error,response) =>{
                    if(response){
                        req.session.user = result;
                        // console.log(req.session.user);
                        res.send(result)
                    } else {
                        res.send({message: "Wrong username/password combination"})

                    }
                })
            }
            } else {
                res.send({message: "User doesn't exists"})
            }
        }
    )
});

app.get("/login",(req,res) =>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})
app.listen(5000, ()=>{
    console.log("server merge aici pe 5000");
})