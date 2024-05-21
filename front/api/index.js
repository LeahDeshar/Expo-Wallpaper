import axios from "axios";

const API_KEY = "25623800-548c27f93aa0d8f5156955a67";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((keys) => {
    let value = keys == "q" ? encodeURIComponent(params[keys]) : params[keys];
    url += `&${keys}=${value}`;
  });
  console.log("final url", url);
  return url;
};
export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error) {
    console.error(error.message);
    return { success: false, msg: error.message };
  }
};
