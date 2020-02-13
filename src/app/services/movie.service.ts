import { Injectable } from '@angular/core';
import { IMovie } from '../movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: IMovie[] = [
    {
      title: 'A Series of Unfortunate Typos',
      releaseYear: 1992
    },
    {
      title: 'Toy Story',
      releaseYear: 1995
    },
    {
      title: 'The Secret Life of Walter Mitty',
      releaseYear: 2013
    },
    {
      title: 'Rush Hour',
      releaseYear: 1998
    },
    {
      title: '12 Angry Men',
      releaseYear: 1957
    },
  ];

  constructor(public service : MovieService) { }


getMovies(): IMovie[] {
  return this.movies;
}

}