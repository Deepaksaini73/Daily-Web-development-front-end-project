const girlsInfo = [
    { name: "Deepika Saini", age: 19, mobileNo: "0123456789", location: "1km away from you" },
    { name: "Priya Sharma", age: 22, mobileNo: "9876543210", location: "2km away from you" },
    { name: "Aditi Verma", age: 21, mobileNo: "9988776655", location: "3km away from you" },
    { name: "Neha Gupta", age: 23, mobileNo: "9123456789", location: "4km away from you" },
    { name: "Riya Mehta", age: 20, mobileNo: "9112345678", location: "5km away from you" },
    { name: "Anjali Singh", age: 24, mobileNo: "9876512345", location: "6km away from you" },
    { name: "Kavya Yadav", age: 25, mobileNo: "9123567890", location: "7km away from you" },
    { name: "Shreya Patel", age: 21, mobileNo: "9111223344", location: "8km away from you" },
    { name: "Ishita Joshi", age: 22, mobileNo: "9222333444", location: "9km away from you" },
    { name: "Nidhi Agarwal", age: 23, mobileNo: "9333444555", location: "10km away from you" },
    { name: "Pooja Reddy", age: 26, mobileNo: "9444555666", location: "11km away from you" },
    { name: "Sneha Roy", age: 20, mobileNo: "9555666777", location: "1km away from you" },
    { name: "Radhika Chauhan", age: 24, mobileNo: "9666777888", location: "13km away from you" },
    { name: "Tanya Kapoor", age: 22, mobileNo: "9777888999", location: "14km away from you" },
    { name: "Megha Jain", age: 23, mobileNo: "9888999000", location: "1km away from you" },
    { name: "Divya Malhotra", age: 25, mobileNo: "9999000111", location: "16km away from you" },
    { name: "Akansha Bansal", age: 21, mobileNo: "9110011223", location: "7km away from you" },
    { name: "Ritika Sharma", age: 19, mobileNo: "9221122334", location: "18km away from you" },
    { name: "Mona Sethi", age: 26, mobileNo: "9332233445", location: "1km away from you" },
    { name: "Shikha Dubey", age: 24, mobileNo: "9443344556", location: "2km away from you" },
    { name: "Pallavi Tiwari", age: 22, mobileNo: "9554455667", location: "1km away from you" },
    { name: "Surbhi Kaur", age: 23, mobileNo: "9665566778", location: "2km away from you" },
    { name: "Simran Dhawan", age: 24, mobileNo: "9776677889", location: "3km away from you" },
    { name: "Sanya Arora", age: 21, mobileNo: "9887788990", location: "2km away from you" },
    { name: "Bhavya Singh", age: 25, mobileNo: "9998899001", location: "5km away from you" },
    { name: "Avni Deshmukh", age: 26, mobileNo: "9119900112", location: "26km away from you" },
    { name: "Ruchi Mishra", age: 22, mobileNo: "9220011223", location: "2km away from you" },
    { name: "Naina Bhatt", age: 24, mobileNo: "9331122334", location: "18km away from you" },
    { name: "Ayesha Khan", age: 23, mobileNo: "9442233445", location: "9km away from you" },
    { name: "Alisha Tyagi", age: 19, mobileNo: "9553344556", location: "10km away from you" },
    { name: "Mitali Agarwal", age: 21, mobileNo: "9664455667", location: "31km away from you" },
    { name: "Jhanvi Saxena", age: 22, mobileNo: "9775566778", location: "32km away from you" },
    { name: "Nandini Joshi", age: 24, mobileNo: "9886677889", location: "3km away from you" },
    { name: "Muskan Verma", age: 23, mobileNo: "9997788990", location: "4km away from you" },
    { name: "Trisha Yadav", age: 25, mobileNo: "9118899001", location: "5km away from you" },
    { name: "Sakshi Pandey", age: 26, mobileNo: "9229900112", location: "6km away from you" },
    { name: "Ruchi Sharma", age: 22, mobileNo: "9330011223", location: "37km away from you" },
    { name: "Anushka Mehta", age: 24, mobileNo: "9441122334", location: "8km away from you" },
    { name: "Nisha Patel", age: 23, mobileNo: "9552233445", location: "3km away from you" },
    { name: "Swati Ghosh", age: 21, mobileNo: "9663344556", location: "12km away from you" },
    { name: "Parul Jain", age: 22, mobileNo: "9774455667", location: "4km away from you" },
    { name: "Krishna Desai", age: 19, mobileNo: "9885566778", location: "12km away from you" },
    { name: "Vidhi Rajput", age: 21, mobileNo: "9996677889", location: "13km away from you" },
    { name: "Jasmine Chauhan", age: 24, mobileNo: "9117788990", location: "4km away from you" },
    { name: "Nitika Batra", age: 25, mobileNo: "9228899001", location: "5km away from you" },
    { name: "Mahima Thakur", age: 23, mobileNo: "9339900112", location: "6km away from you" },
    { name: "Aarushi Gupta", age: 22, mobileNo: "9440011223", location: "7km away from you" },
    { name: "Sanya Verma", age: 24, mobileNo: "9551122334", location: "8km away from you" },
    { name: "Riya Sood", age: 19, mobileNo: "9662233445", location: "9km away from you" },
    { name: "Priti Das", age: 21, mobileNo: "9773344556", location: "5km away from you" }
];


let emoji=document.querySelector('.emoji img');


let check=0;


function askRelationshipStatus() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== "") {
        document.querySelector('.question h2').textContent = `Are you single, ${nameInput}?`;
        document.querySelector('.select').innerHTML = `
            <button onclick="areYouSingle('yes')" class="yes">Yes</button>
            <button onclick="areYouSingle('no')" class="no">No</button>
        `;
        document.querySelector('.btn').style.display = 'none';
        emoji.src='img/are you single.gif';
    }

}

function areYouSingle(answer) {
    if (answer === 'no') {
        emoji.src='img/already in relation ship.gif'
        document.querySelector('.question h2').textContent = "What is your partner's name?";
        document.querySelector('.select').innerHTML = `
            <input type="text" placeholder="e.g. Alex" class="input">`;
            document.querySelector('.btn').innerHTML=`<button type="button" onclick="wishCouple()">Submit</button>`;
            document.querySelector('.btn').style.display = 'block';

    }

     else {
        emoji.src='img/did you want always sinngle.gif'
        document.querySelector('.question h2').textContent = "Did you want always single";
        document.querySelector('.select').innerHTML = `
            <button onclick="didYouWantAlwaysSingle('yes')" class="yes">Yes</button>
            <button onclick="didYouWantAlwaysSingle('no')" class="no">No</button>`;
    }
}


function wishCouple(){
     document.querySelector('.question h2').textContent = `You have ${(Math.floor(Math.random()*10))*10} % probability to live together.`;
    document.querySelector('.select').innerHTML = `<p>did you want new girl friend</p>
                                                       <button onclick="didYouWantNewGirlFriend('yes')" class="yes">Yes</button>
                                                       <button onclick="didYouWantNewGirlFriend('no')" class="no">No</button>`;
    document.querySelector('.btn').style.display = 'none';


}
function didYouWantNewGirlFriend(answer){

    if(answer == 'yes'){
        emoji.src='img/waht type of girl.gif'
        document.querySelector('.question h2').textContent = "Okk. so what type of girl you like ...";
        document.querySelector('.select').innerHTML =`
            <button onclick="whatTypeOfGirl('beautifull')" class="girlType">Beautifull</button>
            <button onclick="whatTypeOfGirl('inteligent')" class="girlType">intelligent</button>
            <button onclick="whatTypeOfGirl('loyel')" class="girlType">Loyel</button>`;
    }
    else{
        document.querySelector('.question h2').textContent = "Okk. so Enjoy your current Relationship";
        document.querySelector('.select').innerHTML =``;
    }

}
function didYouWantAlwaysSingle(answer){
    if(answer == 'no'){
        emoji.src='img/waht type of girl.gif'
        document.querySelector('.question h2').textContent = "Okk. so what type of girl you like ...";
        document.querySelector('.select').innerHTML =`
            <button onclick="whatTypeOfGirl('beautifull')" class="girlType">Beautifull</button>
            <button onclick="whatTypeOfGirl('inteligent')" class="girlType">intelligent</button>
            <button onclick="whatTypeOfGirl('loyel')" class="girlType">Loyel</button>`;
    }
    else{
        emoji.src='img/a girl near you.gif';
        document.querySelector('.question h2').textContent = "No problem , but by the way a girl near you find a friend. Did you want to talk her. ";
        document.querySelector('.select').innerHTML =`
            <button onclick="didYouWantToTalk('yes')" class="yes">Yes</button>
            <button onclick="didYouWantToTalk('no')" class="no">No</button>`;
            document.querySelector('.btn').style.display = 'none';
    }
}

function whatTypeOfGirl(type){
    emoji.src='img/make new relationship.gif'
    document.querySelector('.question h2').textContent = `Okk. i find a ${type} girl for you. wait....`;
    document.querySelector('.select').innerHTML='';
    
    let x= Math.floor(Math.random()*49);
    setTimeout(function (){
    document.querySelector('.select').innerHTML=` <div class="girl-info">
                                                     <p>Name - ${girlsInfo[x].name}</p>
                                                     <p>age -${girlsInfo[x].age}</p>
                                                     <p> location - ${girlsInfo[x].location}</p>
                                                     <p>contact no. -${girlsInfo[x].mobileNo}</p>
                                                  </div>`;
                                                },2000)
}

function didYouWantToTalk(answer){
    if(answer == 'no'){

        emoji.src='img/not want to talk to any girl.gif';


        if(check==1){
            emoji.src='img/you are a gay.gif'
            document.querySelector('.question h2').textContent = `you are a gay`;
            document.querySelector('.select').innerHTML = ``;
        
        }

        else{

        document.querySelector('.question h2').textContent = `You are lying then let's Start again`;
        document.querySelector('.select').innerHTML='';
        document.querySelector('.btn').style.display = 'none';

        check=check+1;

        setTimeout(()=>{
            emoji.src='img/1 q.gif';
        document.querySelector('.question h2').textContent = `What is your name?`;
        document.querySelector('.select').innerHTML = `
                            <input type="text" id="nameInput" placeholder="e.g. Deepak Saini" class="input">`
                            document.querySelector('.btn').style.display = 'block';
                            ;},2500)
        }
    }
    else{
        emoji.src='img/sorry this is joke.gif'
        document.querySelector('.question h2').textContent = `Sorry , this is joke . you always lives Single`;
        document.querySelector('.select').innerHTML = ``;
    }
}