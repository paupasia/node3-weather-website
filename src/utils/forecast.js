const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8c703b0292642e570a05a84bee186f1e&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to cennect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      //console.log(body.current.data[0]);
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees out. It feels like  " +
          body.current.feelslike +
          " degrees out. " +
          "The wind speed today is " +
          body.current.wind_speed +
          " with the wind degree of " +
          body.current.wind_degree +
          "."
      );
    }
  });
};

module.exports = forecast;
