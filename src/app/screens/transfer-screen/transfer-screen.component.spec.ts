import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferScreenComponent } from './transfer-screen.component';

describe('TransferScreenComponent', () => {
  let component: TransferScreenComponent;
  let fixture: ComponentFixture<TransferScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
