import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExampleService {

    constructor() { }

    helloWorld(): void {
        console.log('Hello World !');
    }
}
