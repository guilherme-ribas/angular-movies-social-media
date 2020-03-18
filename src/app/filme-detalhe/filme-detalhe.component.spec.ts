import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDetalheComponent } from './filme-detalhe.component';

describe('FilmeDetalheComponent', () => {
  let component: FilmeDetalheComponent;
  let fixture: ComponentFixture<FilmeDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
