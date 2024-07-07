import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { INews } from '../interfaces/inews.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  newNews: INews = { title: "", image: "", content: "", date: "" };
  newsList: INews[] = [];

  @Output() newsEmitida: EventEmitter<INews> = new EventEmitter();

  ngOnInit(): void {
    this.newsList = [
      {
        title: "Noticia 1",
        image: "https://via.placeholder.com/150",
        content: "Contenido de la noticia 1",
        date: "2024-06-01"
      },
      {
        title: "Noticia 2",
        image: "https://via.placeholder.com/150",
        content: "Contenido de la noticia 2",
        date: "2024-06-02"
      }
    ];
  }

  getData(): void {
    if (this.newNews.title && this.newNews.image && this.newNews.content && this.newNews.date) {
      this.newsList.push(this.newNews);
      this.newNews = { title: "", image: "", content: "", date: "" };
    } else {
      alert('Los campos no pueden estar vacíos');
    }
  }
}
