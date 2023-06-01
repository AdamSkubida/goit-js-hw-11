import axios from 'axios';

const API_KEY = '36950464-5a13f55b57e77fe0085f04ef4';

export function getURL({ query, page }) {
  const url = `https://pixabay.com/api/`;

  return axios.get(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 40,
    },
  });
}
