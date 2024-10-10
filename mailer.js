var userName;
var userEmail;
var btnSend;

function init(){
    userName = document.getElementById('userName');
    userEmail = document.getElementById('userEmail');
    btnSend = document.getElementById('btnSend');

    btnSend.onclick = function() {
        emailjs.send("service_xa1fgk9","template_nypvj9s",{
            from_name: userName.value,
            email_id: userEmail.value,
        });

        userName.value = '';
        userEmail.value = '';
        btnSend.innerHTML = 'Successfully Subscribed !'
    }
}