
const axios = require("axios"); //Makes the HTTP Requests for Node.js
const cheerio = require("cheerio");//Library to Parse HTML
const readline = require("readline");//Built-in Module to Read Command Line
const fs = require("fs");//To Create the JSON File

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Reads User Input and Displays Them on the Console


rl.question("Enter the job title you want search for: ", (jobTitle) => {
  console.log(jobTitle)

  const url = `https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=${encodeURIComponent(jobTitle)}&location=Beirut&geoId=105606446&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0&start=5`;

 
  rl.close()})
//Prompts the User for the Job Title and Inputs it into the URL as a Search Keyword

 


