
window.onload = function(){
  var curtime = new Date(),
  curmonth = curtime.getMonth()+1;

  if(curmonth <= 3 || curmonth >= 10){
    $("header").addClass("cold-season");
    $("#home-icon").removeClass("icon-red icon-to-blue");
    $("#home-icon").addClass("icon-blue icon-to-red");
  } else{
    $("header").addClass("hot-season");
  }
}
