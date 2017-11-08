module.exports = {
  sourceByTop(source) {
    return 'https://newsapi.org/v1/articles?source='
      + source
      + '&sortBy=top&apiKey='
      + process.env.API_KEY; //set API key via environment or dotenv file
  }
}
