import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';
import { ActionTypes, Decrease, Increase} from './store/actions/counter.actions';

@Injectable()
export class AppEffects {

  @Effect()
  ChangeVariables$: Observable<Action> = this.actions$
    .pipe(
      ofType(ActionTypes.Change),
      concatMapTo([
        new Increase(),
        new Decrease(),
        new Decrease()
      ])
  );

  constructor(private actions$: Actions) {}
}
