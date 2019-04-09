import * as counterActions from '../actions/counter.actions'
import * as counterReducer from './counter.reducer'
import { Action } from '@ngrx/store';

describe('CounterReducer', () => {
  describe('undefined action', () => {
    it('should return default state', () => {
      const { initialState } = counterReducer;
      const action: Action = {} as Action;
      const state = counterReducer.counterReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Change action', () => {
    it('should return previous state', () => {
      const { initialState } = counterReducer;
      const action: Action = new counterActions.Change();
      const state = counterReducer.counterReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Increase action', () => {
    it('should increase first variable by 1', () => {
      const { initialState } = counterReducer;
      const action: Action = new counterActions.Increase();
      const state: counterReducer.State = counterReducer.counterReducer(initialState, action);

      expect(state.a).toBe(++initialState.a);
    });
  });

  describe('Decrease action', () => {
    it('action should decrease second variable by 1', () => {
      const { initialState } = counterReducer;
      const action: Action = new counterActions.Decrease();
      const state = counterReducer.counterReducer(initialState, action);

      expect(state.b).toBe(--initialState.b);
    });
  });

  describe('Reset action', () => {
    it('action should reset to initialState', () => {
      const { initialState } = counterReducer;

      const action1: Action = new counterActions.Decrease();
      const state1 = counterReducer.counterReducer(initialState, action1);

      expect(state1.b).toBe(--initialState.b);

      const action2: Action = new counterActions.Reset();
      const state2 = counterReducer.counterReducer(initialState, action2);

      expect(state2).toBe(initialState);
    });
  });
});
