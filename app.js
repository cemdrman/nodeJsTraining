var express = require("express");
var app = express();

var request =  require("request");
app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("search");//search adlı sayfaya yönlendirme yapıyor
});

app.get("/results",function(req,res){
  var query = req.query.search; //search.ejs içerisindeki input name yani film adı gelecek
  var url = "https://api.themoviedb.org/3/search/movie?api_key=1b85f98471960da3a8159b93bf91d47e&quer=" + query;
  request(url,function(error,resonce,body){
    if (resonce.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(body);
      res.render("results",{data:data});
    }else{
      res.render("404"); //hata alırsak
    }
  });



});


var server = app.listen(3000,function(){
  console.log("sunucu çalışıyor!");

});
