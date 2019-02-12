import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { ExampleComponent } from './example/example.component';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        // Angular + Externals
        CommonModule,
        MobxAngularModule,

        // Application
        // /!\ Should not import any Application Module, for lazy loading purpose /!\
        // /!\ If you import application modules, they will be duplicated each time you import ComponentsModule /!\
    ],
    exports: [
        ExampleComponent
    ]
})
export class ComponentsModule { }
