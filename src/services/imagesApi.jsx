import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34311781-efd5fccfe1ca82ca08bcfd072';

function fetchApi (searchQuery, page = 1) {

	const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url)
  .then(response => {
    return response.data})
}

const api = {
	fetchApi,
};

export default api;