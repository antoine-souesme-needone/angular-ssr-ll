import { Component, OnInit } from '@angular/core';
import { ExampleStore } from '@app/stores/example.store';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        public exampleStore: ExampleStore
    ) { }

    ngOnInit() { }

}
