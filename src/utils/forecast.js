const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7d41ea583a3a5d5bb44d2ad6e43afe71&query=${latitude},${longitude}&units=m`
    
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                message: `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}`
            })
        }
    })
}

module.exports = forecast