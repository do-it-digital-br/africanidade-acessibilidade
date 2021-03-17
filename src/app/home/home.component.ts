import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public book: string| undefined;
  public page: string |undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.book) this.book = params.book;
      if (params.page) this.page = params.page;
    })
  }

  public get albumCoverImg(): string {
    if (!this.book) return '';
    
    return `/assets/images/albums/${this.book}.jpeg`;
  }

  public get audioSrc() : string {
    if (!this.book || !this.page) return '';

    return `/assets/audios/${this.book}/${this.page}.mp3`;
  }
}
