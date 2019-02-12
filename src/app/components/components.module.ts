import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [
        // Angular + Externals
        CommonModule,

        // Application
        // /!\ Should not import any Application Module, for lazy loading purpose /!\
    ]
})
export class ComponentsModule { }
