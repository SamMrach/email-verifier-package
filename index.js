const axios = require('axios');

class EmailVerifier {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://email-verifier23.p.rapidapi.com/email-verify';
    this.host = 'email-verifier23.p.rapidapi.com';
  }

  async verifyEmail(email) {
    const options = {
      method: 'POST',
      url: this.baseUrl,
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.host,
        'Content-Type': 'application/json'
      },
      data: { email }
    };

    try {
      const response = await axios.request(options);
      return response.data.is_valid;
    } catch (error) {
      console.error('Error verifying email:', error);
      throw error;
    }
  }
}

module.exports = EmailVerifier;
