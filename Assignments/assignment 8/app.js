let uname = document.getElementById('user');
let pwd = document.getElementById('pass');
let form = document.getElementById('form');
let erruser = document.getElementById('err-msg-user');
let errpwd = document.getElementById('err-msg-pass');
let btn = document.getElementById('sub-btn');

btn.addEventListener('click', validate);

function validate(e) {
    if (uname.value === '' || pwd.value === '') {
        erruser.innerHTML = '<span class = "text-danger" > Please Enter a Username </span>';
        errpwd.innerHTML = '<span class = "text-danger" > Please Enter a Password </span>';
        alert('Enter Username/Password');
    } else {
        if (uname.value === 'Admin' && pwd.value === 'qwert') {

            alert('Login Successfull');
            uname.style.borderColor = green;
            pwd.style.borderColor = green;
        } else {
            alert('Wrong Username/Password');
            erruser.innerHTML = '<span class = "text-danger" > Please Enter a Valid Username </span>';
            errpwd.innerHTML = '<span class = "text-danger" > Please Enter a Valid Password </span>';
        }
    }
    e.preventDefault();
}