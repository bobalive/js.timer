const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

// let date = new Date();

// console.log(date.getSeconds());

function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;


    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    // if(time.getHours() < 10) {
    //     hoursNum.innerHTML = '0' + time.getHours()
    // }else {
    //     hoursNum.innerHTML =  time.getHours()
    // }

    // if(time.getMinutes() < 10) {
    //     minNum.innerHTML = '0' + time.getMinutes()
    // }else {
    //     minNum.innerHTML =  time.getMinutes()
    // }

    setTimeout(() => clock(), 1000); /* Рекурсия - это когда функция внутри себя вызывает саму себя */

}

clock();



// setTimeout(() => {
//     console.log('asdad');
// }, 5000)

// setInterval(() => {
//     console.log('aqeqweqwe');
// }, 1000);

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');

// console.log(tabsItem.length);
// console.log(tabsContent.length);




tabsItem.forEach((item, i) => {
    item.addEventListener('click', function () {
        removeActiveClass()
        this.classList.add('active');
        tabsContent[i].classList.add('active');
    })
})



function removeActiveClass() {
    tabsItem.forEach((item, i) => {
        item.classList.remove('active');
        tabsContent[i].classList.remove('active');
    })
}

const stopWatch = document.querySelector('.stopwatch__btn'),
watchSec = document.querySelector('.stopwatch__seconds'),
watchMin = document.querySelector('.stopwatch__minutes'),
watchHour = document.querySelector('.stopwatch__hours');

let Sec = 0,
Min = 0,
Hour = 0,
interval

watchSec.innerHTML = add(Sec) ;
    watchMin.innerHTML= add(Min);
    watchHour.innerHTML= add(Hour);



stopWatch.addEventListener('click' , ()=>{
    if(stopWatch.textContent == 'start'){
        stopWatch.innerHTML = 'stop';
        clearInterval(interval)
        interval = setInterval(timeSet,1000);

    }else if(stopWatch.textContent == 'stop'){
        stopWatch.innerHTML = 'restart'
        clearInterval(interval)
    }else if (stopWatch.innerHTML == 'restart'){
        stopWatch.innerHTML = 'start';
        restart()
    }
})

    function add(a){
     if(a < 10){
        a = '0'+ a;
       }
    return a;
    }
function timeSet(){

    Sec++
    add(Sec);
    add(Min);
    add(Hour);
    if(Sec == 60){
        Sec = 0;
        Min = Min +1;
    }
    if(Min == 60){
        Min = 0;
        Hour = Hour +1;
    }
    watchSec.innerHTML = add(Sec) ;
    watchMin.innerHTML= add(Min);
    watchHour.innerHTML= add(Hour);
      
        
}

function restart(){
    Sec = 0;
    Min = 0;
    Hour= 0;
    watchSec.innerHTML = '00' ;
    watchMin.innerHTML= '00';
    watchHour.innerHTML= '00';
}




