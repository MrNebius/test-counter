import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { InputComponent } from './input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        InputComponent
      ],
      imports: [
        BrowserModule,
        StoreModule.forRoot({ count: counterReducer }),
        EffectsModule.forRoot([AppEffects]),
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
