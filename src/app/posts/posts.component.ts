import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { Title } from '@angular/platform-browser';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  postId: FormControl = new FormControl('', [
    Validators.required,
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
