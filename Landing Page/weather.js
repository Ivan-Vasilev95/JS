window.addEventListener('load', () => {

    //longitute and lantitude variables
    let long;
    let lat;

    //dom ellemnts
    const temperature = document.querySelector('.tempreture');
    const weatherIcon = document.querySelector('.icon');


    //get current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            //weather api
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=98e4d521cd53947a859fa3330a36d4e3`;

            //fethc api data

            fetch(api)
                .then(response => {
                    //return data in json format
                    return response.json();
                })
                .then(data => {
                    const { temp } = data.main;
                    const { icon } = data.weather[0];

                    //set dom elements
                    temperature.textContent = Math.round(temp - 273.15) + " °C";
                    weatherIcon.innerHTML = `<img src=\"icons/${icon}.png\"/>`;
                })
        });

    }
});