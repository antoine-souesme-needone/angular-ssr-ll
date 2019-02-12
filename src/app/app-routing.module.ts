import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
