// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function ValidationEvent() {
   var a = document.forms["form-one"]["first_name"].value;
   var b = document.forms["form-one"]["last_name"].value;
   var c = document.forms["form-one"]["email"].value;
   var d = document.forms["form-one"]["phone-num"].value;
   var e = document.forms["form-one"]["dob"].value;
   if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
     alert("Please enter appropriate Info in all the spaces provied.");
   }
   else{
     alert("Thank you.Your information has been received");
   }
 }
