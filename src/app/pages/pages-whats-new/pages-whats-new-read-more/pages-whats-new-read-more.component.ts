import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-pages-whats-new-read-more',
  templateUrl: './pages-whats-new-read-more.component.html',
  styleUrls: ['./pages-whats-new-read-more.component.scss']
})
export class PagesWhatsNewReadMoreComponent implements OnInit {
  uuid!: string;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.uuid = this.route.snapshot.params['uuid'];
  }

  ngOnInit(): void {
    this.getArticle();
  }

  private getArticle() {
    this.articleService.getById(this.uuid)
      .subscribe((res: any) => this.article = res.data);
  }

}
