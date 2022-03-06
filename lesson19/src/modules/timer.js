const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerNow = document.getElementById('timer-now');
    const timerRemaining = document.getElementById('timer-remaining');

    const weeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date(),
            timeRemainig = (dateStop - dateNow.getTime()) / 1000,
            days = Math.floor(timeRemainig / 3600 / 24),
            hours = Math.floor(timeRemainig / 3600),
            weekName = weeks[dateNow.getDay()];

        hours = hours < 10 ? '0' + hours : hours;
        days = days < 10 ? '0' + days : days;

        return {
            timeRemainig,
            days,
            weekName,
            dateNow
        };
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerDays.textContent = getTime.weekName;
        timerNow.textContent = getTime.dateNow.toLocaleTimeString("en-US");;
        timerRemaining.textContent = getTime.days;

        if (getTime.timeRemainig <= 0) {
            clearInterval(setInterval(updateClock, 1000));
            timerDays.textContent = '00';
            timerNow.textContent = '00';
            timerRemaining.textContent = '00';
        }
    }
    setInterval(updateClock, 1000)
    updateClock();
}

export default timer