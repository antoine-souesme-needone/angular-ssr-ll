import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        // Angular + Externals
        CommonModule,
        MobxAngularModule,

        // Application
        AboutRoutingModule
    ]
})
export class AboutModule { }
