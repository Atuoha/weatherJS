class UI{
    // constructor(){
    //     this.weather = weather;
    // }

    // Displaying Data in Html
    displayData(data){
        document.getElementById('w-location').innerHTML =  `${data.name} ${data.sys.country}`;
        document.getElementById('w-icon').setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById('w-desc').innerHTML =  `<b>Desc:</b> ${data.weather[0].description}`;
        document.getElementById('w-string').innerHTML = `${data.weather[0].main}`;
        document.getElementById('w-humidity') .innerHTML = `<b>Humidity:</b> ${data.main.humidity}%`;
        document.getElementById('w-feels-like') .innerHTML = `<b>Feels Like:</b> ${data.main.feels_like} F`;
        document.getElementById('w-pressure').innerHTML = `<b>Pressure:</b> ${data.main.pressure}&#x2118`;


        // document.getElementById('w-sea-level').innerHTML =  `<b>Sea Level:</b> ${data.weather[0].sea_level}`;
        document.getElementById('w-sunset').innerHTML = `<b>Sunset:</b> ${data.sys.sunset}`;
        document.getElementById('w-sunrise') .innerHTML =`<b>Sunrise:</b> ${data.sys.sunrise}`;
        document.getElementById('w-timezone') .innerHTML = `<b>Timezone:</b> ${data.timezone}`;
        // document.getElementById('w-grnd-level') .innerHTML = `<b>Ground Level:</b> ${data.main.grnd_level}`;

        document.getElementById('w-wind').innerHTML =  `<b>Wind:</b> Deg: ${data.wind.deg}&#xb0 Speed: ${data.wind.speed}v`;
        document.getElementById('w-cords').innerHTML = `<b>Latitude:</b> ${data.coord.lat}&#xb0 <b>Longitude:</b> ${data.coord.lon}&#xb0 `;
        document.getElementById('w-temp') .innerHTML =`${data.main.temp}&#8451`;
       

    }








    
    // SHOW MESSAGE IN UI
    showMsg(msg,className){
        // Obtain UI element for placement
    const leadPara = document.querySelector('.rounded');

    // clear Message so as to make it appear only once
    this.clearMsg();

    const div = document.createElement('p');
    div.className = `msg ${className}`;
    div.appendChild(document.createTextNode(msg));
    leadPara.appendChild(div);
    setTimeout(()=>{
        this.clearMsg();
    },3000);
    }

    // clear Message
    clearMsg(){
        const msg = document.querySelector('.msg');

        if(msg){
            msg.remove();
        }
    }




}