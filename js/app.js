// Objects Init
const store = new Storage();

// getLocationData
const weatherLocation = store.getLocationData();

const weatha = new Weather(weatherLocation.location);
const ui = new UI;

// Calling getWeather during Dom load
document.addEventListener('DOMContentLoaded',getWeather);


document.getElementById('w-form').addEventListener('submit',(e)=>{
    const input = document.getElementById('city').value;

    if(input !== ''){
        weatha.changeLocation(input);
        getWeather();
        $('#locModal').modal('hide');

    }
    e.preventDefault();
})




// Call get Request method;
function getWeather(){
weatha.getWeather()
.then(data => {
    if(data.message === 'city not found'){
        ui.showMsg('Opps! Location is not recognised check spelling!','alert alert-danger');
    }else{
        ui.displayData(data);
        console.log(data);
    }
})
// .catch(err => console.log(err));
}


