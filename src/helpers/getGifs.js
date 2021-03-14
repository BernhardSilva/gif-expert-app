export const getGifs = async (category) => {
  const api_uri = 'api.giphy.com/v1/gifs/search';
  const limit = 10;
  const api_key = '6gmRs6lTMlSgBxbHxyZecMCwVpEctKOS';
  const url = `https://${api_uri}?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
