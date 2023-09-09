// const currentDayOfTheWeek = document.getElementById('currentDayOfTheWeek')
// const currentUTCTime = document.getElementById('currentUTCTime')

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

const getUTCTiming = () => {
    const currentDate = new Date()
    const hour = currentDate.getUTCHours()
    const minutes = currentDate.getUTCMinutes()
    const seconds = currentDate.getUTCSeconds()
    const UTCTiming = `${hour}: ${minutes}: ${seconds}` 
}

currentDayOfTheWeek.innerHTML = getDayOfTheWeek()
currentUTCTime.innerHTML = getUTCTiming()
