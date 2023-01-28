const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;

const userSchema = Schema({
    heading: { type: String },
    date: { type: String },
    comments: { type: String },
    file: { type: String },
    imageUrl: { type: String },
    description: {type : String} 
});

const Popular = mongoose.model("popular",userSchema)

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const PORT = process.env.PORT

app.get("/", (req,res)=>{
    res.send("<h1>admin panel</h1>")
})

app.get("/popular", (req, res) => {
    Popular.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(404).json({ message: err });
        }
    });
});

app.get("/popular/:id", (req, res) => {
    const { id } = req.params;
    Popular.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc);
            }
        } else {
            res.status(404).json({ message: err });
        }
    });
});
app.delete("/popular/:id", (req, res) => {
    const { id } = req.params;
    Popular.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(404).json({ message: err });
        }
    });
});



app.post("/popular", (req, res) => {
    const cardes = new Popular({
        heading: req.body.heading,
        date: req.body.date,
        comments: req.body.comments,
        file: req.body.file,
        imageUrl: req.body.imageUrl,
        description: req.body.description
      }) 
    cardes.save()
    res.send({ message: " Succesfully added" });
  });

mongoose.set('strictQuery', false)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
    }
    app.listen(PORT,()=>{
        console.log("Server Started");
    })
})

