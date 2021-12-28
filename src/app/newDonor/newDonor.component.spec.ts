/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewDonorComponent } from './newDonor.component';

describe('NewDonorComponent', () => {
  let component: NewDonorComponent;
  let fixture: ComponentFixture<NewDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
