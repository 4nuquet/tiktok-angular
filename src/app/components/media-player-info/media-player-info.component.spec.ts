import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayerInfoComponent } from './media-player-info.component';

describe('MediaPlayerInfoComponent', () => {
  let component: MediaPlayerInfoComponent;
  let fixture: ComponentFixture<MediaPlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPlayerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
