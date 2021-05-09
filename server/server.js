
let express= require("express");
let bodyParser =  require('body-parser');
 require("./db/db");
 let Client= require("./db/client")





let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());





app.get("/",(req,res)=>{
   
    res.send("This work")
})
app.post("/client", async (req,res)=>{
    console.log(req.body);
    let client= new Client(req.body); 
    await client.save();
    
    let userlist= await Client.find();
    console.log(userlist[0]._doc);
    res.json(userlist);
    // res.json(client);
   

     
 })


 app.post("/deleteclient", async (req,res)=>{
     try {
         console.log(req.body);
         let targetUser = await Client.findOneAndDelete({
             clientname:req.body.clientname,
             clientorder:req.body.clientorder
         });
        
         console.log(targetUser);
         let userlist= await Client.find();
         console.log(userlist[0]._doc);
         res.json(userlist);
         
     } catch (e) {
        res.send(500, { error: e.message});
     }
   
   

     
 })




 app.post("/updateclient", async (req,res)=>{
     try {
        Client.findOneAndUpdate({ clientname:req.body.clientname}, {clientorder:req.body.clientorder}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        });
        let userlist= await Client.find();
        console.log(userlist[0]._doc);
        res.json(userlist);
       
     } catch (e) {
        res.send(500, { error: e.message});
     }
   
   
   

     
 })




app.get("/clientdata", async (req,res)=>{
    
    let userlist= await Client.find();
    console.log(userlist[0]._doc);
    res.json(userlist);

   })

   app.use(function(error, req, res, next){

    res.send(500, error);

})  


app.use(express.static('./build'));

app.listen(8080, function () {
    console.log("Start starting");
})
