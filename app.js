var express = require("express");
var app = express();

var request =  require("request");
app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("search");//search adlı sayfaya yönlendirme yapıyor
});



var server = app.listen(3000,function(){
  console.log("sunucu çalışıyor!");

});
