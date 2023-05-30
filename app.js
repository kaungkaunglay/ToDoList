// require links 
const express = require("express");
const bodyparser = require("body-parser");

const app = express() ; 
var items = ["Buy Food", "Cood food", "Eat Food"]; 
app.set("view engine","ejs"); 
app.use(bodyparser.urlencoded({extended: true})) ;
app.get("/", function(req, res){
    var today = new Date(); 
    var options = {
        weekday : "long",
        day : "numeric",
        month: "long"
    }; 
    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{kindofday: day, new_list_item: items});
});
app.post("/", function(req, res){
    item = req.body.txtNum;
    items.push(item); 
    res.redirect("/");
});
app.listen("3000", function(){
    console.log("Server started on port 3000 ");
})