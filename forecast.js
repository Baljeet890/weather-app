
const key = '8e22OKecnVjJA2mrJ5APuyr0dnNdD3gA';
///get city info

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    // console.log(query);
    //console.log(base);
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity('Delhi').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));

