import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newsList = [
    {
      title: 'Noticia de ejemplo 1',
      image: 'https://via.placeholder.com/100',
      content: 'Contenido de la noticia ejemplo 1',
      date: '2024-07-06'
    },
    {
      title: 'Noticia de ejemplo 2',
      image: 'https://via.placeholder.com/100',
      content: 'Contenido de la noticia ejemplo 2',
      date: '2024-07-05'
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
      alert('Completa todos los campos para publicar la noticia');
    }
  }

}
