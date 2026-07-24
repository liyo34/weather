import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export const weatherService = {
  getCurrentWeather: async (city) => {
    try {
      const response = await axios.get(`${API_URL}/api/weather/${city}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },

  getForecast: async (city) => {
    try {
      const response = await axios.get(`${API_URL}/api/forecast/${city}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  },
}; 