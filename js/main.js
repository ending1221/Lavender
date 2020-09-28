var s = skrollr.init();

$(window).scroll(function(evt){
  if($(window).scrollTop()>0){
    $(".navbar").addClass("chang_color");
  }else{
    $(".navbar").removeClass("chang_color");
  }
}); 