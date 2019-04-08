import { Action } from '@ngrx/store';

export enum ActionTypes {
  Change = '[Counter Component] Change',
  Increase = '[Counter Component] Increase',
  Decrease = '[Counter Component] Decrease',
  Reset = '[Counter Component] Reset'
}

export class Change implements Action {
  readonly type = ActionTypes.Change;
}

export class Increase implements Action {
  readonly type = ActionTypes.Increase;
}

export class Decrease implements Action {
  readonly type = ActionTypes.Decrease;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
