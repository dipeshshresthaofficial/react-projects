import axios from 'axios';

// headers and parameters for API
const options = {
	params: {
        maxResults: 50,
    },
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY
	}
};

// accessing environment variables for VITE using "import.meta.<variable>"
export const fetchFromAPI = async (url) => {
    const response = await axios.get(`${import.meta.env.VITE_RAPID_API_BASE_URL}/${url}`, options);
    const data = response.data;
    return data;
}
