var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var form = $('#form')
var fullName = $('#name')
var email = $('#email')
var genders = $$('input[name="gender"]')


form.addEventListener('submit', e => {
    e.preventDefault()
    validator()
})

function validator() {
    


    if (fullName.value === '') {
        errorMessage(fullName, 'chưa nhập tên đăng nhập ')
        $('#frames').style.background = 'yellow'
    } else {
        successMessage(fullName,'')
    }
    
    console.log(pass.value.leght);
    if (pass.value === '') {
        errorMessage(pass, 'Chưa nhập password')
        $('#frames').style.background = 'yellow'
    } else {
        successMessage(pass, '')
    }
    

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === '') {
        errorMessage(email, 'Không để trống email ')
    }else if (regex.test(email.value)) {
        successMessage(email,'')
    } else {
        errorMessage(email, 'Email không hợp lệ  ví dụ:"abc@gmail.com"')
    }
    
    

 
    if (!genders[0].checked && !genders[1].checked) {
        $('.gender').innerText = 'Phải chọn giới tính'
        $('#frames').style.background = 'red'
    } else {
        $('.gender').innerText = ''
        $('#frames').style.background = 'none'
        $('#frames').style.borderColor = 'green'
    }


    
    if (nationality.value == 0) {
        $('.nationality').innerText = 'Phải chọn quốc tịch'
        $('select').style.background = 'red'
    } else {
        $('.nationality').innerText = ''
        $('select').style.background = 'none'
        $('select').style.borderColor = 'green'
    }

  
    
}


function errorMessage(input, message) {
    var formGroup = input.parentElement
    var span = formGroup.querySelector('span')
    formGroup.className = 'form-group error'
    span.innerText = message
}


function successMessage(input, message) {
    var formGroup = input.parentElement;
    var span = formGroup.querySelector('span');
    formGroup.className = 'form-group success'
    span.innerText = message
} 