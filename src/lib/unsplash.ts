import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

export const getUnsplashImage = async (query: string) => {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      perPage: 1,
      orientation: 'landscape',
    });
    
    if (result.errors) {
      console.error('Error fetching Unsplash image:', result.errors[0]);
      return null;
    }

    return result.response?.results[0]?.urls.regular || null;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
};
