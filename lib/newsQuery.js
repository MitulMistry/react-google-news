module.exports = {
  sourceByTop(source) {
    return 'https://newsapi.org/v2/top-headlines?sources='
      + source
      + '&apiKey='
      + process.env.API_KEY; //set API key via environment or dotenv file
  }
}
