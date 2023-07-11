var nameerror= document.getElementById("name-error");
var hobbyerror= document.getElementById("hobby-error");
var locationerror= document.getElementById("citylocationerror");



function Fullname(){
    var x= document.getElementById("fullname").value;
    if(x.length==0){
        nameerror.innerHTML="Please add in your fullname ";
    }
    else{
        nameerror.innerHTML="Fullname is being added";
    }

    
    
   
    
}
function Hobby(){
    var y= document.getElementById("hobbyname").value;
    if(y.length==0){
        hobbyerror.innerHTML="Please add in your hobby name ";
    }
    else{
        hobbyerror.innerHTML="Hobbyname is being added ";
    }

    
    
   
    
}
 function Name(){
  var z = document.getElementById("location").value;
    if(z.length==0){
       locationerror.innerHTML="Please add in your location";
    }
   else{
        locationerror.innerHTML="Location is being added";
    } }


 

