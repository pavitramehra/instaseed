
function f_ex()
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/mod.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fex=");
}





function ex(exe)
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/mod.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("ex="+exe);
}








function f_kick()
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/mod.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fki=");
}


function kick(ki)
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/mod.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("ki="+ki);
}










function view(cd)
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/view.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cd="+cd);
}




function mod(cd)
{
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
     if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mod_team').innerHTML= xmlhttp.responseText;
    }

  }
xmlhttp.open("POST","https://ecellnsit.com/ajax/mod.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cd="+cd);
}
  
 function reg(vx)
 {
 if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;
    }
  }
 // var sub=<?php echo "'".$sub."'"; ?>;
xmlhttp.open("POST","https://ecellnsit.com/ajax/reg.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("vx="+vx);
 }





 function ratl(eid,type)
 {
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
   {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;
    }
  }
 // var sub=<?php echo "'".$sub."'"; ?>;
  xmlhttp.open("POST","https://ecellnsit.com/ajax/reg.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("eid="+eid+"&type="+type);
 }




 function rutl(eid,type)
 {
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
   {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz").style.display="none";
        


       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;
    }
  }
 // var sub=<?php echo "'".$sub."'"; ?>;
  xmlhttp.open("POST","https://ecellnsit.com/ajax/reg2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("eid="+eid+"&type="+type);
 }








function ref(e,x)
{
var keyPressed= e || window.event; 
 //var keyPressed = event.keyCode || event.which;
 //keyPressed.keyCode==13 ||
 if( x==1   || x==3 || x==2)
 {

   if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        
        
          document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
       //document.getElementById("answer").style.marginTop="125px";
       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      if(xmlhttp.responseText==2)
      {
        //document.getElementById("answer").style.marginTop="0px";
        document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
             document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Team Name already exist, please try some other name.</p>"

      }
      else if(xmlhttp.responseText==3)
      {
      // document.getElementById("answer").style.marginTop="0px";
         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
               document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Team Name too short.</p>"

      }
     else if(xmlhttp.responseText==4)
      {

         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
        document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>You have already registered for this event.</p>"

      }
      else if(xmlhttp.responseText==5)
      {

         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
        document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>You Have already registered as a Team Member</p>"

      }



      else
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;

    }
  }
 var ref= document.getElementById('ref');
 var clg= document.getElementById('clg');
 if(x==3)
 {
 var ref_code= document.getElementById('ref_code');
}



  if(clg.value=='')

 {
  clg.focus();
   document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Please Enter your College Name.</p>"
   return false;
 }

 if(ref.value!='')
 {
      if(ref.value.length<5)
      {
          ref.focus();
         document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Team name too Short.</p>"
      }
      else
      {
          xmlhttp.open("POST","https://ecellnsit.com/ajax/reg.php",true);
          xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

          if(x==3)
          {
            xmlhttp.send("ref="+ref.value+"&clg="+clg.value+"&ref_code="+ref_code.value);
          }
          else
          {
            xmlhttp.send("ref="+ref.value+"&clg="+clg.value);
          }
      
      }
 }
 else
 {
  ref.focus();
   document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Please Enter Team Name.</p>"
   return false;
 }




}

}


function ref2(e,x)
{
var keyPressed= e || window.event; 
 //var keyPressed = event.keyCode || event.which;
 if(keyPressed.keyCode==13 || x==1)
 {

   if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        
        
          document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";
       //document.getElementById("answer").style.marginTop="125px";
       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      if(xmlhttp.responseText==2)
      {
        //document.getElementById("answer").style.marginTop="0px";
        document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
             document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Invalid Team Code</p>"

      }
      else if(xmlhttp.responseText==3)
      {
      // document.getElementById("answer").style.marginTop="0px";
         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
               document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>All Slots for this team are full.</p>"

      }
     else if(xmlhttp.responseText==4)
      {

         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
        document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Team Leader cannot register as a team-member</p>"

      }
      else if(xmlhttp.responseText==5)
      {

         document.getElementById("loadbar_f").style.display="none";
        document.getElementById("quiz_f").style.display="inline";
        document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>You have already registered.</p>"

      }



      else
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;

    }
  }
 var ref= document.getElementById('ref');
  var ref= document.getElementById('ref');
 var clg= document.getElementById('clg');



  if(clg.value=='')

 {
  clg.focus();
   document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Please Enter your College Name.</p>"
   return false;
 }


 if(ref.value!='')
 {
  if(ref.value.length!=6)
  {
    ref.focus();
   document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Please enter 6 digit Team Code.</p>"
  }
 else
  {
  xmlhttp.open("POST","https://ecellnsit.com/ajax/reg2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("ref="+ref.value+"&clg="+clg.value);
  }
 }
 else
 {
  ref.focus();
   document.getElementById('result').innerHTML="<p class='ref bg-primary animated pulse infinite'>Please Enter Team Code.</p>"
   return false;
 }


}

}

function share()
{

   if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        
        
          document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";

       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;

    }
  }
 
 
  xmlhttp.open("POST","https://ecellnsit.com/ajax/reg.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("share=c");


}



function confirm()
{

   if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==1||xmlhttp.readyState==2||xmlhttp.readyState==3)
    {

        
        
          document.getElementById("loadbar_f").style.display="inline";
        document.getElementById("quiz_f").style.display="none";

       
    }
  else if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      
      document.getElementById('mainframe').innerHTML= xmlhttp.responseText;

    }
  }
 
 
  xmlhttp.open("POST","https://ecellnsit.com/ajax/reg2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("conf=c");


}



function cls()
{
  location.reload();
}
