import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import { counterReducer, State } from '../store/reducers/counter.reducer';
import { Change, Reset } from '../store/actions/counter.actions';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
      imports: [
        StoreModule.forRoot({ count: counterReducer })
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the counter component', () => {
    expect(component).toBeTruthy();
  });

  it('should show numbers', () => {
    const a = fixture.nativeElement.querySelector('#a');
    const b = fixture.nativeElement.querySelector('#b');

    store.pipe(select('count')).subscribe((res: State) => {
      expect(a.textContent).toContain(res.a);
      expect(b.textContent).toContain(res.b);
    });
  });

  it('should start', fakeAsync(() => {
    component.start();

    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(new Change());
    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(new Change());

    component.subscription.unsubscribe();
  }));

  it('should stop', fakeAsync(() => {
    component.start();

    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(new Change());

    component.stop();

    expect(component.subscription.closed).toBeTruthy();
  }));

  it('should reset', fakeAsync(() => {
    component.start();

    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(new Change());

    component.reset();

    expect(component.subscription.closed).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledWith(new Reset());
  }));
});
