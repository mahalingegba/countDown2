let daybox=document.getElementById('day-box');
let hrbox=document.getElementById('hr-box');
let minbox=document.getElementById('min-box');
let secbox=document.getElementById('sec-box');
let yearField=document.getElementById('year-field');


let endDate=new Date(new Date().getFullYear()+1 ,0, 1,0,0);
let endTime=endDate.getTime();
yearField.innerHTML=endDate.getFullYear();
colors=["tomato","brown","chartreuse",'chocolate','pink','cyan','crimson','salmon','seagreen','blue','green','purple'];

function countDown(){
    let todayDate=new Date();
    let todayTime=todayDate.getTime();
    let remainingTime=endTime-todayTime;
    let oneMin=60*1000;
    let oneHr=60*oneMin;
    let oneDay=24*oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);
    
    if(endTime<todayTime){
        clearInterval(i);
        document.querySelector('.countdown').innerHTML=
        `<h1>CountDown Has Expired...</h1>`
    }

    else if(endTime<=todayTime){
        clearInterval(i);
          document.querySelector('.countdown').innerHTML=
        `<h1>HAPPY NEW YEAR...!!!🎉</h1>`
        

        setInterval(()=>{
            this.changeColor();
        },1000)
    }


    else{
        let daysLeft=Math.floor(remainingTime/oneDay);
        let hrsLeft=Math.floor((remainingTime%oneDay)/oneHr)
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        
        daybox.textContent = addZeroes(daysLeft);
        hrbox.textContent = addZeroes(hrsLeft);
        minbox.textContent = addZeroes(minsLeft);
        secbox.textContent = addZeroes(secsLeft);

        this.changeColor();
    }

}


function changeColor(){
let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
     document.getElementById('desc').style.color=color;
     yearField.style.color=color;
     daybox.style.color=color;
     hrbox.style.color=color;
     minbox.style.color=color;
     secbox.style.color=color;
    
}

let i = setInterval(countDown, 1000);
countDown();