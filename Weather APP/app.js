window.addEventListener('load', () => {
    //variables
    let long;
    let lat;
    //getting html class elements
    let temperatureDescription = document.querySelector('.tempreture-description');
    let temperatureDegree = document.querySelector('.tempreture-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let feelslike = document.querySelector('.feels-like');
    let locationIcon = document.querySelector('.weather-icon');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //proxy server if api doesnt allow localhost
            //const proxy='https://cors-anywhere.herokuapp.com/';



            //api using city + country
            //const api = `${proxy}http://api.openweathermap.org/data/2.5/forecast?q=Varna,bg&appid=98e4d521cd53947a859fa3330a36d4e3`;

            //api using longtitude and latitude
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=98e4d521cd53947a859fa3330a36d4e3`;

            //fetching api
            fetch(api)
                .then(response => {
                    //converting it to json format
                    return response.json();
                })
                //setting the needed data
                .then(data => {
                    console.log(data);
                    const { icon, main } = data.weather[0];
                    const { feels_like, temp } = data.main;

                    //set DOM elements from the api

                    //city + country
                    locationTimezone.textContent = data.name + " / " + data.sys.country;
                    //tempreture description
                    temperatureDescription.textContent = main;
                    //current tempreture in C
                    temperatureDegree.textContent = Math.round(temp - 273.15);
                    //how the current tepreture feels in C
                    feelslike.textContent = Math.round(feels_like - 273.15);
                    //weather icon
                    locationIcon.innerHTML = `<img src=\"icons/${icon}.png\"/>`;
                })
        });
    } else {
        h1.textContent = "Please enable geolocation";
    }
});