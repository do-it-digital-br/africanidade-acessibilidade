import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnInit {

  public book: string | undefined;
  public page: string | undefined;

  public player = new Audio;
  
  public backgrounds = {
    'aprendendo-com-biel': '#8fd1eb',
    'caminhando-com-paulo': '#b0b1b5',
    'minha-africa-brasileira': '#cde5cd',
    'nvula-ibua-kudiulu': '#8a82bb',
    'olhando-com-ritinha': '#5ac3e1',
    'sururu-na-savana': '#915d4f'
  }

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.book) this.book = params.book;
      if (params.page) this.page = params.page;

      this.player.src = this.audioSrc;
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

  public get backgroundColor(): string {
    if (!this.book) return '';

    return this.backgrounds[this.book];
  }

  public get isPaused(): boolean {
    if (!this.player) return false;
    return this.player.paused;
  }

  public onPause(): void {
    this.player.pause()
  }

  public onPlay(): void {
    this.player.play()
  }
}
