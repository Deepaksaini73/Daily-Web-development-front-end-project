let input = document.querySelector(".input");
let btn = document.querySelector(".pass-btn");
const length = 12;

const uppperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const symbol = "~!@#$%^&*()_?`-";

const generatePassword = () => {
  let password = "";
  password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  input.value = password;

  btn.innerHTML = ` <i class="fa-solid fa-bolt-lightning"></i>Generate another password `;
};

function copyText() {
    input.select();
    input.setSelectionRange(0, 15);

    navigator.clipboard.writeText(input.value);
}