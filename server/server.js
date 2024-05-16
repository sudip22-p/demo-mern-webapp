import cors from 'cors'
import bcrypt from 'bcryptjs'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import conn from './mongo.js'
import {Person} from './models/Person.js'

const app = express()//Creates an Express application instance.
app.use(express.json())//Parses incoming requests with JSON payloads
app.use(express.urlencoded({extended:false}))//Parses incoming requests with URL-encoded payloads
app.use(cors())//Enables Cross-Origin Resource Sharing (CORS) middleware, allowing the server to accept requests from other domains
const port = process.env.PORT

app.get('/',cors(), (req, res) => {
  
  res.send('Hello SUDIP!');
});
app.post('/register',async(req,res)=>{
  const form=req.body.form
  const data={
    fullName:form.fullName,
    email:form.email,
    password:form.password
  }
  try{
    //check if user already exist --if yes>res.send('exists');
    // if user not exist && data insert successs then >res.send('success');
    
  }catch(e){
    // if overall process failed then >
    res.send('fail');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});