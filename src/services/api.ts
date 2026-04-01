import type { MediaItem } from "../types";

const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`
  }
};

export const getTrending = async (): Promise<MediaItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/day?language=en-US`, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending media:", error);
    return [];
  }
};

export const getImageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export const GENRE_ID_MAP: Record<string, number> = {
  'Action': 28,
  'Drama': 18,
  'Comedy': 35,
  'Romance': 10749,
  'Horror': 27,
  'Sci-Fi': 878,
}

export const getMoviesByGenre = async (genreId: number): Promise<MediaItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${genreId}&language=en-US`, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching genre data:", error);
    return[];
  }
};

export const searchMedia = async (query: string): Promise<MediaItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search/multi?query=${query}&include_adult=false&language=en-US`, options);
    const data = await response.json();
    // Multi because it can return both movies and TV shows, so we filter to only include those types
    return data.results.filter((item: MediaItem) => item.media_type === 'movie' || item.media_type === 'tv');
  } catch (error) {
    console.error("Error searching media:", error);
    return[];
  }
};

export const getMediaDetails = async (type: string, id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${id}?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching details:", error);
    return null;
  }
};

export const getMediaCredits = async (type: string, id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${id}/credits?language=en-US`, options);
    const data = await response.json();
    return data.cast.slice(0, 10); // Because more than 10 cast members can be overwhelming, we limit it to the top 10
  } catch (error) {
    console.error("Error fetching credits:", error);
    return[];
  }
};