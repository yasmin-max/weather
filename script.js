let iconw=['clear_day','sunny','cloud','rainy','weather_snowy'];
let request=new XMLHttpRequest();

function getWeather(){
    let cityname=document.getElementById('search').value;
    let Apikey='c20629fef4eb1131f36c2f9361612d21';
    request.open('get',`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}&units=metric`)
    request.onreadystatechange=function(){
        if(request.readyState===4 &&request.status===200){
            let data=JSON.parse(request.responseText);
            document.getElementById('city').textContent=`${data.name}`
            document.getElementById('temp').textContent=`${data.main.temp}`
            if(data.weather[0].main=='Clear'){
                document.getElementById('iconw').textContent=`${iconw[0]}`
            }
            else if(data.weather[0].main=='Rain'){
                document.getElementById('iconw').textContent=`${iconw[3]}`
            }
            else if(data.weather[0].main=='Clouds'){
                document.getElementById('iconw').textContent=`${iconw[2]}`
            }
            else if(data.weather[0].main=='Snow'){
                document.getElementById('iconw').textContent=`${iconw[4]}`
            }
            document.getElementById('temp_max').textContent=`${data.main.temp_max}`
        }
    }
    request.send();
}     