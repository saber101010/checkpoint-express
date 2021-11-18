const express = require ('express');
const path = require ('path')
const app = express();
const port =3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/index1", (req, res) => {
    res.render("index", { msg: "template engine" });
  });
  app.get("/style1.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/style1.css"));
  });

const logger=(req,res,next)=>{
    const today=new Date()
    if (today.getDay()===0||
    today.getDay()===6||
    today.getHours() > 17||
    today.getHours()  < 9
    )
    {
   res.sendFile(path.join(__dirname,'/404/index.html'))}
    next()
    }
app.use(logger)


app.use(express.static('public'))


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/index.html'))
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/public/ContactUs'))
// })
// app.get('/services',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/public/OurServices'))
// })

app.listen(port,()=>console.log(`server runing on port ${port}`))