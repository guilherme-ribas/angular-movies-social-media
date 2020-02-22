import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCardComponent } from './filme-card.component';

describe('FilmeCardComponent', () => {
  let component: FilmeCardComponent;
  let fixture: ComponentFixture<FilmeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
