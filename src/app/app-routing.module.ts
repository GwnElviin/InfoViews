import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoginComponent } from './login/login.component'; 
import { GroupsadminComponent } from './groupsadmin/groupsadmin.component';
import { GroupsComponent } from './groups/groups.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: LoginComponent},
    { path: 'group', component: GroupsComponent},
    { path: 'admin/group', component: GroupsadminComponent},
    { path: 'group/rooms', component: RoomsComponent},
    { path: 'group/profile', component: ProfileComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    AppComponent, 
    AppNavbarComponent, 
    LoginComponent,  
    GroupsadminComponent,
    GroupsComponent,
    RoomsComponent,
    ProfileComponent
]