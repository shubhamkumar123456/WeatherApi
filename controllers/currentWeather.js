const currentData = async (req, res) => {
  // res.send("thank you")
  try {
    let location = await req.body.name;
    let unit=await req.body.tempunit
    let unitName;
    if(unit==='metric'){
        unitName="celsius"
    }
   else if(unit==='imperial'){
        unitName="Fahrenheit "
    }else{
        unitName="Kelvin"
    }
    // console.log(location)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}&units=${unit}`;
    const response = await fetch(url);

    if (response.ok) {
      const weatherData = await response.json();
      console.log(weatherData);
      const temp = Math.round(weatherData.main.temp);
      const descrp = weatherData.weather[0].description;

      const sendData = {};
      sendData.temp = temp+" "+unitName;
      sendData.weather = descrp;
      sendData.location = location;
      sendData.feel = weatherData.main.feels_like;
      sendData.humidity = weatherData.main.humidity;
      sendData.windSpeed = weatherData.wind.speed;
      res.status(200).json(sendData);
    } else {
      res.status(404).send("data not found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  currentData,
};
