import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {
  @Input() movies : IMovie[];

  constructor(public service : MovieService) { }

  ngOnInit() {
  }

}