// create api of login and 
// signup api : username and password frontend se fetch krega and database me store krlega
//post method takes url and method includes request and response
//npm i mongoose package installed
//username and passwords are columns
//Install npm i nodemon
//Make changes in package.json , write dev: "nodemon index.js"    , use npm run dev for starting

// const express = require('express')
// const app = express()
// const port = 4000
// co
// const mongoose = require('mongoose');
// const multer = require('multer')

// mongoose.connect('mongodb://localhost:27017');   //database connection // connect method takes 2 things url and callback

// const Users = mongoose.model('Users', { username: String , password: String });    //creating a table model


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/signup'), (req , res) =>{
//    // const username = req.body.username;
//    // const password = req.body.password;
//     const user = new Users({username : "Kriti" , password: "pass"});             //new user entry
//     user.save().then(() => console.log('saved'));                              //entry saved
// }

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//npm start

const express = require("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


app.use('/uploads', express.static(path.join( __dirname, 'uploads')));
app.use(cors());
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/test");
//employee is the name of the database we have created in mongo db compass

const Users = mongoose.model("Users",{  //Creating table or model
  username:String ,
  mobile:String ,
  email:String ,
  password: String,
  sid: String,
  hostel: String,
  course: String,


  likedProducts : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products'}] //to store product id
});

const Products = mongoose.model("Products", {
   pname: String,
    pdesc: String ,
    price:String ,
    category: String, 
    pimage: String ,
    addedBy: mongoose.Schema.Types.ObjectId });

app.get("/", (req,res) =>{
  res.send("My API")
})



// Define the schema for the feedback
const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  suggestion: { type: String }
});
// Create the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;


app.post('/feedback', (req, res) => {
  const rating = req.body.rating;
  const suggestion = req.body.suggestion;

  // Assuming you have a model for feedback, create a new instance of the Feedback model
  const newFeedback = new Feedback({ rating: rating, suggestion: suggestion });

  newFeedback.save()
    .then(() => {
      res.send({ message: 'Feedback saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving feedback:', error);
      res.status(500).send({ message: 'Server error' });
    });
});



app.post('/like-product', (req, res) =>{
   let productId = req.body.productId;
   let userId =  req.body.userId;
   console.log(req.body);
   

   Users.updateOne({ _id: userId }, { $addToSet : { likedProducts : productId }})
   .then(() => {
    res.send({ message: 'Liked success'})
   })
   .catch(() =>{
    res.send({ message: 'server err'})
   })
} )

app.post('/dislike-product', (req, res) =>{
  let productId = req.body.productId;
  let userId =  req.body.userId;
  console.log(req.body);
  Users.updateOne({ _id: userId }, { $pull : { likedProducts : productId }})
  .then(() => {
   res.send({ message: 'Disiked success'})
  })
  .catch(() =>{
   res.send({ message: 'server err'})
  })
} )
app.get('/search',(req, res) =>{
  let search = req.query.search;

  Products.find({ 
    $or: [
      { pname: {$regex: search}},
      { pdesc: { $regex: search}},
      { price: { $regex: search}},
    ]
  })
  .then((results) => {
    
    res.send({ message: "success" , products: results})

  })
  .catch((err) => { 
    res.send({message: "Server error"})
  })
}
)

app.post('/add-product',upload.single('pimage') ,(req , res)=>{
  // console.log(req.body);
  // console.log(req.file.path);
   const pname = req.body.pname;
   const pdesc = req.body.pdesc;
   const price = req.body.price;
   const category = req.body.category;
   const pimage = req.file.path;
   const addedBy = req.body.userId;

  const product = new Products({ pname , pdesc, price, category, pimage , addedBy });
  product.save()
  .then(() => {
    res.send({message: 'Saved Sucessfully'})
  })
  .catch(() =>
  {
    res.send({ message: "Server error"})
  })

})

 app.get('/get-products',(req, res) =>{
  const catName = req.query.catName;
   let _f = {}

   if(catName){
      _f ={ category: catName}
   }
  Products.find(_f)
  .then((result) => {
    console.log(result, "user data")
    res.send({ message: "success" , products:result})

  })
  .catch((err) => { 
    res.send({message: "Server error"})
  })
}
)



app.get('/my-products',(req, res) =>{
  const userId = req.body.userId;

  Products.find({ addedBy: userId })
  .then((result) => {
    
    res.send({ message: "success" , products: result})

  })
  .catch((err) => { 
    res.send({message: "Server error"})
  })
}
)

app.get('/get-product/:pId',(req, res) =>{
  console.log(req.params);

  Products.findOne({ _id: req.params.pId})
  .then((result) => {
    
    res.send({ message: "success" , product: result})

  })
  .catch((err) => { 
    res.send({message: "Server error"})
  })
}
)

app.post('/liked-products',(req, res) =>{
   Users.findOne({ _id: req.body.userId}).populate('likedProducts')
  .then((result) => {
    
    res.send({ message: "success" , products: result.likedProducts})
  })
  .catch((err) => { 
    res.send({message: "Server error"})
  })
}
)

app.post('/my-products',(req, res) =>{

  const userId = req.body.userId;

  Products.find({ addedBy: userId })
 .then((result) => {
   
   res.send({ message: "success" , products: result})
 })
 .catch((err) => { 
   res.send({message: "Server error"})
 })
}
)
//API of signup
app.post('/signup', (req, res) => {
  // console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const sid = req.body.sid;
  const hostel = req.body.hostel;
  const course = req.body.course;
  const user = new Users({ username: username, password: password , email, mobile, sid:sid, hostel: hostel , course:course });
  //Creating row or instance of table
  //saving the entries 
  user.save()
  .then(() => {
    res.send({message: 'Saved Sucessfully'})
  })

  .catch(() =>
  {
    res.send({ message: "Server error"})
  }
  )

})














app.get('/my-profile/:userId' , (req, res) =>{
   let uid = req.params.userId;

   Users.findOne({ _id: uid })
    .then((result) => {
      res.send({
        message: 'success', user:{
          email: result.email,
          mobile: result.mobile,
          username: result.username,
          hostel: result.hostel,
          course: result.course


        }
      })
    })
  .catch(() => {
    res.send({ message: 'server err'})
  })
})


app.get('/get-user/:uId' , (req, res) =>{
  const _userId = req.params.uId;

  Users.findOne({ _id: _userId })
   .then((result) => {
     res.send({
       message: 'success', user: { 
        email: result.email , 
        mobile: result.mobile ,
        username: result.username,
        hostel: result.hostel,
        course: result.course
      }})
   })
 .catch(() => {
   res.send({ message: 'server err'})
 })
})
//API of login




app.post('/login', (req, res) => {
  //console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  //const user = new Users({ username: username, password: password });
  //Finding/Matching data in the table with the help of username
  Users.findOne({ username: username})
    .then((result) => {
        console.log(result, "user data")
         if(!result)
    {
      res.send({message: 'User not found'})
    }else{

      if(result.password == password)
      {
        const token = jwt.sign({
          data: result
        }, 'MYKEY' , { expiresIn: '1h'});
        res.send({message: 'User Found Sucessfully' , token:token , userId: result._id})
      }

      if(result.password != password)
      {
        res.send({message: 'Wrong password'})

      }
    }
  })
  .catch(() =>
  {
    res.send({ message: "Server error"})
  })
})
//Routes
app.listen(4000, () =>
{
  console.log("server is running")
}
)


