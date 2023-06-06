let cityData=[
    {name:"",lat:"",lon:""},
    {name:"阿姆斯特丹",lat:52.3676,lon:4.9041},
    {name:"布魯塞爾",lat:50.8476,lon:4.3572},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"巴頓魯治",lat:30.4515,lon:91.1871},
    {name:"新竹",lat:24.8138,lon:120.9675},
];

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect").append(`<option value='${x}'>${cityData[x].name}</option>`);
    }
    $("#citySelect").on("change",loadServerData);
});

function loadServerData(){
    $("#result").empty();
    if(this.value==0) return;
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="af67cf36d7fcaa5c9f9237c822ee2822";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data){
        $("#result").append(`<p>氣溫: ${data.main.temp_min}~ ${data.main.temp_max}</p>`);
        $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
    })
    .fail(function(){ console.log("Error");})
    .always(function(){ console.log("Always");});
}