"use strict"

document.getElementById("signUp").addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById("form-container-login").style.display="none";
    document.getElementById("form-container-signUp").style.display="flex";
});

document.getElementById("logIn").addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById("form-container-signUp").style.display="none";
    document.getElementById("form-container-login").style.display="flex";
});

// Validations
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form input");

const expressions = {
    password: /^.{4,12}$/ // 4 a 12 digitos.------------- FALTA CONTROLAR QUE TENGA MAYUSCULA, MIN, Y SIGNO
}

const fields = {
	password: false,
}

const validateForm = (e)=>{
    switch(e.target.name){
        case "password":
            validateField(expressions.password, e.target, 'password');
			// validatePassword2();
        break;
        case "password2":
            validatePassword2();
        break;
    }
}

const validateField = (expression, input, field) => {
	if(expression.test(input.value)){
		document.getElementById(`${field}-group`).classList.remove('form-group-incorrect');
		document.getElementById(`${field}-group`).classList.add('form-group-correct');
		document.querySelector(`#${field}-group i`).classList.add('fas');
        document.querySelector(`#${field}-group i`).classList.add('fa-check-circle');
		document.querySelector(`#${field}-group i`).classList.remove('fa-solid');
        document.querySelector(`#${field}-group i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#${field}-group`).classList.remove('form-group-error');
		document.querySelector(`#${field}-group .form-input-error`).classList.remove('form-input-error-active');
		fields[field] = true;
	} else {
		document.getElementById(`${field}-group`).classList.add('form-group-incorrect');
		document.getElementById(`${field}-group`).classList.remove('form-group-correct');
		document.querySelector(`#${field}-group i`).classList.add('fa-solid');
        document.querySelector(`#${field}-group i`).classList.add('fa-circle-exclamation');
		document.querySelector(`#${field}-group i`).classList.remove('fas');
        document.querySelector(`#${field}-group i`).classList.remove('fa-check-circle');
        document.querySelector(`#${field}-group`).classList.add('form-group-error');
		document.querySelector(`#${field}-group .form-input-error`).classList.add('form-input-error-active');
		fields[field] = false;
	}
}

const validatePassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`password2-group`).classList.add('form-group-incorrect');
		document.getElementById(`password2-group`).classList.remove('form-group-correct');
		document.querySelector(`#password2-group i`).classList.add('fa-solid');
        document.querySelector(`#password2-group i`).classList.add('fa-circle-exclamation');
		document.querySelector(`#password2-group i`).classList.remove('fas');
        document.querySelector(`#password2-group i`).classList.remove('fa-check-circle');
		document.querySelector(`#password2-group .form-input-error`).classList.add('form-input-error-active');
		fields['password'] = false;
	} else {
		document.getElementById(`password2-group`).classList.remove('form-group-incorrect');
		document.getElementById(`password2-group`).classList.add('form-group-correct');
        document.querySelector(`#password2-group i`).classList.remove('fa-solid');
        document.querySelector(`#password2-group i`).classList.remove('fa-circle-exclamation');
		document.querySelector(`#password2-group i`).classList.add('fas');
        document.querySelector(`#password2-group i`).classList.add('fa-check-circle');
		document.querySelector(`#password2-group .form-input-error`).classList.remove('form-input-error-active');
		fields['password'] = true;
	}
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(fields.password){
        formulario.reset();
        let successMsg = document.getElementById('success-msg').classList.add('success-msg-active');
		setTimeout(() => {
			successMsg.classList.remove('success-msg-active');
		}, 5000);

		document.querySelectorAll('.form-group-correct').forEach((icono) => {
			icono.classList.remove('form-group-correct');
		});
    }
})


// Carrousel de destacados - Home

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlices: true,
    slicesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth: 300,
        modifier: 1,
        rotate: 0,
        slideShadows: true,
        stretch: 200
    },
    navigation: {                       //navigation（arrows）
        nextEl: ".icon-next",
        prevEl: ".icon-prev",
    },
})


