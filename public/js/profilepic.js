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

var reminders = [
'Remember to not be ashamed of who you are!',
'Love yourself because you are enough',
'Treat others like you would want to be treated'
];


var random = document.querySelector('#random');

random.innerHTML = reminders[Math.floor(Math.random() * reminders.length)];
