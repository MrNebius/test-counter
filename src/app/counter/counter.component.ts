import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, interval, Subject } from 'rxjs';
import { Change, Increase, Decrease, Reset } from '../store/actions/counter.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  private destroySubscription: Subject<any> = new Subject<any>();
  private source = interval(1000).pipe(takeUntil(this.destroySubscription));

  increase() {
    this.store.dispatch(new Increase());
  }

  decrease() {
    this.store.dispatch(new Decrease());
  }

  start() {
    this.source.subscribe(() => this.store.dispatch(new Change()));
  }

  stop() {
    this.destroySubscription.next(null);
  }

  reset() {
    this.stop();
    this.store.dispatch(new Reset());
  }
}
