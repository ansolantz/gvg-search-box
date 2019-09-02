const axios = require('axios');

test('API test', async () => {
    try {
        let response = await axios.get("https://api.gavagai.se/v3/lexicon/en/Hello?apiKey=3acdef1f01cbceb88b132158abd466da")
        console.log(response);
        expect(response).toBeDefined();
    } catch (error){
        console.log(error)
        fail("No response");
    }
  });