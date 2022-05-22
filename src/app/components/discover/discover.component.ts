import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
