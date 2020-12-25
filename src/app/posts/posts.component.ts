import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postId = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.pattern('[0-9]*')
  ]);

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Home');
  }

  public getDetail(postId: number): void {
    if (postId && Number.isInteger(postId)) {
      this.router.navigate(['/detail', postId]);
      return;
    }
    console.log('Post Id must be integer test');
    this.postId.reset();
  }

}
