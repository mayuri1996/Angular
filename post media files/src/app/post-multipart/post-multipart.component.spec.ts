import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMultipartComponent } from './post-multipart.component';

describe('PostMultipartComponent', () => {
  let component: PostMultipartComponent;
  let fixture: ComponentFixture<PostMultipartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMultipartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMultipartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
