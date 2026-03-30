export interface MediaItem {
  id: number;
  title?: string;
  name?: string;                       // For TV shows, the title might be in 'name' instead of 'title'
  poster_path: string;
  vote_average: number;
  media_type: string;                  // 'movie' or 'tv'
}