const now = new Date();

//This function will update the day
function updateDay() {
    const currentDay = document.getElementById('current-day');

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    days.forEach((day,index)=>{
        if(index == now.getDay()) {
    currentDay.textContent = day}
    })
    currentDay.style.fontWeight = "800"
}
updateDay();

//This funcyion will update the time
function updateTime() {
    const currentTime = document.getElementById('current-time');
const UTCtime = Date.now();
currentTime.textContent = UTCtime;
currentTime.style.fontWeight = "800"
}
setInterval(updateTime, 1)
updateTime()