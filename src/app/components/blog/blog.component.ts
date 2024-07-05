import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newsList = [
    {
      title: 'Noticia Inicial 1',
      image: 'https://via.placeholder.com/150',
      content: 'Contenido de la noticia inicial 1',
      date: '2024-06-22'
    },
    {
      title: 'Noticia Inicial 2',
      image: 'https://via.placeholder.com/150',
      content: 'Contenido de la noticia inicial 2',
      date: '2024-06-22'
    }
  ];

  newNews = {
    title: '',
    image: '',
    content: '',
    date: ''
  };

  addNews() {
    if (this.newNews.title && this.newNews.image && this.newNews.content && this.newNews.date) {
      this.newsList.push({ ...this.newNews });
      this.newNews = { title: '', image: '', content: '', date: '' };
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

}
