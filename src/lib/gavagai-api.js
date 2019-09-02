
import axios from "axios";
import env from './../config/config.json';

console.log("API Key ", env.API_KEY)
class GavagaiAPI {

  constructor() {

    this.GavagaiAPI = axios.create({
      baseURL: "https://api.gavagai.se/v3/lexicon",
      withCredentials: true
    });
  }

  getSimilarWords(lang, word) {
    return this.GavagaiAPI
        .get(`/${lang}/${word}?apiKey=${env.API_KEY}`)
        .then(response => {
          console.log(response);
        })
  }

}

const gavagaiAPI = new GavagaiAPI();
export default gavagaiAPI ;
