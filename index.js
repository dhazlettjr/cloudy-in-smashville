
// require the request package
//Once you pass in a url, the request package returns a callback function with three arguments

const request = require('request');

//create a variable for the actualy key, the city and the url of the api request site
let apiKey = '7646dc8cdac6461b5b997f33f0a9c975';
let city = 'nashville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});

