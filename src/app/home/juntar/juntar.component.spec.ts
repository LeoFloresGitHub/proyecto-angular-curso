import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntarComponent } from './juntar.component';

describe('JuntarComponent', () => {
  let component: JuntarComponent;
  let fixture: ComponentFixture<JuntarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
