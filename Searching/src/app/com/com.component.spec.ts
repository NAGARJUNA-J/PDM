import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ComComponent } from './com.component';

describe('ComComponent', () => {
  let component: ComComponent;
  let fixture: ComponentFixture<ComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComComponent ],
      imports: [
    
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
