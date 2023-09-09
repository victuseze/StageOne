
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');

const getDayOfTheWeek = () => {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = new Date()
    const day = currentDate.getDay()
    const days = daysOfTheWeek[day]
    console.log(days)
    return days
}


const upDateTiming = () => {

    const getUTCTiming = () => {
        const currentDate = new Date()
        const hour = currentDate.getUTCHours()
        const minutes = currentDate.getUTCMinutes()
        const seconds = currentDate.getUTCSeconds()
        const milliseconds = currentDate.getUTCMilliseconds();
        const UTCTiming = `${hour}: ${minutes}: ${seconds}: ${milliseconds}` 
        currentUTCTime.innerHTML = UTCTiming
    }
    getUTCTiming()

    setInterval(getUTCTiming, 1000)
}
upDateTiming()

currentDayOfTheWeek.innerHTML = getDayOfTheWeek()
