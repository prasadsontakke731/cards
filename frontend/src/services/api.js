import axios from 'axios';

const API_URL = 'http://localhost:8080/cards';

export const fetchCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        return [];
    }
};