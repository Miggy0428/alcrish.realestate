import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '8b8ed1cf4bmsh098b9819446d695p1ed2a2jsn4b8352dadbd3'
    },
  });
    
  return data;
}