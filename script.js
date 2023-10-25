let inputele = document.getElementById("location-input");
let btnele = document.getElementById("btn");
let tempele = document.getElementById("temp-valuee");
let weatherele = document.getElementsByClassName("weather-info")[0];
let locationele = document.getElementsByClassName("location")[0];
let imgele = document.getElementById("icon");
const apiKey = '5cbba6b99b5340c9ca0b3a6d3b85c486';
let text;

function func(text) {
    if (text === 'overcast clouds') {
        imgele.innerHTML = `<img src="oc.png" alt="overcast clouds">`;
    } else if (text === "broken clouds") {
        imgele.innerHTML = `<img src="bc.png" alt="broken clouds">`;
    } else if (text === "mist") {
        imgele.innerHTML = `<img src="mist.png" alt="mist clouds">`;
    } else if (text === "haze") {
        imgele.innerHTML = `<img src="haze.png" alt="haze clouds">`;
    } else if (text === "clear sky" || text === "clearsky") {
        imgele.innerHTML = `<img src="clearsky.png" alt="clear sky">`;
    } else if (text === "few clouds") {
        imgele.innerHTML = `<img src="rainy.png" alt="rainy">`;
    } else {
        imgele.innerHTML = `<img src="cloudy.png" alt="sunny">`;
    }
}

btnele.onclick = function () {
    if (inputele.value === "") {
        alert("Please enter location");
    } else {
        const loc = inputele.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const { name } = data;
                const { feels_like } = data.main;
                text = data.weather[0].description.toLowerCase();
                tempele.innerText = Math.floor(feels_like - 273);
                weatherele.innerText = data.weather[0].description;
                locationele.innerText = name;
                func(text);
            })
            .catch(() => {
                alert("Invalid Details");
            });
        inputele.value = "";
    }
};
