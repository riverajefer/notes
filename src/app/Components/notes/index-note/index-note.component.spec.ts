import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNoteComponent } from './index-note.component';

describe('IndexNoteComponent', () => {
  let component: IndexNoteComponent;
  let fixture: ComponentFixture<IndexNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
