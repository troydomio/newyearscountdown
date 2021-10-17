
const daysHtml = document.getElementById('days');
const hoursHtml = document.getElementById('hours');
const minutesHtml = document.getElementById('minutes');
const secondsHtml =document.getElementById('seconds');

const newYears = '1 January 2022';

const countDown = () => {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysHtml.innerHTML = formatTime(days)
    hoursHtml.innerHTML = formatTime(hours)
    minutesHtml.innerHTML = formatTime(minutes)
    secondsHtml.innerHTML = formatTime(seconds)
}

const formatTime = (time) => {
    return time < 10 ? `0${time}`: time;
}


countDown();
setInterval(countDown,1000)