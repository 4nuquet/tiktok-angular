import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-media-player-info',
  templateUrl: './media-player-info.component.html',
  styleUrls: ['./media-player-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaPlayerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
