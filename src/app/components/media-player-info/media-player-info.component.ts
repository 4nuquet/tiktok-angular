import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-media-player-info',
  templateUrl: './media-player-info.component.html',
  styleUrls: ['./media-player-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaPlayerInfoComponent implements OnInit {

@Input() posts : any;

  constructor() { }

  ngOnInit(): void {
  }

}
