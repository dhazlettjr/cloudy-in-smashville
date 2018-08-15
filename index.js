// require the request package
// Once you pass in a url, the request package returns a callback function with three arguments

const request = require('request')

// create a variable for the actualy key, the city and the url of the api request site
let apiKey = '7646dc8cdac6461b5b997f33f0a9c975'
let city = 'nashville'
let state = 'tennessee'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if (err) {
    console.log('Something bad happened...', error)
  } else {

    // convert the api object into a javascript object using object notation
    let weather = JSON.parse(body)
    // access data using bracket/dot notation
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
    console.log(message)
  }
})
