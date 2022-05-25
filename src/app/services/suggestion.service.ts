import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENV } from '../app.module';
import { env } from '../interfaces/env.interface';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private api = this.environment.rickAndMorty;

  constructor(
     @Inject(ENV) private environment: env,

  ) {}
}
