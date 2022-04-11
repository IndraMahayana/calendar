const calender = new Date()

const renderCalendar = () => {
    calender.setDate(1)

    const titleMonth = document.querySelector('.month')
    const titleYears = document.querySelector('.years')
    const boardDays = document.querySelector('.days')

    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    titleMonth.innerHTML = month[calender.getMonth()]

    const years = calender.getFullYear()
    titleYears.innerHTML = years

    const lastDays = new Date(calender.getFullYear(), calender.getMonth() + 1, 0).getDate()
    const lastDaysGet = new Date(calender.getFullYear(), calender.getMonth() + 1, 0).getDay()

    const firstDays = calender.getDay()
    const firstDaysget = new Date(calender.getFullYear(), calender.getMonth(), 0).getDate()
    const nextDays = 7 - lastDaysGet - 1

    var days = ''

    for (let x = firstDays; x > 0; x--) {
        days += `<div class="prev-date">${firstDaysget - x + 1}</div>`
    }

    for (let i = 1; i <= lastDays; i++) {
        if (i === new Date().getDate() && calender.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
    }
    boardDays.innerHTML = days
}

const monthLeft = document.querySelector('.month-left')
const monthRight = document.querySelector('.month-right')
const yearsLeft = document.querySelector('.years-left')
const yearsRight = document.querySelector('.years-right')

monthLeft.addEventListener('click', () => {
    calender.setMonth(calender.getMonth() - 1)
    renderCalendar()
})

monthRight.addEventListener('click', () => {
    calender.setMonth(calender.getMonth() + 1)
    renderCalendar()
})

yearsLeft.addEventListener('click', () => {
    calender.setFullYear(calender.getFullYear() - 1)
    renderCalendar()
})

yearsRight.addEventListener('click', () => {
    calender.setFullYear(calender.getFullYear() + 1)
    renderCalendar()
})

renderCalendar()