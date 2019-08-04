$(function(){
  $.ajax({
   url:"header.html",
   type:"get",
   success:function(res){
       $(res).replaceAll("header");
       //动态创建link元素，引入header.css，自动添加到<head>元素中
       $(` <link rel="stylesheet" href="css/header.css">`).appendTo("head");
   }
  })
})