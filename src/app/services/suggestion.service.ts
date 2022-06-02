import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { env } from '../interfaces/env.interface';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  constructor(
    @Inject('environment') private environment: env,
    private readonly http: HttpClient
  ) {}

  getAllCharacters() {
    return this.http.get<SuggestionsCharacters>(
      `${this.environment.rickAndMorty}/character`
    );
  }
}

export interface SuggestionsCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: SingleCharacter[];
}

export interface SingleCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}
