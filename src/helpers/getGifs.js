export const getGifs = async (category) => {
  const api_uri = 'api.giphy.com/v1/gifs/search';
  const limit = 10;
  const api_key = 'Bq2tAb37eTmTVsKJJLXUbRqNNNxV3Xd6';
  const url = `https://${api_uri}?q=${encodeURI(category)}&limit=${limit}&api_key=${encodeURI(api_key)}`;
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
