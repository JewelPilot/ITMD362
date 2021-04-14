
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function ValidationEvent() {
   var a = document.forms["fone"]["first_name"].value;
   var b = document.forms["fone"]["last_name"].value;
   var c = document.forms["fone"]["email"].value;
   var d = document.forms["fone"]["phone-num"].value;
   var e = document.forms["fone"]["dob"].value;
   if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
     alert("Please enter appropriate Info in all the spaces provied.");
   }
   else{
     alert("Thank you.Your information has been received");
   }
 }
