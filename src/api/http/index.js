import axios from 'api/http/axios-client'

class Http {
  constructor() {
    this.client = axios;
  }

  async get(url, config) {
    return this.client.get(url, config);
  }

  async delete(url, config) {
    return this.client.delete(url, config);
  }

  async post(url, data, config) {
    return this.client.post(url, data, config);
  }

  async put(url, data, config) {
    return this.client.put(url, data, config);
  }

  async patch(url, data, config) {
    return this.client.patch(url, data, config);
  }
}

export default new Http();
