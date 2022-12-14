import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetItemComponent } from './tweet-item.component';

xdescribe('TweetItemComponent', () => {
  let component: TweetItemComponent;
  let fixture: ComponentFixture<TweetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
