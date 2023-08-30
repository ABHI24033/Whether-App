const apiKey = '537693ec72d9e495d8d422ab35317988';
const city = document.getElementById("input");


const cityName = document.querySelector(".city");
const cloudinfo = document.querySelector('#cloud-info');
const tempreature = document.querySelector('.tempreature')
const speed = document.querySelector('#speed');
const humidity = document.querySelector('#humidity');

const img = document.getElementById('img')


const fetchApi = async (NcityName) => {
    let ncity = undefined;
    NcityName !== undefined ? ncity = NcityName : ncity = 'Ranchi';


    const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ncity}&appid=${apiKey}`;

    const responce = await fetch(api);
    const data = await responce.json();

    if (responce.status == 404) {
        alert("City Not Found!!")
    } else {
        cityName.innerHTML = data.name;
        cloudinfo.innerHTML = data.weather[0].description;
        tempreature.innerHTML = data.main.temp + `<span><sup>o</sup>C</span>`;
        speed.innerHTML = data.wind.speed + ` km/h`;
        humidity.innerHTML = data.main.humidity + `%`;

        if (data.weather[0].main === "Clouds") {
            img.src = "./images/clouds.png";
        }
        if (data.weather[0].main === "Clear") {
            img.src = "./images/clear.png";
        }
        if (data.weather[0].main === "Rain") {
            img.src = "./images/rain.png";
        }
        if (data.weather[0].main === "Drizzle") {
            img.src = "./images/drizzle.png";
        }
        if (data.weather[0].main === "Mist") {
            img.src = "./images/mist.png";
        }
    }
}
// fetchApi()

function searchCity() {
    fetchApi(city.value);
}