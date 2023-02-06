module.exports = {
  sourceByTop(source) {
    return 'https://newsapi.org/v2/top-headlines?sources='
      + source
      + '&apiKey='
      + process.env.API_KEY; // Set API key via environment or dotenv file
  },
  countryByTop(country) {
    return 'https://newsapi.org/v2/top-headlines?country='
      + country
      + '&apiKey='
      + process.env.API_KEY; // Set API key via environment or dotenv file
  },
}
