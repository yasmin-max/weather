let request=new XMLHttpRequest();
function getWeather(){
    let cityname=document.getElementById('search').value;
    let Apikey='c20629fef4eb1131f36c2f9361612d21';
    request.open('get',`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}&unets=metic`)
    request.onreadystatechange=function(){
        if(request.readyState===4 &&request.status===200){
            let data=JSON.parse(request.responseText);
            document.getElementById('details').innerHTML=`
            <h3>${data.name},${data.sys.country}</h3>
            <p>${data.main.temp}C</p>`
        }
    }
    request.send();
}     