 const BASE_URL = 'https://pixabay.com/api/?';
 const API_KEY = 'key=32918808-7bed14219e5e11c2127636ebd';

export const getImg = (searchText) => {
    return fetch(`${BASE_URL}${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&per_page=12`)
}

