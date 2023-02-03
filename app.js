const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon.img')
const updateUI = (data) => {
    // const cityDets= data.cityDets;
    // const weather = data.weather;
    //destrucre 
    const { cityDets, weather } = data;


    details.innerHTML = `
          <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>`;

}

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {
        cityDets: cityDets,
        weather: weather,
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();
    //updatre the ui 
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});
