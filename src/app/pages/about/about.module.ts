import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        // Angular + Externals
        CommonModule,

        // Application
        AboutRoutingModule,
        ComponentsModule
    ]
})
export class AboutModule { }
