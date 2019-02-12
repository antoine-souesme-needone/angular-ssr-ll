import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';

@Injectable({
    providedIn: 'root'
})
export class ExampleStore {

    @observable
    value = 'value';

    @action doSomething() {
        this.value = 'newValue';
    }
}
