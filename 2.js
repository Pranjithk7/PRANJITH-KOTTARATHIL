//<script type="text/javascript">
function validate()
{ 
   if( document.StudentRegistration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textnames.focus() ;
     return false;
   }
   if( document.StudentRegistration.userid.value == "" )
   {
     alert( "Please provide your User-ID!" );
     document.StudentRegistration.userid.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.password.value == "" )
   {
     alert( "Please provide your Password!" );
     document.StudentRegistration.password.focus() ;
     return false;
   }
   if( document.StudentRegistration.address.value == "" )
   {
     alert( "Please provide your Address!" );
     document.StudentRegistration.address.focus() ;
     return false;
   }
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Sex: Male or Female" );
   return false;
   }   
if( document.StudentRegistration.Country.value == "-1" )
   {
     alert( "Please provide your Country!" );
     document.StudentRegistration.Country.focus() ;
     return false;
   }   
   if( document.StudentRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }   
   if( document.StudentRegistration.District.value == "-1" )
   {
     alert( "Please provide your Select Distric!" );
    
     return false;
   }   
   if( document.StudentRegistration.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
 if( document.StudentRegistration.Languages Known.value == "-1" )
   {
     alert( "Please provide your Select Languages Known!" );
     
     return false;
   }
function userid_validation(userid,mx,my)
{
var userid_len=userid.value.length;
 if( userid_len==0||userid_len>=my||userid_len<mx )
{
alert("length should be between"+mx" to "+my");
userid.focus();
return false;
}
return true;
}
function password_validation(password,mx,my)
{
var password_len=password.value.length;
 if( password_len==0||password_len>=my||password_len<mx )
{
alert("length should be between"+mx" to "+my");
password.focus();
return false;
}
return true;
}

   {
     alert( "Please provide your Select Languages Known!" );
     
     return false;
   }
   if( document.StudentRegistration.pincode.value == "" ||
           isNaN( document.StudentRegistration.pincode.value) ||
           document.StudentRegistration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.StudentRegistration.pincode.focus() ;
     return false;
   }
 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
  if( document.StudentRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }
  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}
//</script>