const title = document.querySelector("#title");
const description = document.querySelector("#description");
const photo = document.querySelector("#photo");
const date = document.querySelector("#date");
const author = document.querySelector("#author");

const dailyData = {};

const key = "aQcT0tdT2xYfex8UafdmS3HSoLQks6I2a8DAl5aV";

function getData(){
    let api = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            dailyData.title = data.title;
            dailyData.description = data.explanation;
            dailyData.photo = data.hdurl;
            dailyData.date = data.date;
            dailyData.author = data.copyright;
        })
        .then(function(){
            displayData();
        })
}

function displayData(){
    title.innerHTML = dailyData.title;
    description.innerHTML = dailyData.description;
    photo.src = dailyData.photo;
    date.innerHTML += dailyData.date;
    author.innerHTML += dailyData.author;
}
getData();