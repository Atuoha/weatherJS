//OBTAIN USER'S LOCATION

// const successfulLookup = position => {
//     const { latitude, longitude } = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&pretty=1&key=6694ceac1ead45258481ef4b7546cbd8`)
//       .then(response => response.json())
//       .then(console.log)
      
// }     

// window.navigator.geolocation
//   .getCurrentPosition(successfulLookup, console.log);




class Storage{
    constructor(){
        this.location;
        this.defaultLocation = 'Port Harcourt';
    }


    getLocationData(){
        if(localStorage.getItem('location') === null){
            this.location = this.defaultLocation;
        }else{
            this.location = localStorage.getItem('location');
        }
    
        return{
            location:this.location
        }

    }

    setLocationData(location){
        localStorage.setItem('location',location);
    }

}