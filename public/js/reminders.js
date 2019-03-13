var reminders = [
'Remember to not be ashamed of who you are!',
'Love yourself because you are enough :)',
'Treat others the way you would want to be treated.',
'Take a deep breath - you got this!', 
'Take it easy - it is a hard day, not a hard life.',
'Be the change you wish to see in the world!',
'Your feelings are valid - never question that!'
];


var random = document.querySelector('#random');

random.innerHTML = reminders[Math.floor(Math.random() * reminders.length)];


var random = document.querySelector('#random');

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});



$(document).ready(function(){
  $(".btn1").click(function(){
    $("w3-container").hide();
  });
  $(".btn2").click(function(){
    $("w3-container").show();
  });
});


