
console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading...'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetchForecast(location)

})

const fetchForecast = (location) => {
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = `Something goes wrong ${data.error}`
                messageOne.textContent = ''
            } else {
                messageTwo.textContent = `In ${data.location} now ${data.forecast}`
                messageOne.textContent = ''
            }
        })
    })
}