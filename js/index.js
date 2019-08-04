(function(){
 //向localhost:3000/index发送请求，获得数据
 $.ajax({
    url:"http://localhost:3000/index",
    type:"get",//请求类型
    //无请求参数
    dataType:"json"//返回值类型
  })//.then中的函数会在请求结束后，自动执行
  //        open(result)
  //               ↓
  .then(function(result){
    // console.log(result);
   //先取出结果数组中第一个商品
    var p1=result[0];
   //将p1的属性，填充进HTML片段中
   var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
   <div class="card-body d-flex flex-column align-items-start">
     <h5 class="d-inline-block mb-2">${p1.title}</h5>
     <h6 class="mb-5">
       <a class="text-dark" href="javascript:;">${p1.details}</a>
     </h6>
     <span class="text-primary">¥${p1.price.toFixed(2)}</span>
     <a class="btn btn-primary" href="${p1.href}">查看详情</a>
   </div>
   <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
 </div>`;
   $("#p1").html(html);
    var p2=result[1];
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="d-inline-block mb-2">${p2.title}</h5>
      <h6 class="mb-5">
        <a class="text-dark" href="javascript:;">${p2.details}</a>
      </h6>
      <span class="text-primary">¥${p2.price.toFixed(2)}</span>
      <a class="btn btn-primary" href="${p2.href}">查看详情</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p2.pic}" data-holder-rendered="true">
  </div>`;
  $("#p2").html(html);
    var p3=result[2];
    //将p3的属性填充到HTML片段中:
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-3">${p3.title}</h5>
    <span class="text-primary">${p3.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p3.href}">查看详情</a>
    </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${p3.pic}" data-holder-rendered="true">
    </div> `;
    $("#p3").html(html);
    var p4=result[3];
    //将p3的属性填充到HTML片段中:
    var html=`<div class="card border-0 text-center">
    <img class="card-img-top" src="${p4.pic}" alt="Card image cap">
    <div class="card-body p-0 pr-1 pl-1">
      <span class="d-inline-block">${p4.title}</span>
      <span class="text-primary small">${p4.price.toFixed(2)}</span>
      <a class="btn btn-sm btn-primary" href="${p4.href}">查看详情</a>
    </div>
  </div> `;
    $("#p4").html(html);
    var p5=result[4];
    //将p3的属性填充到HTML片段中:
    var html=`<div class="card border-0 text-center">
    <img class="card-img-top" src="${p5.pic}" alt="Card image cap">
    <div class="card-body p-0 pr-1 pl-1">
      <span class="d-inline-block">${p5.title}</span>
      <span class="text-primary small">${p5.price.toFixed(2)}</span>
      <a class="btn btn-sm btn-primary" href="${p5.href}">查看详情</a>
    </div>
  </div>`;
    $("#p5").html(html);
    var p6=result[5];
    var html=`<div class="card border-0 text-center">
      <img class="card-img-top" src="${p6.pic}" alt="Card image cap">
      <div class="card-body p-0 pr-1 pl-1">
        <span class="d-inline-block">${p6.title}</span>
        <span class="text-primary small">${p6.price.toFixed(2)}</span>
        <a class="btn btn-sm btn-primary" href="${p6.href}">查看详情</a>
      </div>
    </div>`;
    $("#p6").html(html);
  })
})()
