const axios = require("axios");
const fs = require("fs");

axios
  .get("https://ghibliapi.herokuapp.com/films")
  .then((response) => {
    console.log("Successfully retrieved our list of movies");
    let movieList = "";
    response.data.forEach((movie) => {
      movieList += `${movie["title"]}, ${movie["release_date"]}\n`;
    });

    return fs.writeFile("promiseMovies.csv", movieList);
  })
  .then(() => {
    return console.log("Saved our list of movies to promiseMovies.csv");
  })
  .catch((error) => {
    console.error(`Could not save the Ghibli movies to a file: ${error}`);
  });


  /* The verbosity of callbacks and promises come from the need to create functions when we have the result of an asynchronous task. A better experience would be to wait for an asynchronous result and put it in a variable outside the function. That way, we can use the results in the variables without having to make a function. We can achieve this with the async and await keywords. */