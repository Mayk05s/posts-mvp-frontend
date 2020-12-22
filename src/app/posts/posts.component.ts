import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postId: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {}

  public getDetail(postId: number): void {
    if (postId && Number.isInteger(postId)) {
      this.router.navigate(['/detail', postId]);
      return;
    }
    console.log('Post Id must be integer test');
    this.postId.reset();
  }

}
