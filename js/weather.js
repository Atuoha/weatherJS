class Weather{
    constructor(location){
        this.apiKey = '58e2f67f0e9e4a9e7dc3f0bf72c017cd';
        this.location = location;
        // this.state = 'us';
    }

    // Fetch Request from API

    async getWeather(){
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`);

        const weather = await weatherResponse.json();
        return weather;
    }

    // change Location method
     changeLocation(location){
        this.location = location;
        // this.state = state;
    }
}                                                                                                         


// To fetch both city and state use this 

// class Weather{
//     constructor(city,state){
//         this.apiKey = '58e2f67f0e9e4a9e7dc3f0bf72c017cd';
//         this.city = 'london';
//         this.state = 'us';
//     }

    // Fetch Request from API

    // async getWeather(){
    //     const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    //     const weather = await weatherResponse.json();
    //     return weather;
    // }

    // change Location method
//     changeLocation(city,state){
//         this.city = city;
//         this.state = state;
//     }
// }   