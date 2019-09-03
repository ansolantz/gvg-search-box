
import axios from "axios";
import env from './../config/config.json';

console.log("API Key ", env.API_KEY)
class GavagaiAPI {

  constructor() {

    this.GavagaiAPI = axios.create({
      baseURL: "https://api.gavagai.se/v3/lexicon",
      withCredentials: false
    });
  }

  async getSimilarWords(lang, word) {

    let response = await this.GavagaiAPI
    .get(`/${lang}/${word}?apiKey=${env.API_KEY}&additionalFields=SEMANTICALLY_SIMILAR_WORDS`)
    return response;

    // return this.GavagaiAPI
    //     .get(`/${lang}/${word}?apiKey=${env.API_KEY}&additionalFields=SEMANTICALLY_SIMILAR_WORDS`)
    //     .then(response => {
    //       console.log(response);
    //       return response;
    //     })
  }

}

const gavagaiAPI = new GavagaiAPI();
export default gavagaiAPI ;
