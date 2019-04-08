import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/counter.actions';

export interface State {
  a: number;
  b: number;
}

export const initialState: State = {
  a: -5,
  b: 10
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Change:
      return state;

    case ActionTypes.Increase:
      return {
        ...state,
        a: state.a + 1
      };

    case ActionTypes.Decrease:
      return {
        ...state,
        b: state.b - 1
      };

    case  ActionTypes.Reset:
      return initialState;

    default:
      return state;
  }
}
