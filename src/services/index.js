export const ARTICLES_BY_AMOUNT = "https://api.spaceflightnewsapi.net/v3/articles?_limit="

export const fetchArticles = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error))
};
