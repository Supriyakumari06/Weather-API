let weather={
    "api key":"13b014da81278fa3701e258643b55589",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this["api key"]+"&units=metric",
        ).then((response)=> response.json())
        .then((data)=>this.display(data))
        .catch((error)=>alert(`${city} is not a city name.`))
    },
display: function(data){
    const{name}=data;
const{icon,description}=data.weather[0];
const{temp,humidity}=data.main;
const{speed}=data.wind;
document.querySelector(".city").innerText="Weather in "+name;
document.querySelector(".temp").innerText="Temp: "+temp+"°C";
document.querySelector(".description").innerText=description.charAt(0).toUpperCase() + description.slice(1);;
document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
document.querySelector(".wind").innerText="Wind Speed: "+speed+"m/s";
document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
},
search: function(){
this.fetchWeather(document.querySelector(".search").value);
}
};
document.querySelector("#button").addEventListener("click",(e)=>{
    e.preventDefault();
    weather.search();
   document.querySelector(".search").value="";
})
document.querySelector(".search").addEventListener("keydown",(e)=>{
    if(e.key==='Enter'){
        e.preventDefault();
    weather.search();
    e.target.value="";
    }
})

