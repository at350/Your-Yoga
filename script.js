const breakT = [5,10,15,20,25];
const breakLeast = 5;
const breakMax = 25;
// const poseT = [25,30,35,40,45];
const poseT = [3]; // change at the end to the other poseT (amt of time doing pose)
const poseLeast = 25;
const poseMax = 45;
let timeList = [];

let isBreak = false;

const submitbtn = document.querySelector('submitbt');
const chair = document.querySelectorAll('input[name = "has_chair"'); 
const time = document.getElementById("mins");
const intensity =  document.querySelectorAll('input[name = "intensity"');

// const form = document.querySelector('.inputform');
// form.addEventListener('submit', (e) => {
//     const minutes = document.getElementById("mins");
    
// })

let params = new URLSearchParams(window.location.href);
let userInput;
if (params.user_time) numSeconds = params.user_time[0]*60;
else numSeconds = 5*60;

console.log(`Num seconds is ${numSeconds}`)

for (let i=0; i<userInput;) {
    let time = 0;
    let index;
    if (isBreak) {
        if (breakLeast <= userInput-i && userInput-i <= breakMax)
        {
            timeList.push(userInput-i);
            break;
        }
        else {
            index = Math.floor(Math.random()*breakT.length);
            time = breakT[index];
        }
        isBreak = !isBreak;
    }
    else {
        if (poseLeast <= userInput-i && userInput-i <= poseMax) {
            timeList.push(userInput-i)
            break;
        }
        else {
            index = Math.floor(Math.random()*poseT.length);
            time = poseT[index];
        }
        isBreak = !isBreak;
    }
    timeList.push(time);
    i+=time;
}

isBreak = false;

const yogaPos = document.querySelector('h1');
const timeRemain = document.querySelector('h2');
const yogaImg = document.querySelector('img');

let counter = 5;
const initTimer = setInterval(()=> {
    timeRemain.innerText = `Starts in ${counter} seconds`
    counter--;
    if (counter<0) {
        clearInterval(initTimer);
        showYoga(0);
    }
}, 1000);

let showYoga = function(start) {
    counter = timeList[start];
    if (isBreak) yogaPos.innerText = 'BREAK TIME';
    else yogaPos.innerText = 'THE YOGA POSITION';
    const timer = setInterval(() => {
        timeRemain.innerText = `Time Remaining: ${counter}`
        counter--;
        if (counter<0)
        {
            isBreak = !isBreak;
            if (start!=timeList.length) showYoga(start+1);
            else endYoga();
            clearInterval(timer);
        }
    }, 1000);
}




let endYoga = () => {

};

// for (let i=0; i<timeList.length; i++) {
//     if (isBreak) {

//     }
// }



// for (int i=0; i<timeList.length; i++) {

// }