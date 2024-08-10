let handSecond = document.querySelector(".second");
let handMinute = document.querySelector(".minute");
let handHour = document.querySelector(".hour");
let body = document.querySelector("body");
modeSwitch=document.querySelector('.mode-switch');
if(localStorage.getItem("mode") === "Dark Mode"){
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode";
    }

modeSwitch.addEventListener('click',()=>{


    
    body.classList.toggle("dark");

    const isModeDark= body.classList.contains('dark');
    modeSwitch.textContent = isModeDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isModeDark ? "Dark Mode" : "Light Mode");
})


function repete(){


const now = new Date();


let rotateAngleSecond = (now.getSeconds() /60) * 360;
let rotateAngleMinute= (now.getMinutes()  /60) * 360;
let rotateAngleHour= ((now.getHours()/12) *360) + (now.getMinutes() / 2);


handMinute.style.rotate=rotateAngleMinute + "deg";
handSecond.style.rotate=rotateAngleSecond + "deg";
handHour.style.rotate=rotateAngleHour + "deg";

}


repete();
setInterval(repete,1000)


