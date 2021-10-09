import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitAssignmnetComponent } from './submit-assignmnet.component';

describe('SubmitAssignmnetComponent', () => {
  let component: SubmitAssignmnetComponent;
  let fixture: ComponentFixture<SubmitAssignmnetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAssignmnetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitAssignmnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
