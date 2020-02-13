import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
@Input() movies : IMovie[];

  constructor(public service : MovieService) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }

}