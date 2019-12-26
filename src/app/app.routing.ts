import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';

//  { path: 'details/:id', component: DetailsComponent},
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'sidebar', component: SidebarComponent }]
  },
  { path: 'details/:id', component: DetailsComponent,canActivate: [AuthGuard],},
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

  // otherwise redirect to home
  //   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
