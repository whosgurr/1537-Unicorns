const express = require('express')
const app = express()

app.listen(process.env.PORT || 5001, function (err) {
    if (err)
        console.log(err);
})

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
  extended: true
}));

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://comp1537:comp1537@unicorns.r5wge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

 {useNewUrlParser: true, useUnifiedTopology: true});
const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});


const unicornModel = mongoose.model("unicorns", unicornSchema);

app.post("/findUnicornByName", function (req, res) {
    console.log("request has been recieved")
    console.log(req.body.unicornName)
    
    unicornModel.find({name: req.body.unicornName}, function(err, unicorns){
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ unicorns);
        }
        res.send(unicorns);
    });
  
  })


  app.post("/findUnicornByWeight", function (req, res) {
    console.log("request has been recieved")
    console.log(req.body)
    console.log(req.body.lowerWeight)
    console.log(req.body.higherWeight)
    unicornModel.find({
        $and: [
            { weight: {$gt: req.body.lowerWeight}},
            { weight: {$lt: req.body.higherWeight}},
        ],
    },
    
    
    function(err, unicorns){
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ unicorns);
        }
        res.send(unicorns);
    });
  
  })

  app.post("/findUnicornByFood", function (req, res) {
    console.log("request has been recieved")
    console.log(req.body.appleIsChecked)
    console.log(req.body.carrotIsChecked)
    foodList=[]

    if (req.body.appleIsChecked == "checked")
        foodList.push("apple")

    if (req.body.carrotIsChecked == "checked")
        foodList.push("carrot")
    
    if (req.body.appleIsChecked == "checked" && req.body.carrotIsChecked == "checked")
        foodList.push("apple" && "carrot")

    unicornModel.find({
        loves: {
            $all: foodList
        }

    },
        function (err, unicorns) {
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ unicorns);
        }
        res.send(unicorns);
    });
  
  })

  app.post("/filterByNameWeight", function (req, res) {
    console.log("request has been recieved")
    console.log(req.body.nameIsChecked)
    console.log(req.body.weightIsChecked)
    nameList = []
    weightList = []

    if (req.body.nameIsChecked == "checked")
        nameList.push("name")

    if (req.body.weightIsChecked == "checked")
        weightList.push("weight")

    unicornModel.find({
        $and: [
        {name: req.body.unicornName},
        {weight: req.body.unicornWeight}],
    },

        function (err, unicorns) {
        if (err){
          console.log("Error " + err);
        }else{
          console.log("Data "+ unicorns.weight);
        }
        res.send(unicorns.weight);
    });
  
  })

app.use(express.static("./public"))
