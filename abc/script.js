const formOpenBtn= document.querySelector('#form-open'),
home=document.querySelector('.home'),
formContainer = document.querySelector('.form-container'),
formCloseBtn= document.querySelector('.cancel'),
signUpBtn= document.querySelector('#signup'),
loginBtn= document.querySelector('#login'),
pwShowHide= document.querySelectorAll('.bi-eye-slash');

formOpenBtn.addEventListener('click',()=>home.classList.add("show"));
formCloseBtn.addEventListener('click',()=>home.classList.remove("show"));

signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
})
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
})

pwShowHide.forEach(icon=>{
    icon.addEventListener('click',()=>{
        let getPwInput =icon.parentElement.querySelector("input");
        if(getPwInput.type === 'password'){
            getPwInput.type ='text';
            icon.classList.replace("bi-eye-slash" , "bi-eye-fill")
        }
        else{
            getPwInput.type ='password';
            icon.classList.replace("bi-eye-fill" , "bi-eye-slash")
        }
    })
})

