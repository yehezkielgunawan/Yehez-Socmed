import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'https://dummyapi.io/data/api/post';
  private userUrl = 'https://dummyapi.io/data/api/user';
  private tagUrl = 'https://dummyapi.io/data/api/tag';

  httpOptions = {
    headers: new HttpHeaders({
      'app-id': 'fQI9K9rQIIYP0HN7wQuQ',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getPostsData(): Observable<any[]> {
    return this.http.get<any[]>(this.postUrl, this.httpOptions).pipe(
      tap((_) => this.log('fetched posts')),
      catchError(this.handleError<any[]>('getpost', []))
    );
  }

  
  getCommentData(postId: string): Observable<any[]>{
    return this.http.get<any>(this.postUrl + `/${postId}/comment`, this.httpOptions).pipe(
    tap((_) => this.log('fetched comment')),
    catchError(this.handleError<any[]>('getcomment', []))
    );
  }

  getUserData(userId: string): Observable<any[]>{
    return this.http.get<any>(this.userUrl + `/${userId}`, this.httpOptions).pipe(
      tap((_) => this.log(`fetched user data`)),
      catchError(this.handleError<any[]>('getUserData', []))
    );
  }

  getUserPosts(userId: string): Observable<any[]>{
    return this.http.get<any>(this.userUrl + `/${userId}/post`, this.httpOptions).pipe(
      tap((_) => this.log(`fetched user posts`)),
      catchError(this.handleError<any[]>('getUserPosts', []))
    )
  }

  getUserList(): Observable<any[]>{
    return this.http.get<any>(this.userUrl, this.httpOptions).pipe(
      tap((_) => this.log(`fetched user list`)),
      catchError(this.handleError<any[]>('getUserList', []))
    )
  }

  getTagList(): Observable<any[]>{
    return this.http.get<any>(this.tagUrl, this.httpOptions).pipe(
      tap((_) => this.log(`fetched tag list`)),
      catchError(this.handleError<any[]>(`getTagList`, []))
    )
  }

  getPostTag(tag: string): Observable<any[]>{    
    return this.http.get<any>(this.tagUrl + `/${tag}/post`, this.httpOptions).pipe(
      tap((_) => this.log(`fetched tag post`)),
      catchError(this.handleError<any[]>(`getTagPost`, []))
    )
  }
    


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }
}
