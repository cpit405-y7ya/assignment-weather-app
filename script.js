async function getWeather(city){

    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=6d8c737daa7b46a2a7762103242204&q=${city}&aqi=no`);
    const data = await result.json();

    if(result.ok){
        document.querySelector('.image').src = data.current.condition.icon.replace('64x64','128x128')
        document.querySelector('.temperature').textContent = data.current.temp_c
        document.querySelector('.city').textContent = `${data.location.country},${data.location.region},${data.location.name}`
        if(data.current.is_day){
            document.body.classList.remove('night')
            document.body.classList.add('day')
        }else{
            document.body.classList.remove('day')
            document.body.classList.add('night')
        }
        document.querySelector('.result').style.display = 'block'
    }
}