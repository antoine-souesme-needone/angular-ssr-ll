import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExampleStore } from '@app/stores/example.store';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements OnInit {

    constructor(
        public exampleStore: ExampleStore
    ) { }

    ngOnInit() {

        setTimeout(() => {
            this.exampleStore.doSomething();
        }, 1500);
    }

}
