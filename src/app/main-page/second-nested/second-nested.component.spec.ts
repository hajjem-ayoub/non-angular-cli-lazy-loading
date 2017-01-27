/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondNestedComponent } from './second-nested.component';

describe('SecondNestedComponent', () => {
  let component: SecondNestedComponent;
  let fixture: ComponentFixture<SecondNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
