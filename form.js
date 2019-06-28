var button = $('.input');
button.on("click",sayHello);

function sayHello(){
event.preventDefault();
var name = $('.name').val();
var ownername = $('.ownername').val();
var age = $('.age').val();
var message = $('.message');
var form = $('.main-content')
form.text('')
form.text(`Hi ${ownername}! Thank you for entering ${name} in Dogs4Dayz. We'll keep you updated on his/her requests `)

}
