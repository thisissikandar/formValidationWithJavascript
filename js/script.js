const textInput = document.getElementById('text');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const showPassowrd = document.getElementById('show');
const btn = document.getElementById('btn');
const itemMenu = document.getElementById('menu');

const blankUsername = document.getElementById('blankUsername');
const blankPassword = document.getElementById('blankPassword');
const blankEmail = document.getElementById('blankEmail');

showPassowrd.addEventListener('click', function(e){
    e.preventDefault();
    if(showPassowrd.id === 'show'){
        passwordInput.setAttribute('type', 'text');
        showPassowrd.id = 'hide';
        showPassowrd.innerText = 'Hide';
    }else{
            passwordInput.setAttribute('type', 'password');  
            showPassowrd.id = 'show';
            showPassowrd.innerText = 'Show';
    }
})

passwordInput.addEventListener('copy', function(e){
    e.clipboardData.setData("text/plain", "copy is not allowed")
    e.preventDefault();
}, false)

btn.addEventListener('click', function(e){
   e.preventDefault(); 
     if(textInput.value === ''){
        textInput.style.border = '2px solid red';
        blankUsername.style.display='block';
     }else{
        const li = document.createElement('li');
        li.textContent = textInput.value;
        itemMenu.appendChild(li);
        console.log(textInput.value)
        textInput.value = '';
     }
     if(passwordInput.value === ''){
        passwordInput.style.border = '2px solid red';
        blankPassword.style.display='block';
     }else{
        if(passwordInput.value.length >= 8){
            console.log("passwordInput", passwordInput.value)
        }else{
            const li = document.createElement('li');
            li.textContent = passwordInput.value;
            itemMenu.appendChild(li);
            console.log(passwordInput.value)
            passwordInput.value = '';
        }
     }

     if(emailInput.value === ''){
        emailInput.style.border = '2px solid red';
        blankEmail.style.display='block';
     }else{
        if(emailInput.value.includes('@')){
            const li = document.createElement('li');
            li.textContent = emailInput.value;
            itemMenu.appendChild(li);
            console.log(emailInput.value)
            emailInput.value = '';
        }else{
            blankEmail.innerText='enter valid email';
            blankEmail.style.display='block';
            emailInput.style.border = '2px solid red';
            // console.log()
        }
     }
})
