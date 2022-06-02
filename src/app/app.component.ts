import { Component, OnInit } from '@angular/core';
import {
  SingleCharacter,
  SuggestionService,
} from './services/suggestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tiktok-angular';
  suggestedCharacters: SingleCharacter[] = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.getAllSuggestions();
  }

  getAllSuggestions() {
    this.suggestionService.getAllCharacters().subscribe((res) => {
      this.suggestedCharacters = res.results;
      console.log(this.suggestedCharacters);
    });
  }
}
