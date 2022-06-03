import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  @Input() suggestions: any;
  maxSuggestions = 5;
  showMaxSuggestions = true;

  constructor() {}

  ngOnInit(): void {
    console.log('desde suggestions', this.suggestions);
  }

  showMoreSuggestions() {
    if (!this.showMaxSuggestions) {
      this.maxSuggestions = 5;
    } else {
      this.maxSuggestions = 15;
    }
    this.showMaxSuggestions = !this.showMaxSuggestions;
  }
}
