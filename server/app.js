const express = require('express');
const cors = require('cors')
const Content = require('./config/Product');
const port = 3309;
require('./config/dbConn');
const User = require('./config/User')

const app = express();

//this is middleware
app.use(express.json());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("Hello Word");
// })

// app.post('/',(req,res)=>{
//     res.send('Post method executed')
// })

// app.put('/',(req,res)=>{
//     res.send('Put method executed')
// })

// app.delete('/',(req,res)=>{
//     res.send('delete method executed')
// })

// app.patch('/',(req,res)=>{
//     res.send('Update method executed')
// })
app.post('/signup', async(req,res)=>{
let user = new User(req.body);
  let result = await user.save();
     result = result.toObject();
     delete result.password;
     res.send(result);
})

app.post('/login',async (req,res)=>{
   if(req.body.password && req.body.email){
    const user = await User.findOne(req.body).select('-password')
    if(user){
        res.send(user)
    }
    else{
        res.send({result: "User not Found"})
    }
   }
   else{
    res.send({result: "User not Found"})
   }
})

app.post('/product', async(req,res)=>{
    let product = new Content(req.body);
    let result = await product.save();
    result = result.toObject();
    res.send(result);
})

app.get('/getData', async (req,res)=>{
     const data = await Content.find();
     if(data.length>0){
        res.send(data)
     }
     else{
        res.send({result: "No Data Avaliable"})
     }
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})