import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://hb98779maa.execute-api.us-east-1.amazonaws.com/dev';

class CatalogService {
  static async getCatalog() {
    try {
      const response = await axios.get(`${API_BASE_URL}/catalog`);
      return response.data;
    } catch (error) {
      console.error('Error fetching catalog:', error);
      throw error;
    }
  }
}

export default CatalogService;
