import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostService } from '../common/services/post.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public post: Post | undefined;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private service: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    if (!postId) {
      console.log('Post Id must be integer');
      this.router.navigate(['/home']);
    }
    this.getPost(postId);
  }

  getPost(postId: number): void {
    this.service.getItem(postId)
      .subscribe((post: Post) => {
        this.setTitle(post.title);
        this.post = post;
      }, (error: Error) => {
        this.router.navigate(['home']);
        throw error;
      });
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

}
