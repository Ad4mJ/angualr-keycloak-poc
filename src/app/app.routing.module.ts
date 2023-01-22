import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/app-guard/app.guard';



const routes: Routes = [
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: 'welcome', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
	{ path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }