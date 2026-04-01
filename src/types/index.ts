export interface MediaItem {
  id: number;
  title?: string;
  name?: string;                       // For TV shows, the title might be in 'name' instead of 'title'
  poster_path: string;
  vote_average: number;
  media_type: string;                  // 'movie' or 'tv'
  backdrop_path?: string;
  release_date?: string;
  first_air_date?: string;
}

export interface MediaDetails {
  id: number;
  title?: string;
  name?: string;
  overview: string; 
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  runtime?: number;
  episode_run_time?: number[];
  genres: { id: number; name: string }[];
}

export interface CastMember {
  id: number;
  name: string;
  profile_path: string | null; // Nedded null because some cast members might not have a profile picture
  character: string;
}