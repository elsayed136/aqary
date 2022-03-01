import axios from "axios";

const API_KEY = "715055ee6amsh8e551a381062c2bp1e32adjsne1c6fa68fe9f";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  });

  return data;
};
