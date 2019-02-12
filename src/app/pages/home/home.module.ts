import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        // Angular + Externals
        CommonModule,

        // Application
        HomeRoutingModule,
        ComponentsModule
    ]
})
export class HomeModule { }
