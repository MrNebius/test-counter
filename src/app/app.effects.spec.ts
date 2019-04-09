import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable, ReplaySubject} from 'rxjs';
import { cold, hot } from 'jasmine-marbles';



import { AppEffects } from './app.effects';
import { Change, Decrease, Increase } from './store/actions/counter.actions';
import {concatMapTo, tap} from 'rxjs/operators';

describe('AppEffects', () => {
  let actions: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should work', () => {
    const action = new Change();

    actions = hot('--a-', { a: action });

    const expected = cold('--(bcd)', {
      b: new Increase(),
      c: new Decrease(),
      d: new Decrease()
    });

    expect(effects.ChangeVariables$).toBeObservable(expected);

  });

  // effects.ChangeVariables$
});
