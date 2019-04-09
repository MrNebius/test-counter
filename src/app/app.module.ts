import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
