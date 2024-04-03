import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/user/login/login.component';
import { ROUTE } from '../common/constants/page-route';


const routes: Routes = [
    {path: '', redirectTo : ROUTE.Login, pathMatch: 'full'},
    {path: ROUTE.Login, component:LoginComponent},
//   { path: PAGE_ROUTE.Login, component: LoginComponent },
//   { path: PAGE_ROUTE.Unauthorized, component: UnauthorizedComponent },
//   { path: PAGE_ROUTE.NotFound, component: PageNotFoundComponent },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
