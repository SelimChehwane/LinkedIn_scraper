const axios = require("axios"); //Makes the HTTP Requests for Node.js
const cheerio = require("cheerio"); //Library to Parse HTML
const readline = require("readline"); //Built-in Module to Read Command Line
const fs = require("fs"); //To Create the JSON File

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Reads User Input and Displays Them on the Console

rl.question("Enter the job title you want search for: ", (jobTitle) => {
  console.log(jobTitle);

  const url = `https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=${encodeURIComponent(
    jobTitle
  )}&location=Beirut&geoId=105606446&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0&start=5`;

  rl.close();
});
//Prompts the User for the Job Title and Inputs It into the URL as a Search Keyword

axios.get(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const jobs = $("li");

  jobs.each((index, element) => {
    const jobTitle = $(element)
      .find("h3.base-search-card__title")
      .text()
      .trim();
    const company = $(element)
      .find("h4.base-search-card__subtitle")
      .text()
      .trim();
    const location = $(element)
      .find("span.job-search-card__location")
      .text()
      .trim();
    const link = $(element).find("a.base-card__full-link").attr("href");
    const datePosted = $(element)
      .find("time.job-search-card__listdate")
      .attr("datetime");
  });
  //Selects Elements and Stores Them
  axios.get(link).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const description = $(
      "div.show-more-less-html__markup.relative.overflow-hidden"
    )
      .text()
      .trim();
  });
  //Selects Details from the Link from the URL
});
//Gets HTML Elements Parses Them with Cheerio and Selects List Elements
