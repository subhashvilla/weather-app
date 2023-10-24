let inputele = document.getElementById("location-input")
let btnele = document.getElementById("btn")
let tempele = document.getElementById("temp-valuee")
let weatherele = document.getElementsByClassName("weather-info")[0]
let locationele = document.getElementsByClassName("location")[0]

const apiKey = '5cbba6b99b5340c9ca0b3a6d3b85c486';

btnele.onclick = function () {
    if (inputele.value == "")
        alert("please enter location")

    else {
        loc = inputele.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                const { name } = data
                const { feels_like } = data.main
                const { description } = data.weather[0]
                tempele.innerText = Math.floor(feels_like - 273);
                weatherele.innerText = description;
                locationele.innerText = name;

            })
            .catch(() => {
                alert("Invalid Details")
            })
        inputele.value = ""



    }
}

