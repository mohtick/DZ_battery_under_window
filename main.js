


let battery = document.querySelector('.battery');
let btn = document.querySelector('.btn');
let currCondition = 'cold';



btn.addEventListener('click', () => {
    if (currCondition === 'cold') {
        battery.classList.add('battery_hot');
        battery.classList.remove('battery_cold');
        btn.innerHTML = "turn off the battery";
        currCondition = 'hot';


    } else {
        battery.classList.add('battery_cold');
        battery.classList.remove('battery_hot');
        btn.innerHTML = "turn on the battery";
        currCondition = 'cold';
    }


});




