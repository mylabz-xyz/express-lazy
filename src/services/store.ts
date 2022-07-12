// https://stackoverflow.com/a/61889323
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, materialize, dematerialize } from 'rxjs/operators';
import merge from 'ts-deepmerge';

interface StoreItem {
  [key: string]: {
    name?: any;
    type?: string;
    callback?: (value?: any) => {} | void;
    updateValue?: boolean;
    value?: any;
    isRequired?: boolean;
    [key: string]: any;
  };
}

/**
 * @name Store
 * @description Creates an class who help to hold simple reactive store.
 * @return {Store} Class
 */
export class Store {
  store = new BehaviorSubject<any>(null);
  store$ = this.store.asObservable().pipe();

  /**
   * @name emit
   * @description Emit or actualize an StoreItem.
   * @param StoreItem Object, see StoreItem interface for more
   * @return  null
   */
  emit(storeItem: StoreItem) {
    const combined = merge({ ...this.store.value }, { ...storeItem });
    this.store.next(combined);
  }

  /**
   * @name listen
   * @description Creates an observable from a given function name.
   * @param {string} StoreItemName (by key)
   * @return {Observable} StoreItem
   */
  listen(StoreItemName?: string): Observable<StoreItem | StoreItem[]> {
    return StoreItemName
      ? this.store$.pipe(
          filter(value => value && value[StoreItemName]),
          map(value => value[StoreItemName])
        )
      : this.store$.pipe(filter(value => value));
  }
}

module.exports = new Store();
