import { Genres } from '../class/genres';

export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;

    genres: Genres[];
    tagline: string;
}
