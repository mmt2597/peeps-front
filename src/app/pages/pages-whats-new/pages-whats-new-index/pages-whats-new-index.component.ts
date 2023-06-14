import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-pages-whats-new-index',
  templateUrl: './pages-whats-new-index.component.html',
  styleUrls: ['./pages-whats-new-index.component.scss']
})
export class PagesWhatsNewIndexComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articleService
      .get({
        columnDefs: [
          { type: 'date', targets: 0 },
        ],
        order: [[0, 'desc']],
        columns: [
          { data: 'created_at', title: 'Created At' },
        ]
      })
      .subscribe((resp: any) => {
        this.articles = resp?.data;
      });
  }

}
