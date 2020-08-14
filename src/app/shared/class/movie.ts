import { IMovie } from '../interfaces/imovie';

export class Movie {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}
