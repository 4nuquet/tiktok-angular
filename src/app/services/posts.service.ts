import { HttpClient } from '@angular/common/http';
import { env } from './../interfaces/env.interface';
import { environment } from './../../environments/environment.prod';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    @Inject('environment') private environment : env,
    private readonly http: HttpClient
  ) { }

  getAllPosts(){
    return this.http.get<AllPosts>(`${this.environment.dummyJson}/posts`)
  }

}

export interface AllPosts {
  posts: SinglePost[];
  total: number;
  skip: number;
  limit: number
}

export interface SinglePost{
  id: number;
  title: string;
  body:string;
  tags: string[]
  reactions: number
}
