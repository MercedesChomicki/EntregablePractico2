"use strict"

// LOADING
window.addEventListener('load', ()=>{
    console.log("entre");
})


let percent = document.querySelector('.percent');
let text = document.querySelector('.text');

let count = 5;
let loading = setInterval(animate, 50);
function animate() {
    if(count == 100){
        clearInterval(loading);
        text.textContent = "Completed";
    } else{
        count = count + 1;
        percent.textContent = count + '%'; 
    }
}

// NAV
let btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click', ()=>{
    document.getElementById('dropdown-content-menu').classList.toggle("show");
})

let btnAvatar = document.getElementById('btn-avatar');
btnAvatar.addEventListener('click', ()=>{
    document.getElementById('dropdown-content-avatar').classList.toggle("show");
})

// CARROUSELS-CARDS HOME

// carrousel 1

const gap = 5;

const carrousel1 = document.getElementById("carrousel-1"),
  content1 = document.getElementById("track-1"),
  item = document.getElementById("card"),
  next1 = document.getElementById("next-1"),
  prev1 = document.getElementById("prev-1");

next1.addEventListener("click", (e) => {
  carrousel1.scrollBy(widthItem + (widthItem/10) + gap, 0);
  if (carrousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - widthItem - gap <= carrousel1.scrollLeft + widthCarrousel) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carrousel1.scrollBy(-(widthItem + gap), 0);
  if (carrousel1.scrollLeft - widthItem - gap <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth - widthItem - gap <= carrousel1.scrollLeft + widthItem) {
    next1.style.display = "flex";
  }
});

let widthItem = item.offsetWidth;
let widthCarrousel = carrousel1.offsetWidth;
window.addEventListener("resize", e => (widthItem = item.offsetWidth, widthCarrousel = carrousel1.offsetWidth));
console.log(widthItem, widthCarrousel);

// carrousel 2

const carrousel2 = document.getElementById("carrousel-2"),
  content2 = document.getElementById("track-2"),
  next2 = document.getElementById("next-2"),
  prev2 = document.getElementById("prev-2");

next2.addEventListener("click", (e) => {
  carrousel2.scrollBy(widthItem + (widthItem/10) + gap, 0);
  if (carrousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - widthItem - gap <= carrousel2.scrollLeft + widthCarrousel) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carrousel2.scrollBy(-(widthItem + gap), 0);
  if (carrousel2.scrollLeft - widthItem - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - widthItem - gap <= carrousel2.scrollLeft + widthItem) {
    next2.style.display = "flex";
  }
});


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
   password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/   //la cual valida contraseñas de al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.   
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