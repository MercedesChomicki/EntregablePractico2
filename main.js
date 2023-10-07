"use strict"

// CARDS

const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    const height = card.clientHeight
    const width = card.clientWidth

    card.addEventListener('mousemove', (e)=>{
        const {layerX, layerY} = e
    
        const yRotation = (
            (layerX - width / 2) / width
        ) * 20
    
        const xRotation = (
            (layerY - height / 2) / height
        ) * 20
    
        const string = `
            perspective(500px)
            scale(1.1)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)`
        
        card.style.transform = string
    })
    
    card.addEventListener('mouseout', ()=>{
        card.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
    })
})

// IMG CARDS

const images = document.querySelectorAll('.img');
images.forEach((img)=>{

    img.addEventListener('mousemove', ()=>{
        img.previousElementSibling.style.display="block";

    })
    const cardsHover = document.querySelectorAll('.card-hover');
    cardsHover.forEach((cardHover)=>{
        cardHover.addEventListener('mouseout', ()=>{
            img.previousElementSibling.style.display="none";
        })
    })
})

// CARROUSEL CARDS


// function App(){}

//     window.onload = function(e){
//         let app = new App();
//         window.app = app; 
//     }

//     App.prototype.processingButton = function(e) {
//         const btn = e.currentTarget.parentNode;
//         const track = e.currentTarget.parentNode.getElementById('track');
//         const card = track.querySelectorAll('.card');
//         const cardWidth = card(0).offsetWidth;
//         const trackWidth = track.offsetWidth;
//         const listWidth = carrouselList.offsetWidth;
//         track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
//         btn.dataset.button == "btn-prev" ? prevAction(leftPosition, cardWidth, track) : nextAction(leftPosition, trackWidth, listWidth, cardWidth, track)
//     }

//     let prevAction = (leftPosition, cardWidth, track) => {
//         if(leftPosition > 0){
//             track.style.left = `${-1 * (leftPosition - cardWidth)}px`;
//         }
//     }

//     let nextAction = (leftPosition, trackWidth, listWidth, cardWidth, track) => {
//         if(leftPosition < (trackWidth - listWidth)){
//             track.style.left = `${-1 * (leftPosition + cardWidth)}px`;
//         }
//     }


// Carrousel de destacados - Home

/*let swiper = new Swiper(".mySwiper", {
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
})*/



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

//Validations

 const form = document.querySelector(".form");
 const inputs = document.querySelectorAll(".form input");

 let btnSubmit = document.querySelectorAll(".btn-submit");

function redirection(){
    location.href = "home.html";
    form.reset();
}

btnSubmit.forEach((btn)=>{
    btn.addEventListener('click', redirection);
})

const expressions = {
   password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/   //la cual valida contraseñas de al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.   
}

const fields = {
	password: false
}

const validateForm = (e)=>{
    switch(e.target.name){
        case "password":
            validateField(expressions.password, e.target, 'password');
			validatePassword2();
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
    location.href = "home.html";
    form.reset();

    if(fields.password){
        let successMsg = document.getElementById('success-msg').classList.add('success-msg-active');
        
		setTimeout(() => {
            successMsg.classList.remove('success-msg-active');
		}, 5000);
        

		document.querySelectorAll('.form-group-correct').forEach((icon) => {
			icon.classList.remove('form-group-correct');
		});
    } 
})


/*function App(){}

     window.onload = function(e){
                 let app = new App();
       window.app = app; 
   }

     App.prototype.processingButton = function(e) {
        const btn = e.currentTarget;
        const carrouselCards = e.currentTarget.parentNode;
         const track = e.currentTarget.parentNode.querySelector('#track');
        const card = track.querySelectorAll('.card');

         const cardWidth = card[0].offsetWidth;

         const trackWidth = track.offsetWidth;
         const listWidth = carrouselCards.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
       btn.dataset.button == "btn-prev" ? prevAction(leftPosition, cardWidth, track) : nextAction(leftPosition, trackWidth, listWidth, cardWidth, track)
    }

     let prevAction = (leftPosition, cardWidth, track) => {
        if(leftPosition > 0){
            console.log("entro 2") 
            track.style.left = `${-1 * (leftPosition - cardWidth)}px`;
        }
     }

     let nextAction = (leftPosition, trackWidth, listWidth, cardWidth, track) => {
       if(leftPosition < (trackWidth - listWidth)){
             track.style.left = `${-1 * (leftPosition + cardWidth)}px`;
         }
     }
*/


