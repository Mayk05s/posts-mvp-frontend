import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable()
export class PostService {
  postsUrl = `${environment.apiUrl}/posts`;


  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Post> {

    const postUrl = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(postUrl)
      .pipe(
        catchError(this.handleError),
        map((post: Post) => {
          if (!post.body || !post.title) {
            throw new Error(`The post has not title or body, please try another id`);
          }
          return post;
        }),
      );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      throw new Error(error.error.message);
    }
    // Return an observable with a user-facing error message.
    return throwError(error);
  }
}
