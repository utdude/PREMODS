function add_weblocker(){
$(document).ready(function(){
    
    var html = '<div class="weblockermain" style="width:100%;height:100vh;background:url(test.jpg);background-size:cover;"><center><div class="overlay overlay-login"><div class="container"><center><form><input type="text" placeholder="Username"><br><input type="password" name=""id=""placeholder="Password"><br><button type="submit">UNLOCK</button></form></center></div></div></center></div>';
    
    $("head").append('<link rel="stylesheet" href="../../assets/css/weblocker.css">');
        $("body").html(html);


    
    });
}