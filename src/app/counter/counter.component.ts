import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, interval, Subscription } from 'rxjs';
import { Change, Reset } from '../store/actions/counter.actions';

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

  subscription: Subscription;
  interval$ = interval(1000);

  start() {
    this.subscription = this.interval$.subscribe(() => this.store.dispatch(new Change()));
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset() {
    this.stop();
    this.store.dispatch(new Reset());
  }
}
