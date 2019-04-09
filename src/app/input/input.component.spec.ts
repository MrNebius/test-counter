import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show value', () => {
    const input = fixture.nativeElement.querySelector('input');
    const display = fixture.nativeElement.querySelector('.with-border');

    component.number.setValue(20);
    fixture.detectChanges();

    expect(input.value).toBe('20');
    expect(display.textContent).toContain('20');
  });

  it('should be red', () => {
    const display = fixture.nativeElement.querySelector('.with-border');

    component.number.setValue(-20);
    fixture.detectChanges();

    expect(display.getAttribute('class')).toContain('red');
  });

  it('should be blue', () => {
    const display = fixture.nativeElement.querySelector('.with-border');

    component.number.setValue(20);
    fixture.detectChanges();

    expect(display.getAttribute('class')).toContain('blue');
  });
});
