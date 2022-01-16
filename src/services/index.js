export const ARTICLES_URL = "https://api.spaceflightnewsapi.net/v3/articles?";
export const AMOUNT_PARAM = "_limit=";
export const CONTAINS_PARAM = "_title_contains=";
export const SORT_PARAM = "_sort=";

export const fetchArticles = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error))
};
