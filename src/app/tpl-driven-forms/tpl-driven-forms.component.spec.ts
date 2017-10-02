import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplDrivenFormsComponent } from './tpl-driven-forms.component';

describe('TplDrivenFormsComponent', () => {
  let component: TplDrivenFormsComponent;
  let fixture: ComponentFixture<TplDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
