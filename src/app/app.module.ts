import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobxAngularModule } from 'mobx-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Angular + Externals
        BrowserModule.withServerTransition({ appId: 'boilerplate-angular-ssr-ll' }),
        MobxAngularModule,

        // Application
        AppRoutingModule

        /**
         * Keep in mind that Application modules (shared.module or components.module) imported here
         * are only meant to be used in app.component.ts.
         * Everything else is lazy loaded.
         */
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
