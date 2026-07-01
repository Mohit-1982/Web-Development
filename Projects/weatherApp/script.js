const API_KEY = 'a98a4996f61f48f592052428262906';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const detailsDiv = document.querySelector('.city-div');
const labels = {
    name : 'City',
    country: 'Country',
    localtime: 'Local Time',
    temp_c: 'Temperature',
    humidity: 'Humidity',
    feelslike_c: 'Feels Like',
    wind_kph: 'Wind Speed',
    vis_km: 'Visibility'
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    detailsDiv.innerHTML = "";

    const city = input.value.trim();

    if (!city) {
        handleError("Please enter a city name");
        return;
    }
    getWeather(city);
    input.value = "";   
});

async function getWeather(city) {

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        addDetails(data);
    } catch(error) {
        handleError(error.message);
    }
}

function handleError(message) {
    detailsDiv.innerHTML = "";
    const err = document.createElement('p');
    err.textContent = message;
    err.classList.add('details');

    detailsDiv.append(err);
}

function addDetails(data) {
    const {
        location: {
            name,
            country,
            localtime
        },
        current: {
            temp_c,
            humidity,
            feelslike_c,
            wind_kph,
            vis_km
        }
    } = data;

    const obj = {
        name,
        country,
        localtime,
        temp_c,
        humidity,
        feelslike_c,
        wind_kph,
        vis_km
    };

    let fragments = document.createDocumentFragment();

    for (const key in obj) {
        const newEle = document.createElement('p');
        newEle.textContent = `${labels[key]}: ${obj[key]}`;
        newEle.classList.add('details');
        fragments.append(newEle);
    }

    detailsDiv.style.display = "flex";
    detailsDiv.append(fragments);
}