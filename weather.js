const apiURL = "https://api.weatherapi.com/v1/current.json?key=c4d52df6647b4faeb2823012252404&q=Cancun&aqi=no";
fetch(apiURL)
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(data => {
        var weatherInfo = data;
        temp.innerHTML = weatherInfo.current.temp_c;
        icon.src = "https:" + weatherInfo.current.condition.icon;
    })
    .catch(error => {
        console.error("Error:", error);
    });