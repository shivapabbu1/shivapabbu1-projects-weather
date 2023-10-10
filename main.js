
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=f8761f1c6573a5e2475cd8e077b29f90


const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


 const API = `f8761f1c6573a5e2475cd8e077b29f90`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    
     return showWeather(data)
}

const showWeather = (data) => {
   
  
    weather.innerHTML = 
    ` <div class="col-temp col">
    <div class="icon">
    <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image">
    </div>
    <div>
         <p> ${data.main.temp_max} ℃</p>
        <p> ${data.weather[0].main} <p>
        <small>${data.name}</small>
    </div>
</div>
<div class="col">
           <div class="col-1" >
          <div class="humidity">
          <img src="./assets/Humidity.png" alt="">
          
           </div>
           <div>
           <p> ${data.main.humidity} %</p>
           <small>Humidity</small></div>
  </div>
    <div class="col">
            <div class="col-1" >
            
            <div class="pressure">
            <img src="./assets/pressure-512.png" alt="">
          </div>
          <div>
          <p> ${data.main.pressure} Pa </p>
             <small>Pressure</small></div>
             
         </div>
        

    <div class="col">
        <div class="col-1" >
        
        <div class="wind"> 
        <img src="./assets/Wind.png" alt="">
       
         </div>
         <div>
         <p> ${data.wind.speed} KM/H </p>
             <small>wind speed</small></div>
     </div>
`
}


form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        console.log(search.value)
        getWeather(search.value)
       
    }
)


